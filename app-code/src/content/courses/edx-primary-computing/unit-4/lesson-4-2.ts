import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edxpc-u4-lesson-4-2",
  code: "4-2",
  title: "Safe Searching and Downloads",
  goal: "I CAN search the internet safely and avoid dangerous downloads.",
  standards: ["Y4-Y6 Online safety", "Searching and downloads"],
  vocabulary: [
    {
      term: "Search engine",
      definition: "A website that finds information, like Google or Bing.",
    },
    {
      term: "Download",
      definition: "To copy a file from the internet onto your device.",
    },
    {
      term: "Malware",
      definition:
        "Harmful software that can damage devices or steal information.",
    },
    {
      term: "Pop-up",
      definition:
        "A window that suddenly appears on screen, often with ads or warnings.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u4-search",
      title: "Safe Searching",
      skill: "Use search engines safely and evaluate results.",
      lesson: {
        sections: [
          {
            heading: "How search works",
            body: "Type keywords into a search engine and it lists websites that match. Not all results are safe or accurate — some sites may be scams, contain inappropriate content, or have wrong information. Always check the website address looks real before clicking.",
          },
          {
            heading: "Safe searching tips",
            body: "Use school-approved search tools when at school. Read the snippets before clicking — they tell you what the page is about. Avoid clicking pop-ups or 'you won a prize' messages — they are usually scams. If a result looks strange, ask an adult before clicking.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A search for 'free games' shows a site promising prizes. Safe to click?",
          solution: "No — likely a scam. Ask an adult or avoid it.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-search-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a search engine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of game" },
              { id: "b", text: "A website that finds information" },
              { id: "c", text: "A computer part" },
              { id: "d", text: "A file type" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Search engine",
                statement: "Website that finds information.",
              },
            ],
            steps: [
              {
                reasoning: "Search engine finds websites.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Finds information",
            commonErrors: ["Thinking search engines are games."],
          },
        },
        {
          id: "edxpc-u4-search-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you check before clicking a search result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How many colours the page has" },
              { id: "b", text: "The website address looks real" },
              { id: "c", text: "Whether it has music" },
              { id: "d", text: "The font size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Safe clicking",
                statement: "Check the URL looks legitimate.",
              },
            ],
            steps: [
              {
                reasoning: "Check address looks real.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Address looks real",
            commonErrors: ["Clicking without checking."],
          },
        },
        {
          id: "edxpc-u4-search-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pop-up says 'Congratulations! You won a free tablet! Click here.' What should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pop-up scams",
                statement: "Prize pop-ups are usually scams.",
              },
            ],
            steps: [
              {
                reasoning: "Recognise it as likely scam.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Do not click or enter details.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Close it and tell an adult if worried.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Don't click, close it, tell adult",
            commonErrors: ["Clicking because it sounds exciting."],
          },
        },
        {
          id: "edxpc-u4-search-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why not all search results are safe or accurate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Search risks",
                statement: "Anyone can publish websites — quality varies.",
              },
            ],
            steps: [
              {
                reasoning: "Anyone can create a website — no quality control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Some sites are scams, ads, or have wrong info.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Need to evaluate sources — check authority, date, bias.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "No quality control + scams + need evaluation",
            commonErrors: ["Thinking all results are trustworthy."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-downloads",
      title: "Downloads and Malware",
      skill: "Recognise safe downloads and avoid malware.",
      lesson: {
        sections: [
          {
            heading: "Safe downloads",
            body: "Only download files from trusted sources — official app stores, school-approved sites, or known websites. Check the file type and size before downloading. Be suspicious of 'free' versions of paid apps or games — they often contain malware.",
          },
          {
            heading: "What is malware?",
            body: "Malware is harmful software — viruses, spyware, ransomware. It can steal passwords, damage files, or take control of your device. Signs of malware: device is slow, strange pop-ups, apps you did not install, battery draining fast. If you suspect malware, tell an adult immediately.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A site offers 'free' game that costs £5 in the app store. Safe?",
          solution: "No — likely pirated/malware. Use official store.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-dl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is malware?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of game" },
              { id: "b", text: "Harmful software" },
              { id: "c", text: "A download" },
              { id: "d", text: "A file" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Malware",
                statement: "Harmful software.",
              },
            ],
            steps: [
              {
                reasoning: "Malware = harmful software.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Harmful software",
            commonErrors: ["Thinking malware is a file type."],
          },
        },
        {
          id: "edxpc-u4-dl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where is the safest place to download apps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random websites" },
              { id: "b", text: "Official app stores" },
              { id: "c", text: "Pop-up ads" },
              { id: "d", text: "Emails from strangers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Safe downloads",
                statement: "Official stores are safest.",
              },
            ],
            steps: [
              { reasoning: "App stores are safest.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Official app stores",
            commonErrors: ["Downloading from unknown sites."],
          },
        },
        {
          id: "edxpc-u4-dl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two signs your device might have malware.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Malware signs",
                statement: "Strange behaviour indicates problems.",
              },
            ],
            steps: [
              {
                reasoning: "Device is slow or crashes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strange pop-ups or apps you did not install.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Battery drains fast or data usage is high.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. slow, pop-ups, unknown apps",
            commonErrors: ["Not real malware signs."],
          },
        },
        {
          id: "edxpc-u4-dl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'free' versions of paid games are dangerous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piracy risks",
                statement: "Free pirated content often contains malware.",
              },
            ],
            steps: [
              {
                reasoning: "Not from official store — no safety checks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May contain malware disguised as the game.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Also illegal — piracy.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "No checks + malware risk + illegal",
            commonErrors: ["Thinking free = safe."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-permissions",
      title: "App Permissions",
      skill: "Understand and manage app permissions.",
      lesson: {
        sections: [
          {
            heading: "What are permissions?",
            body: "When you install an app, it asks for permissions — access to your camera, location, contacts, photos, microphone. These let the app work, but they also give it access to your data. A game does not need your contacts; a map app needs your location.",
          },
          {
            heading: "Managing permissions",
            body: "Check what permissions apps have requested — you can usually see this in settings. Only grant permissions an app actually needs. If a flashlight app asks for your contacts, that is suspicious — refuse or uninstall. Review permissions regularly and remove ones you no longer need.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A game asks for access to your photos. Should you allow it?",
          solution:
            "Probably not — games rarely need photo access. Refuse unless needed.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-perm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are app permissions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Games you can play" },
              { id: "b", text: "Access apps request to your data" },
              { id: "c", text: "A type of password" },
              { id: "d", text: "A subscription" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Permissions",
                statement: "Access apps request to your data.",
              },
            ],
            steps: [
              {
                reasoning: "Permissions = data access.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Data access",
            commonErrors: ["Thinking permissions are games."],
          },
        },
        {
          id: "edxpc-u4-perm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Should a simple calculator app need access to your contacts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, always" },
              { id: "b", text: "No, it does not need them" },
              { id: "c", text: "Only on Tuesdays" },
              { id: "d", text: "It depends on the weather" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permission necessity",
                statement: "Apps should only request permissions they need.",
              },
            ],
            steps: [
              {
                reasoning: "Calculator does not need contacts.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** No",
            commonErrors: ["Allowing unnecessary permissions."],
          },
        },
        {
          id: "edxpc-u4-perm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of app permissions and why an app might need them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permission examples",
                statement: "Permissions match app function.",
              },
            ],
            steps: [
              {
                reasoning: "Camera — photo app needs it to take pictures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Location — map app needs it for directions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly matched to function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. camera→photos; location→maps",
            commonErrors: ["Mismatched permission/function."],
          },
        },
        {
          id: "edxpc-u4-perm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why granting too many permissions is risky.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permission risk",
                statement: "More access = more data at risk.",
              },
            ],
            steps: [
              {
                reasoning: "App can access and potentially misuse your data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Data could be shared with third parties or stolen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Principle of least privilege — only grant what is needed.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Data misuse risk + least privilege principle",
            commonErrors: ["Thinking permissions are harmless."],
          },
        },
      ],
    },
  ],
};
