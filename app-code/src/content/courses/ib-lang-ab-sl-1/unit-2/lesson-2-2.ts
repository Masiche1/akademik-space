import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "langab-u2-lesson-2-2",
  code: "2-2",
  title: "Forms, messages and simple emails",
  goal: "I CAN complete simple forms and write short messages and emails.",
  standards: ["Writing", "Reading", "Vocabulary"],
  vocabulary: [
    { term: "Form", definition: "A document with spaces where you write personal information." },
    { term: "Name", definition: "The word or words a person is known by." },
    { term: "Address", definition: "Where someone lives, written street, city, country." },
    { term: "Message", definition: "A short written note giving information to someone." },
    { term: "Email", definition: "An electronic message sent over the internet." },
    { term: "Subject", definition: "One line that says what an email or message is about." },
  ],
  concepts: [
    {
      id: "langab-u2-forms",
      title: "Completing forms",
      skill: "Fill in simple forms with correct personal information.",
      lesson: {
        sections: [
          {
            heading: "What forms ask for",
            body: "Forms ask for personal details: **full name**, **date of birth**, **address**, **phone number**, **email**, **nationality**. Read each label carefully before writing. Write clearly and in capital letters if the form asks for that.",
          },
          {
            heading: "Common form fields",
            body: "You will see fields like **Name**, **Age**, **Address**, **Date**, **Signature**. Write only what is asked — do not add extra information. Numbers are written as digits: age 14, not fourteen.",
          },
          {
            heading: "Checking your work",
            body: "Before finishing a form, check: spelling of your name, correct numbers, dates in the right order, and your signature at the end. A small mistake can make a form invalid.",
          },
        ],
        keyFormulas: [
          { name: "Form fields", statement: "Name / Date of birth / Address / Phone / Email / Signature." },
          { name: "Checking a form", statement: "Spelling + numbers + date order + signature." },
        ],
        workedExample: {
          problem: "A form asks: 'Date of birth: ___ / ___ / ___'. How do you write 3 June 2010?",
          solution: "03 / 06 / 2010 (day / month / year).",
        },
      },
      questions: [
        {
          id: "langab-u2-l22q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A form has the label 'Full name'. What should you write?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your nickname" },
              { id: "b", text: "Only your first name" },
              { id: "c", text: "Your first and last name" },
              { id: "d", text: "Your mother's name" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Full name", statement: "Full name means first name plus family name." },
            ],
            steps: [
              { reasoning: "Full name includes first and last name.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Your first and last name",
            commonErrors: ["Writing only the first name."],
          },
        },
        {
          id: "langab-u2-l22q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Complete this mini-form with your own details (use imaginary details if needed).",
          extract: {
            title: "Student information form",
            author: "Written for Akademik Space",
            text: "Name: ______________\nAge: ____\nCountry: ______________\nEmail: ______________",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Form completion", statement: "Write one correct piece of information in each field." },
            ],
            steps: [
              { reasoning: "Name field: first and last name.", marks: 1, markCode: "M" },
              { reasoning: "Age field: a number, e.g. 14.", marks: 1, markCode: "M" },
              { reasoning: "Country and email filled with suitable answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All four fields completed correctly.",
            commonErrors: ["Writing words in the age field instead of digits."],
          },
        },
        {
          id: "langab-u2-l22q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the form and answer the questions about its owner.",
          extract: {
            title: "Library card application",
            author: "Written for Akademik Space",
            text: "Name: Maria Santos\nAge: 15\nAddress: 12 Green Street, Lisbon\nEmail: maria.s@example.com",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading forms", statement: "Match each question to the correct field on the form." },
            ],
            steps: [
              { reasoning: "Name: Maria Santos.", marks: 1, markCode: "M" },
              { reasoning: "Age: 15.", marks: 1, markCode: "M" },
              { reasoning: "Address: 12 Green Street, Lisbon.", marks: 1, markCode: "A" },
              { reasoning: "Email: maria.s@example.com.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Maria Santos; 15; 12 Green Street, Lisbon; maria.s@example.com.",
            commonErrors: ["Mixing up address and email fields."],
          },
        },
        {
          id: "langab-u2-l22q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Design a sign-up form for a school club.",
          parts: [
            { label: "a", prompt: "List four fields the form needs.", marks: 2 },
            { label: "b", prompt: "Write the form with labels and lines.", marks: 2 },
            { label: "c", prompt: "Add one instruction line, e.g. 'Please write clearly'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Form design", statement: "A form has clear labels, lines for answers and simple instructions." },
            ],
            steps: [
              { part: "a", reasoning: "Four sensible fields, e.g. name, age, class, phone.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Form layout with labels and writing lines.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A polite instruction line added.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Four fields. (b) Labelled form. (c) Instruction line.",
            commonErrors: ["Forgetting the lines where answers are written."],
          },
        },
        {
          id: "langab-u2-l22q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A form asks for your 'date of birth'. What should you write?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Today's date" },
              { id: "b", text: "Your favourite date" },
              { id: "c", text: "The day, month and year you were born" },
              { id: "d", text: "The date you joined the school" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Date of birth", statement: "Date of birth is the day, month and year a person was born." },
            ],
            steps: [
              { reasoning: "Date of birth means your birthday, not today's date.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The day, month and year you were born",
            commonErrors: ["Writing today's date instead of the birth date."],
          },
        },
        {
          id: "langab-u2-l22q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a form, an age like 14 should be written as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "fourteen" },
              { id: "c", text: "one four" },
              { id: "d", text: "four teen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Numbers on forms", statement: "Numbers on forms are written as digits, not words." },
            ],
            steps: [
              { reasoning: "Forms use digits for numbers: 14, not fourteen.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 14",
            commonErrors: ["Writing the number as a word."],
          },
        },
        {
          id: "langab-u2-l22q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A form field says 'Address'. What information does it need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your school name" },
              { id: "b", text: "Your phone number" },
              { id: "c", text: "Your street, city and country" },
              { id: "d", text: "Your email address" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Address", statement: "An address is where someone lives: street, city and country." },
            ],
            steps: [
              { reasoning: "Address means where you live, not your email address.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Your street, city and country",
            commonErrors: ["Confusing address with email address."],
          },
        },
        {
          id: "langab-u2-l22q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Before you finish a form, what should you check?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the colour of the pen" },
              { id: "b", text: "Only the date" },
              { id: "c", text: "Nothing — forms cannot be wrong" },
              { id: "d", text: "Spelling, numbers, dates and your signature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Checking a form", statement: "Check spelling, numbers, date order and signature before finishing." },
            ],
            steps: [
              { reasoning: "A careful check covers spelling, numbers, dates and the signature.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spelling, numbers, dates and your signature",
            commonErrors: ["Rushing without checking the details."],
          },
        },
        {
          id: "langab-u2-l22q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A form has a 'Signature' box at the end. What goes there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your name written by hand" },
              { id: "b", text: "Your printed name" },
              { id: "c", text: "A drawing of your face" },
              { id: "d", text: "Today's date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Signature", statement: "A signature is your name written by hand to show the form is yours." },
            ],
            steps: [
              { reasoning: "A signature is handwritten, not printed or typed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Your name written by hand",
            commonErrors: ["Printing the name instead of signing."],
          },
        },
        {
          id: "langab-u2-l22q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A form asks for your 'Nationality'. What should you write?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The language you speak" },
              { id: "b", text: "Your religion" },
              { id: "c", text: "Your favourite food" },
              { id: "d", text: "The country you come from" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nationality", statement: "Nationality is the country a person belongs to or comes from." },
            ],
            steps: [
              { reasoning: "Nationality = the country you are a citizen of or come from.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The country you come from",
            commonErrors: ["Writing a language instead of a country."],
          },
        },
        {
          id: "langab-u2-l22q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should you write clearly on an official form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because forms look nicer" },
              { id: "b", text: "It is not important" },
              { id: "c", text: "To use less paper" },
              { id: "d", text: "So the information can be read correctly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clear writing", statement: "Clear handwriting ensures the information on a form is read correctly." },
            ],
            steps: [
              { reasoning: "Clear writing prevents mistakes when someone reads the form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** So the information can be read correctly",
            commonErrors: ["Thinking handwriting style does not matter on forms."],
          },
        },
        {
          id: "langab-u2-l22q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A form asks for your 'Phone number'. Which is the correct way to write it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "my mum's number is better" },
              { id: "b", text: "612 345 678" },
              { id: "c", text: "call me maybe" },
              { id: "d", text: "six one two three four five six seven eight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Phone numbers", statement: "Phone numbers on forms are written as digits, often in groups." },
            ],
            steps: [
              { reasoning: "Phone numbers use digits grouped for easy reading, e.g. 612 345 678.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 612 345 678",
            commonErrors: ["Writing the number as words or leaving it blank."],
          },
        },
        {
          id: "langab-u2-l22q17",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Complete this mini-form with your own details (use imaginary details if needed).",
          extract: {
            title: "Class list form",
            author: "Written for Akademik Space",
            text: "Name: ______________\nAge: ____\nClass: ____",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Form completion", statement: "Write one correct piece of information in each field." },
            ],
            steps: [
              { reasoning: "Name: first and last name.", marks: 1, markCode: "M" },
              { reasoning: "Age: a number as digits.", marks: 1, markCode: "M" },
              { reasoning: "Class: a sensible class name such as 7B.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All three fields completed correctly.",
            commonErrors: ["Writing words instead of digits for age."],
          },
        },
        {
          id: "langab-u2-l22q18",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Read the form and answer: In which city does she live? What is her phone number? What is her email? How old is she?",
          extract: {
            title: "Sports club application",
            author: "Written for Akademik Space",
            text: "Name: Ana Ruiz\nAge: 14\nAddress: 8 Sun Street, Valencia\nPhone: 655 201 938\nEmail: ana.ruiz@example.com",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading forms", statement: "Match each question to the correct field on the form." },
            ],
            steps: [
              { reasoning: "City: Valencia (from the address).", marks: 1, markCode: "M" },
              { reasoning: "Phone: 655 201 938.", marks: 1, markCode: "M" },
              { reasoning: "Email: ana.ruiz@example.com.", marks: 1, markCode: "A" },
              { reasoning: "Age: 14.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Valencia; 655 201 938; ana.ruiz@example.com; 14.",
            commonErrors: ["Giving the street instead of the city."],
          },
        },
        {
          id: "langab-u2-l22q19",
          difficulty: "core",
          totalMarks: 5,
          stem: "This application form has three mistakes. Find and correct them.",
          extract: {
            title: "Camp application",
            author: "Written for Akademik Space",
            text: "Name: John Smith\nDate of birth: 31/02/2012\nAge: fourteen\nAddress: Madrid",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Checking forms", statement: "Dates must be real, numbers must be digits and addresses must be complete." },
            ],
            steps: [
              { reasoning: "31/02/2012 is impossible — February has no 31st.", marks: 1, markCode: "M" },
              { reasoning: "The date should be a real day, e.g. 28/02/2012 or another date.", marks: 1, markCode: "A" },
              { reasoning: "Age 'fourteen' should be digits: 12 or the correct age.", marks: 1, markCode: "M" },
              { reasoning: "The address 'Madrid' is incomplete — a street is needed.", marks: 1, markCode: "A" },
              { reasoning: "All three mistakes identified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Impossible date 31/02; age as word not digits; incomplete address.",
            commonErrors: ["Missing one of the three mistakes."],
          },
        },
        {
          id: "langab-u2-l22q20",
          difficulty: "core",
          totalMarks: 5,
          stem: "Design a registration form for a new student at your school.",
          parts: [
            { label: "a", prompt: "List four fields the form needs.", marks: 2 },
            { label: "b", prompt: "Write the form with labels and lines.", marks: 2 },
            { label: "c", prompt: "Add one instruction line.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Form design", statement: "A form has clear labels, lines for answers and simple instructions." },
            ],
            steps: [
              { part: "a", reasoning: "Four sensible fields, e.g. name, age, class, phone.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The form layout has labels and writing lines.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A polite instruction such as 'Please write clearly'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Four fields. (b) Labelled form. (c) Instruction line.",
            commonErrors: ["Forgetting the answer lines."],
          },
        },
        {
          id: "langab-u2-l22q21",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write each date of birth in the format dd/mm/yyyy: 1) 7 November 2010 2) 25 December 2009 3) 3 May 2011 4) 30 January 2008.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Date format", statement: "dd/mm/yyyy puts the day first, then month, then year; single digits get a zero." },
            ],
            steps: [
              { reasoning: "7 November 2010 = 07/11/2010.", marks: 1, markCode: "M" },
              { reasoning: "25 December 2009 = 25/12/2009.", marks: 1, markCode: "M" },
              { reasoning: "3 May 2011 = 03/05/2011.", marks: 1, markCode: "A" },
              { reasoning: "30 January 2008 = 30/01/2008.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "07/11/2010; 25/12/2009; 03/05/2011; 30/01/2008.",
            commonErrors: ["Writing month before day or forgetting the zero."],
          },
        },
        {
          id: "langab-u2-l22q22",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Read the camp registration form and answer the questions.",
          extract: {
            title: "Summer camp registration",
            author: "Written for Akademik Space",
            text: "Name: Leo Martins\nAge: 12\nClass: 7B\nEmergency contact: Mrs Martins, 655 441 209\nMedical info: none\nSignature: ____________",
          },
          parts: [
            { label: "a", prompt: "Write Leo's name, age and class.", marks: 2 },
            { label: "b", prompt: "Write the emergency contact phone number and medical information.", marks: 2 },
            { label: "c", prompt: "What must Leo still do to finish the form, and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Completing forms", statement: "Read each field carefully and finish every required part of the form." },
            ],
            steps: [
              { part: "a", reasoning: "Leo Martins, 12, class 7B — all three correct.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Phone 655 441 209 and medical info 'none' both correct.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "He must sign the form because a signature shows the form is his and complete.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name/age/class. (b) Phone + medical. (c) Sign the form.",
            commonErrors: ["Missing the empty signature line."],
          },
        },
        {
          id: "langab-u2-l22q23",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why an official form asks for your 'full name' and not a nickname.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Form conventions", statement: "Official forms need formal, identifying information." },
            ],
            steps: [
              { reasoning: "Full name means first name plus family name.", marks: 1, markCode: "M" },
              { reasoning: "It identifies the person officially and legally.", marks: 1, markCode: "A" },
              { reasoning: "A nickname is informal and may not identify you.", marks: 1, markCode: "A" },
              { reasoning: "Forms are official documents, so formal information is needed.", marks: 1, markCode: "R" },
              { reasoning: "The explanation is clear and complete.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Full name identifies you officially; a nickname is informal and not accepted.",
            commonErrors: ["Saying only 'because it is a rule' without a reason."],
          },
        },
        {
          id: "langab-u2-l22q24",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Create a sign-up form for the school football team.",
          parts: [
            { label: "a", prompt: "List five fields the form needs.", marks: 2 },
            { label: "b", prompt: "Write the form with labels and lines.", marks: 2 },
            { label: "c", prompt: "Add two instruction lines.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Form design", statement: "A good form has all needed fields, clear labels, answer lines and instructions." },
            ],
            steps: [
              { part: "a", reasoning: "Five sensible fields, e.g. name, age, class, position, parent contact.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The written form shows labels and lines for answers.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two useful instructions, e.g. 'Write clearly' and 'Sign at the bottom'.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Five fields. (b) Labelled form. (c) Two instructions.",
            commonErrors: ["Missing contact details or instructions."],
          },
        },
      ],
    },
    {
      id: "langab-u2-messages-emails",
      title: "Messages and simple emails",
      skill: "Write short messages and emails with a greeting, the message and a polite ending.",
      lesson: {
        sections: [
          {
            heading: "Structure of a message",
            body: "A short message has three parts: a **greeting** (Hi Ana, / Dear Mr Lopez,), the **message** itself, and a **polite ending** (Thanks, / See you, / Best wishes,). Keep it short and clear.",
          },
          {
            heading: "Structure of an email",
            body: "An email adds an opening line: To, From, **Subject**, then the greeting. Example subject: \"Sports day on Friday\". In the body say why you write, give the information, and end politely.",
          },
          {
            heading: "Simple email practice",
            body: "A beginner email: \"Dear Mr Lopez, Thank you for your email. I cannot come to the meeting on Monday. I am sick. Sorry! Best wishes, Tom\". Keep sentences short and check spelling before sending.",
          },
        ],
        keyFormulas: [
          { name: "Message structure", statement: "Greeting + message + polite ending." },
          { name: "Email parts", statement: "To / From / Subject / Greeting / Body / Ending." },
        ],
        workedExample: {
          problem: "Write a one-line subject for an email about a cancelled trip.",
          solution: "Trip cancelled on Friday",
        },
      },
      questions: [
        {
          id: "langab-u2-l22q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three parts of a short message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subject, body, signature" },
              { id: "b", text: "Hello, please, thanks" },
              { id: "c", text: "Greeting, message, polite ending" },
              { id: "d", text: "Name, address, date" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message structure", statement: "A message = greeting + message + polite ending." },
            ],
            steps: [
              { reasoning: "Greeting, message and polite ending are the three parts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Greeting, message, polite ending",
            commonErrors: ["Confusing message structure with formal letter structure."],
          },
        },
        {
          id: "langab-u2-l22q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a short message (three lines) telling a friend you cannot meet on Saturday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Short message", statement: "Greeting, reason and polite ending in three short lines." },
            ],
            steps: [
              { reasoning: "Greeting line, e.g. \"Hi Sam,\"", marks: 1, markCode: "M" },
              { reasoning: "Message line giving the reason, e.g. \"Sorry, I can't meet on Saturday.\"", marks: 1, markCode: "M" },
              { reasoning: "Polite ending, e.g. \"See you next week.\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hi Sam, / Sorry, I can't meet on Saturday. / See you next week.",
            commonErrors: ["Missing the greeting or the ending."],
          },
        },
        {
          id: "langab-u2-l22q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the email and answer the questions.",
          extract: {
            title: "Email from a friend",
            author: "Written for Akademik Space",
            text: "To: me\nFrom: Julia\nSubject: Cinema on Friday\nHi! Do you want to go to the cinema on Friday? The new film starts at seven. Reply soon! Julia",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading emails", statement: "Read the subject first, then find the question and details in the body." },
            ],
            steps: [
              { reasoning: "The email is about going to the cinema.", marks: 1, markCode: "M" },
              { reasoning: "It is on Friday; the film starts at seven.", marks: 1, markCode: "M" },
              { reasoning: "Julia asks if the reader wants to go — a yes/no answer is needed.", marks: 1, markCode: "A" },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Cinema on Friday; film starts at seven; Julia asks to go together.",
            commonErrors: ["Missing the time of the film."],
          },
        },
        {
          id: "langab-u2-l22q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write an email to your teacher saying you cannot attend a meeting.",
          parts: [
            { label: "a", prompt: "Write To, From and Subject lines.", marks: 2 },
            { label: "b", prompt: "Write a greeting and one sentence giving the reason.", marks: 2 },
            { label: "c", prompt: "Write a polite ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email format", statement: "Email = To/From/Subject + greeting + body + polite ending." },
            ],
            steps: [
              { part: "a", reasoning: "All three header lines present and correct.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Greeting plus a clear reason in a full sentence.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Polite ending such as \"Best wishes\" or \"Thank you\".", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Headers. (b) Greeting + reason. (c) Ending.",
            commonErrors: ["No subject line or no polite ending."],
          },
        },
        {
          id: "langab-u2-l22q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a polite ending for a message or email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whatever" },
              { id: "b", text: "Bye bye bye" },
              { id: "c", text: "Best wishes," },
              { id: "d", text: "See ya!" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite endings", statement: "Messages end politely: Thanks, See you, Best wishes." },
            ],
            steps: [
              { reasoning: "'Best wishes' is a standard polite ending.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Best wishes,",
            commonErrors: ["Using a very informal ending for a teacher or formal email."],
          },
        },
        {
          id: "langab-u2-l22q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an email, the 'Subject' line tells you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "when the email was sent" },
              { id: "b", text: "what the email is about" },
              { id: "c", text: "how long the email is" },
              { id: "d", text: "who sent the email" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subject", statement: "The subject is one line that says what the email is about." },
            ],
            steps: [
              { reasoning: "The subject gives the topic of the email.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What the email is about",
            commonErrors: ["Confusing subject with sender."],
          },
        },
        {
          id: "langab-u2-l22q27",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a message, 'Dear Mr Lopez,' is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the subject line" },
              { id: "b", text: "the greeting" },
              { id: "c", text: "the polite ending" },
              { id: "d", text: "the signature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Greeting", statement: "The greeting opens the message: Hi Ana, / Dear Mr Lopez," },
            ],
            steps: [
              { reasoning: "'Dear Mr Lopez,' opens the message — it is the greeting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The greeting",
            commonErrors: ["Confusing greeting with ending."],
          },
        },
        {
          id: "langab-u2-l22q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "The lines 'To:', 'From:' and 'Subject:' at the top of an email are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the polite ending" },
              { id: "b", text: "the body" },
              { id: "c", text: "the greeting" },
              { id: "d", text: "the header lines" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email header", statement: "To, From and Subject form the header at the top of an email." },
            ],
            steps: [
              { reasoning: "To/From/Subject sit at the top before the greeting — the header.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The header lines",
            commonErrors: ["Thinking the subject is part of the body."],
          },
        },
        {
          id: "langab-u2-l22q29",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Hi Ana,' at the start of a message is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a formal greeting" },
              { id: "b", text: "a subject line" },
              { id: "c", text: "a polite ending" },
              { id: "d", text: "an informal greeting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal greetings", statement: "'Hi + name' is informal; 'Dear + title/name' is more formal." },
            ],
            steps: [
              { reasoning: "'Hi Ana' is friendly and informal, used with friends.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An informal greeting",
            commonErrors: ["Using 'Hi' with a teacher or in formal emails."],
          },
        },
        {
          id: "langab-u2-l22q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "The body of an email should...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "say why you are writing and give the information" },
              { id: "b", text: "be as long as possible" },
              { id: "c", text: "repeat the subject three times" },
              { id: "d", text: "contain only pictures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email body", statement: "The body says why you write, gives the information and asks for a reply if needed." },
            ],
            steps: [
              { reasoning: "The body explains the reason and the message itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Say why you are writing and give the information",
            commonErrors: ["Writing a body with no clear reason."],
          },
        },
        {
          id: "langab-u2-l22q31",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How is a simple email different from a short message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An email cannot have a greeting" },
              { id: "b", text: "An email has To, From and Subject lines; a message does not" },
              { id: "c", text: "A message is always longer" },
              { id: "d", text: "There is no difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email vs message", statement: "An email adds To/From/Subject header lines to the greeting-message-ending structure." },
            ],
            steps: [
              { reasoning: "The email header (To, From, Subject) is the main structural difference.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** An email has To, From and Subject lines; a message does not",
            commonErrors: ["Thinking messages cannot have subjects."],
          },
        },
        {
          id: "langab-u2-l22q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "A message ends with 'Reply soon!' What does this ask the reader to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Send money" },
              { id: "b", text: "Forget the message" },
              { id: "c", text: "Stop reading" },
              { id: "d", text: "Answer quickly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Requests in messages", statement: "'Reply soon!' is a polite request for a quick answer." },
            ],
            steps: [
              { reasoning: "Reply soon means the sender wants an answer quickly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Answer quickly",
            commonErrors: ["Missing the request for a reply."],
          },
        },
        {
          id: "langab-u2-l22q33",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a three-line message to your teacher: a greeting, say you are sick today, and a polite ending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message structure", statement: "Greeting + message + polite ending." },
            ],
            steps: [
              { reasoning: "A suitable greeting, e.g. 'Dear Mr Lopez,' or 'Hello,'", marks: 1, markCode: "M" },
              { reasoning: "A clear sentence saying you are sick today.", marks: 1, markCode: "M" },
              { reasoning: "A polite ending such as 'Thank you' or 'Best wishes'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dear Mr Lopez, / I am sick today and cannot come to class. / Thank you, / Ana",
            commonErrors: ["Missing the greeting or ending."],
          },
        },
        {
          id: "langab-u2-l22q34",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Read the message and answer: What event is it about? Why can't Sara come? Who wrote it? Is the tone polite?",
          extract: {
            title: "Message from Sara",
            author: "Written for Akademik Space",
            text: "Hi Tom,\nSorry, I can't come to the party on Saturday. My grandmother is visiting.\nSee you soon,\nSara",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading messages", statement: "Find the event, the reason and the writer in a short message." },
            ],
            steps: [
              { reasoning: "The message is about a party on Saturday.", marks: 1, markCode: "M" },
              { reasoning: "Sara cannot come because her grandmother is visiting.", marks: 1, markCode: "M" },
              { reasoning: "Sara wrote it (signed at the end).", marks: 1, markCode: "A" },
              { reasoning: "The tone is polite — sorry and see you soon.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Party Saturday; grandmother visiting; Sara; polite.",
            commonErrors: ["Missing the reason for not coming."],
          },
        },
        {
          id: "langab-u2-l22q35",
          difficulty: "core",
          totalMarks: 5,
          stem: "Read the email and answer: On which day is the trip? What time do they leave? What two things must students bring? Who sent the email?",
          extract: {
            title: "Trip email",
            author: "Written for Akademik Space",
            text: "To: class group\nFrom: Mr Diaz\nSubject: Trip to the museum\nDear students,\nOur class trip is on Thursday 12 June. We leave at 8:30 am. Please bring a notebook and a water bottle.\nBest wishes,\nMr Diaz",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading emails", statement: "Read the subject first, then find details in the body." },
            ],
            steps: [
              { reasoning: "The trip is on Thursday 12 June.", marks: 1, markCode: "M" },
              { reasoning: "They leave at 8:30 am.", marks: 1, markCode: "M" },
              { reasoning: "Students must bring a notebook and a water bottle.", marks: 1, markCode: "A" },
              { reasoning: "Mr Diaz sent it (From line and signature).", marks: 1, markCode: "A" },
              { reasoning: "All details correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Thursday 12 June; 8:30 am; notebook + water bottle; Mr Diaz.",
            commonErrors: ["Missing one of the two items to bring."],
          },
        },
        {
          id: "langab-u2-l22q36",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write an email inviting a friend to your birthday party.",
          parts: [
            { label: "a", prompt: "Write the To, From and Subject lines.", marks: 2 },
            { label: "b", prompt: "Write a greeting and one sentence inviting your friend.", marks: 2 },
            { label: "c", prompt: "Give the date and time, then a polite ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email format", statement: "Email = To/From/Subject + greeting + body + polite ending." },
            ],
            steps: [
              { part: "a", reasoning: "All three header lines present with a sensible subject.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Greeting plus a clear invitation sentence.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Date/time given and a polite ending such as 'See you there!'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Headers. (b) Greeting + invitation. (c) Details + ending.",
            commonErrors: ["No subject line or no date/time."],
          },
        },
        {
          id: "langab-u2-l22q37",
          difficulty: "core",
          totalMarks: 4,
          stem: "This message is missing its parts: 'party saturday come!' Rewrite it as a proper three-part message.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message structure", statement: "A message needs a greeting, a clear message and a polite ending, in that order." },
            ],
            steps: [
              { reasoning: "A greeting is added, e.g. 'Hi Sam,'.", marks: 1, markCode: "M" },
              { reasoning: "The message is written as a full sentence, e.g. 'Please come to my party on Saturday.'", marks: 1, markCode: "M" },
              { reasoning: "A polite ending is added, e.g. 'See you then!'.", marks: 1, markCode: "A" },
              { reasoning: "The three parts appear in the correct order.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Hi Sam, / Please come to my party on Saturday. / See you then!",
            commonErrors: ["Keeping it as one rushed line without parts."],
          },
        },
        {
          id: "langab-u2-l22q38",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a formal email to the school office saying you cannot attend Monday's meeting.",
          parts: [
            { label: "a", prompt: "Write the To, From and Subject lines.", marks: 2 },
            { label: "b", prompt: "Write a formal greeting and one sentence giving the reason.", marks: 2 },
            { label: "c", prompt: "Apologise politely and write a formal ending.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal email", statement: "Formal emails use Dear + title, clear reasons, apologies and polite endings." },
            ],
            steps: [
              { part: "a", reasoning: "Header lines correct with a subject like 'Absence on Monday'.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Formal greeting (Dear Sir/Madam or Dear Office) plus a clear reason.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "An apology and a formal ending such as 'Yours faithfully'.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Headers. (b) Greeting + reason. (c) Apology + ending.",
            commonErrors: ["Using an informal greeting like 'Hi' for the office."],
          },
        },
        {
          id: "langab-u2-l22q39",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two messages end differently: Message A ends 'See ya!', Message B ends 'Best wishes, Tom'. Which ending is better for a message to your teacher, and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register", statement: "The ending should match the relationship: informal for friends, polite for teachers." },
            ],
            steps: [
              { reasoning: "'Best wishes, Tom' is better for a teacher.", marks: 1, markCode: "M" },
              { reasoning: "'See ya!' is very informal and suits friends.", marks: 1, markCode: "M" },
              { reasoning: "Teachers deserve polite, respectful language.", marks: 1, markCode: "A" },
              { reasoning: "'Best wishes' is a standard polite ending.", marks: 1, markCode: "A" },
              { reasoning: "The comparison is clear and justified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "B is better — polite register suits a teacher.",
            commonErrors: ["Choosing the shorter ending without thinking about register."],
          },
        },
        {
          id: "langab-u2-l22q40",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a reply email accepting an invitation to the school concert.",
          parts: [
            { label: "a", prompt: "Write a subject line and a greeting.", marks: 2 },
            { label: "b", prompt: "Accept the invitation and give one detail, e.g. you will come.", marks: 2 },
            { label: "c", prompt: "Write a polite ending.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Replying to emails", statement: "A reply keeps the email structure and answers the invitation clearly." },
            ],
            steps: [
              { part: "a", reasoning: "A subject that references the concert plus a suitable greeting.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A clear acceptance ('Yes, I will come') with one detail.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A polite ending such as 'See you there!' or 'Best wishes'.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Subject + greeting. (b) Acceptance + detail. (c) Ending.",
            commonErrors: ["Not clearly saying yes or no."],
          },
        },
      ],
    },
  ],
};
