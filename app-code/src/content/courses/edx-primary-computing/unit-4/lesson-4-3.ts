import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edxpc-u4-lesson-4-3",
  code: "4-3",
  title: "Digital Footprint and Responsible Use",
  goal: "I CAN understand my digital footprint and use technology responsibly.",
  standards: ["Y5-Y6 Online safety", "Digital citizenship"],
  vocabulary: [
    {
      term: "Digital footprint",
      definition:
        "The trail of data you leave online — posts, photos, searches.",
    },
    {
      term: "Digital citizenship",
      definition: "Using technology responsibly and ethically.",
    },
    {
      term: "Copyright",
      definition:
        "Legal protection for creative work — you cannot copy others' work freely.",
    },
    {
      term: "Plagiarism",
      definition: "Copying someone else's work and claiming it as your own.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u4-footprint",
      title: "Your Digital Footprint",
      skill: "Understand the lasting impact of online activity.",
      lesson: {
        sections: [
          {
            heading: "What is a digital footprint?",
            body: "Everything you do online leaves a trace — posts, photos, comments, likes, searches, games played. This is your digital footprint. It can be seen by others and may last forever, even if you delete it. Screenshots and copies mean 'deleted' does not always mean gone.",
          },
          {
            heading: "Managing your footprint",
            body: "Think before you post — would you be happy if your teacher, parent or future employer saw it? Do not post personal information, embarrassing photos, or mean comments. Remember: once online, it can spread quickly and be impossible to fully remove. Your footprint affects how others see you.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "You post an embarrassing photo at age 10. At 18, could it still be online?",
          solution: "Yes — screenshots and copies can persist forever.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-foot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a digital footprint?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of shoe" },
              { id: "b", text: "The trail of data you leave online" },
              { id: "c", text: "A computer virus" },
              { id: "d", text: "A password" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital footprint",
                statement: "Trail of data left online.",
              },
            ],
            steps: [
              {
                reasoning: "Footprint = online trail.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Online data trail",
            commonErrors: ["Thinking footprint means physical footprint."],
          },
        },
        {
          id: "edxpc-u4-foot-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If you delete a post, is it always gone forever?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, always" },
              { id: "b", text: "No — copies may exist elsewhere" },
              { id: "c", text: "Only on Fridays" },
              { id: "d", text: "Only if you restart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deleting online",
                statement: "Copies and screenshots can persist.",
              },
            ],
            steps: [
              {
                reasoning: "Copies may exist elsewhere.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** No, copies may exist",
            commonErrors: ["Thinking delete = gone forever."],
          },
        },
        {
          id: "edxpc-u4-foot-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three things that make up your digital footprint.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Footprint contents",
                statement: "Posts, photos, searches all count.",
              },
            ],
            steps: [
              {
                reasoning: "Posts/comments you make.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Photos/videos you share.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Searches, likes, games played.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. posts, photos, searches",
            commonErrors: ["Only listing one type."],
          },
        },
        {
          id: "edxpc-u4-foot-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why should you think carefully before posting something online?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Think before posting",
                statement: "Online content is permanent and public.",
              },
            ],
            steps: [
              {
                reasoning: "Posts can be seen by many people, now and later.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cannot be fully deleted — screenshots/copies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects reputation — schools, jobs, relationships.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Public + permanent + reputation impact",
            commonErrors: ["Posting without thinking."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-copyright",
      title: "Copyright and Plagiarism",
      skill: "Understand copyright and avoid plagiarism.",
      lesson: {
        sections: [
          {
            heading: "What is copyright?",
            body: "Copyright protects creative work — songs, books, videos, games, artwork. The creator owns it; you cannot copy or use it without permission. Downloading pirated music or games is against the law. Using someone's photo without permission is also copyright infringement.",
          },
          {
            heading: "What is plagiarism?",
            body: "Plagiarism is copying someone's work and claiming it as your own — copying text from a website into your homework without crediting the source. Even copying without meaning to is plagiarism. Always cite sources — say where the information came from. In school, plagiarism can mean failing the work or worse.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "You copy a paragraph from Wikipedia into your essay. Is this plagiarism?",
          solution: "Yes — unless you quote it and cite the source properly.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-copy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does copyright protect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physical objects" },
              { id: "b", text: "Creative work like songs and books" },
              { id: "c", text: "Computers" },
              { id: "d", text: "Passwords" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Copyright",
                statement: "Protects creative work.",
              },
            ],
            steps: [
              {
                reasoning: "Copyright = creative work.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Creative work",
            commonErrors: ["Thinking copyright protects objects."],
          },
        },
        {
          id: "edxpc-u4-copy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is plagiarism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying work and claiming it as your own" },
              { id: "b", text: "Making your own work" },
              { id: "c", text: "Citing sources" },
              { id: "d", text: "Buying books" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plagiarism",
                statement: "Copying work and claiming it as yours.",
              },
            ],
            steps: [
              {
                reasoning: "Plagiarism = copying without credit.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Copying without credit",
            commonErrors: ["Thinking plagiarism is just copying for research."],
          },
        },
        {
          id: "edxpc-u4-copy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to use information from the internet without plagiarising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avoiding plagiarism",
                statement: "Paraphrase and cite sources.",
              },
            ],
            steps: [
              {
                reasoning: "Paraphrase — put ideas in your own words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cite the source — name where the information came from.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Quote directly with quotation marks and credit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Paraphrase + cite + quote with credit",
            commonErrors: ["Copying without credit."],
          },
        },
        {
          id: "edxpc-u4-copy-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is copyright important for creators?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Copyright purpose",
                statement: "Protects creators' rights and income.",
              },
            ],
            steps: [
              {
                reasoning: "Creators deserve credit and reward for their work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Copyright protects their income — they can sell/licence work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Encourages creativity — people are rewarded for making things.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Credit + income + encourages creativity",
            commonErrors: ["No real reason."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-digitalcitizen",
      title: "Digital Citizenship",
      skill: "Summarise responsible technology use.",
      lesson: {
        sections: [
          {
            heading: "Being a good digital citizen",
            body: "Digital citizenship means using technology responsibly and ethically: be kind online, respect others' privacy, do not share others' information without permission, credit sources, follow rules and laws, and help others stay safe. It is about treating people online as you would in real life.",
          },
          {
            heading: "The big picture",
            body: "Technology is a powerful tool — it can connect, educate and entertain. But it can also harm if used badly. Being a good digital citizen means thinking about the impact of your actions: would you say this to someone's face? Would you want this said about you? Use technology to make the world better, not worse.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is it OK to share a friend's photo without asking?",
          solution: "No — respect their privacy; always ask first.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-citizen-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is digital citizenship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Living in a digital country" },
              { id: "b", text: "Using technology responsibly" },
              { id: "c", text: "Owning a computer" },
              { id: "d", text: "Being online all day" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital citizenship",
                statement: "Using technology responsibly and ethically.",
              },
            ],
            steps: [
              {
                reasoning: "Citizenship = responsible use.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Responsible use",
            commonErrors: ["Thinking it means living digitally."],
          },
        },
        {
          id: "edxpc-u4-citizen-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of good digital citizenship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sharing someone's private photo" },
              { id: "b", text: "Being kind in comments" },
              { id: "c", text: "Copying homework" },
              { id: "d", text: "Posting mean messages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Good citizenship",
                statement: "Kind, respectful, honest online behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Kind comments = good citizenship.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Kind comments",
            commonErrors: ["Choosing harmful behaviour."],
          },
        },
        {
          id: "edxpc-u4-citizen-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three rules of good digital citizenship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital citizenship rules",
                statement: "Respect, honesty, safety.",
              },
            ],
            steps: [
              {
                reasoning: "Be kind and respectful online.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Respect privacy — don't share others' info.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Be honest — no plagiarism, no pretending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Kind, respect privacy, be honest",
            commonErrors: ["Rules that are not about citizenship."],
          },
        },
        {
          id: "edxpc-u4-citizen-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'think before you post' is the most important rule of digital citizenship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Think before posting",
                statement: "Prevents most online harm.",
              },
            ],
            steps: [
              {
                reasoning: "Most online harm comes from impulsive posts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Thinking first prevents bullying, embarrassment, privacy breaches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Applies to all situations — the golden rule.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Prevents most harm, applies everywhere",
            commonErrors: ["No real justification."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-summary",
      title: "Online Safety Summary",
      skill: "Summarise key online safety principles.",
      lesson: {
        sections: [
          {
            heading: "Key principles",
            body: "Never share personal information. Never meet online strangers alone. Use strong passwords and keep them secret. Check privacy settings. Be kind — no cyberbullying. Think before you post — your digital footprint is permanent. Only download from trusted sources. Respect copyright and others' work.",
          },
          {
            heading: "Golden rule",
            body: "If something online makes you feel uncomfortable, worried or confused — tell a trusted adult. You are never alone online; adults are there to help you stay safe.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise online safety in one sentence.",
          solution:
            "Be kind, keep personal information private, and tell an adult if anything feels wrong.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the golden rule of online safety?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Share everything" },
              {
                id: "b",
                text: "Tell a trusted adult if something feels wrong",
              },
              { id: "c", text: "Never go online" },
              { id: "d", text: "Only use phones" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Golden rule",
                statement: "Tell a trusted adult if uncomfortable.",
              },
            ],
            steps: [
              {
                reasoning: "Tell adult = golden rule.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tell an adult",
            commonErrors: ["Hiding problems online."],
          },
        },
        {
          id: "edxpc-u4-sum-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things you should never share online.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Private info",
                statement: "Personal details stay private.",
              },
            ],
            steps: [
              {
                reasoning: "Personal details like address.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Passwords or photos of home/school.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "e.g. address, password",
            commonErrors: ["Sharing personal details."],
          },
        },
        {
          id: "edxpc-u4-sum-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is your digital footprint important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital footprint",
                statement: "Permanent record of online activity.",
              },
            ],
            steps: [
              {
                reasoning: "It is permanent — can affect future opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Others can see it — reputation matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Affects how people see you — schools, jobs, relationships.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Permanent + visible + reputation",
            commonErrors: ["Thinking footprint doesn't matter."],
          },
        },
        {
          id: "edxpc-u4-sum-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create a 3-point online safety checklist for a younger sibling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Safety checklist",
                statement: "Simple, actionable rules.",
              },
            ],
            steps: [
              {
                reasoning: "Point 1 — never share personal info.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Point 2 — be kind / don't bully.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Point 3 — tell an adult if worried.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. 1. private info 2. be kind 3. tell adult",
            commonErrors: ["Too complex for younger child."],
          },
        },
      ],
    },
  ],
};
