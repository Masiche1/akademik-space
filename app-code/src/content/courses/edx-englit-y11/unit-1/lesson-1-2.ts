import type { Lesson } from "../../../types.ts";
import { bands } from "./levels.ts";

export const lesson12: Lesson = {
  id: "et11-u1-lesson-1-2",
  code: "1-2",
  title: "Themes and Context in Of Mice and Men",
  goal: "I CAN explain how Steinbeck explores dreams, loneliness and power, and link them to the context of the Great Depression.",
  standards: ["4ET1 Paper 1 Section B", "4ET1 AO1", "4ET1 AO4"],
  vocabulary: [
    { term: "Theme", definition: "A central idea that a writer explores through characters, events and language." },
    { term: "American Dream", definition: "The belief that anyone, through hard work, can achieve prosperity and independence." },
    { term: "Great Depression", definition: "The severe economic collapse in the United States that began with the 1929 stock market crash and left millions unemployed." },
    { term: "Migrant worker", definition: "A labourer who travels from place to place to find seasonal work." },
    { term: "Hierarchy", definition: "A system in which people are ranked by status or power." },
    { term: "Social criticism", definition: "Writing that exposes the injustices of a society in order to challenge them." },
  ],
  concepts: [
    {
      id: "et11-u1-dreams-loneliness-power",
      title: "Dreams, loneliness and power",
      skill: "Trace how Steinbeck develops the themes of dreams, loneliness and power through characters and events.",
      lesson: {
        sections: [
          {
            heading: "Dreams",
            body: "The dream of owning a small farm, 'livin' off the fatta the lan'', gives George, Lennie and Candy a shared hope. The dream is detailed and domestic (rabbits, a vegetable patch, independence), which makes it feel achievable and so its collapse more tragic. Steinbeck suggests that dreams are necessary for survival but that society makes them fragile. Curley's wife and Crooks have their own dreams, which also fail.",
          },
          {
            heading: "Loneliness",
            body: "Almost every character is isolated: Crooks by race, Curley's wife by gender and marriage, Candy by age, and Curley by his insecurity. Even Slim, respected by all, is a solitary figure. Companionship is shown as a basic human need, and the novel asks what happens when society denies it.",
          },
          {
            heading: "Power",
            body: "Power operates through a hierarchy: the boss, Curley as the boss's son, then the skilled workers, then the weak. Characters who feel powerless attack those below them, as Curley picks on Lennie and Curley's wife threatens Crooks. Strong answers show that power is not noble but is used to protect the self.",
          },
        ],
        keyFormulas: [
          { name: "Theme paragraph", statement: "State the idea, show where it appears, analyse the method, and link to Steinbeck's message." },
          { name: "Cyclical hope", statement: "Dreams are raised and destroyed, creating a pattern of lost hope." },
          { name: "Hierarchy of power", statement: "Those with little power often exercise cruelty over the weaker." },
        ],
        workedExample: {
          problem: "How does Steinbeck explore the theme of dreams in the novel?",
          solution: "Steinbeck presents dreams as the only thing that gives the ranch workers hope. George's description of the farm is told like a ritual, repeated for Lennie, and its detail (the rabbits, the garden) makes it feel almost real. When Candy offers his savings, it becomes a collective hope, suggesting that dreams can bind lonely men together. Yet Steinbeck undermines the dream from the start: the title alludes to Burns's poem about plans that 'gang aft agley', and the dream fails when Curley's wife dies. The ending suggests that in the economic reality of the Depression, the dream of independence is out of reach for ordinary people, which is Steinbeck's social criticism.",
        },
      },
      questions: [
        {
          id: "et11-u1-dreams-loneliness-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following best describes the dream shared by George, Lennie and Candy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Owning a small farm where they can be independent and live off their own land" },
              { id: "b", text: "Becoming wealthy by gambling on the ranch" },
              { id: "c", text: "Travelling across the country to find better paid work" },
              { id: "d", text: "Taking over the ranch from the boss" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "American Dream", statement: "The hope of independence and prosperity through one's own land and work." }],
            steps: [{ reasoning: "The shared dream is a small farm with rabbits and their own land, symbolising independence.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** A small farm of their own, offering independence.",
            commonErrors: ["Choosing (c) because they are itinerant, but the dream is to stop moving."],
          },
        },
        {
          id: "et11-u1-dreams-loneliness-power-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Steinbeck shows that loneliness affects characters other than George and Lennie.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Range of reference", statement: "Use more than one character or moment to support a theme." },
              { kind: "context", name: "Isolation of the 1930s", statement: "Migrant work and prejudice left many people alone." },
            ],
            steps: [
              { reasoning: "Crooks is isolated by racism and lives apart from the other men.", marks: 1, markCode: "AO1" },
              { reasoning: "Curley's wife is lonely in her marriage and has nobody to talk to.", evidence: "awful lonely", marks: 1, markCode: "AO1" },
              { reasoning: "Candy loses his dog, his only companion, and fears age will isolate him.", marks: 1, markCode: "AO1" },
              { reasoning: "Steinbeck suggests that loneliness is caused by social prejudice and economic conditions, not individual failure.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Crooks is excluded by racism, Curley's wife is lonely in her marriage, and Candy loses his dog. Steinbeck shows loneliness as a social problem created by prejudice and the migrant way of life.",
            commonErrors: ["Writing only about George and Lennie.", "Listing characters without explanation."],
          },
        },
        {
          id: "et11-u1-dreams-loneliness-power-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How does Steinbeck present power in the novel? Refer to at least TWO characters in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison within a text", statement: "Compare how two characters exercise or lack power." },
              { kind: "technique", name: "Characterisation", statement: "Dialogue and action reveal the use of power." },
            ],
            steps: [
              { reasoning: "Curley uses power through aggression, picking a fight with Lennie to assert himself; his small size makes him insecure.", marks: 2, markCode: "AO1" },
              { reasoning: "Curley's wife has no power over her own life but uses her status to threaten Crooks, showing that the powerless oppress those lower still.", marks: 2, markCode: "AO1" },
              { reasoning: "Slim holds natural authority through respect, not force; his calm contrasts with Curley's violence.", marks: 2, markCode: "AO2" },
              { reasoning: "Steinbeck presents power as unevenly distributed and often cruel, a criticism of the hierarchy of 1930s America.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(8, "understanding of how Steinbeck presents power"),
            finalAnswer: "Power is shown through a hierarchy: Curley asserts himself through violence, Curley's wife threatens Crooks, and Slim leads through respect. Steinbeck criticises a society in which the insecure bully the weaker.",
            commonErrors: ["Describing characters without analysing what their behaviour suggests.", "Mentioning only one character."],
          },
        },
        {
          id: "et11-u1-dreams-loneliness-power-q4",
          difficulty: "challenge",
          totalMarks: 15,
          stem: "This question is about the themes of Of Mice and Men.",
          parts: [
            { label: "a", prompt: "Name two things that George and Lennie would have on their farm.", marks: 2 },
            { label: "b", prompt: "Explain why Candy decides to join George and Lennie in the dream.", marks: 4 },
            { label: "c", prompt: "'Steinbeck shows that dreams are necessary but ultimately destructive.' How far do you agree? Refer to the whole novel in your answer.", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative argument", statement: "Take a position, qualify it and support it with evidence." },
              { kind: "technique", name: "Foreshadowing", statement: "Early hints that anticipate the failure of the dream." },
            ],
            steps: [
              { part: "a", reasoning: "Rabbits (Lennie will tend them).", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "A vegetable garden, a few animals, or a stove and their own house.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Candy is old and fears being sacked once he cannot work, as his dog was discarded.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He has savings that make the dream achievable, giving him a role.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He is desperate to avoid loneliness and belong somewhere.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "His joining raises the possibility that the dream might come true, increasing the tragedy.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Dreams give meaning and unite lonely men, helping them cope with hardship.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "They are destructive in that they are unattainable and cause deeper disappointment; Steinbeck foreshadows failure in the title and the dead mouse and puppy.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: the Depression and the failed American Dream explain why independence is out of reach; a reasoned verdict is reached.", marks: 3, markCode: "AO4" },
            ],
            levels: bands(9, "evaluation of dreams across the novel", "c"),
            finalAnswer: "(a) Rabbits and a garden. (b) Candy fears being discarded and his savings make the dream possible. (c) A top answer argues that dreams are both essential and tragic: they sustain the men but cannot survive an unequal society, as foreshadowing and the Depression context show.",
            commonErrors: ["Agreeing or disagreeing without exploring both sides.", "Retelling the plot with no reference to Steinbeck's methods."],
          },
        },
      ],
    },
    {
      id: "et11-u1-great-depression-context",
      title: "The Great Depression and context",
      skill: "Use knowledge of the Depression, migrant labour and prejudice to explain Steinbeck's purposes (AO4).",
      lesson: {
        sections: [
          {
            heading: "What was the Great Depression?",
            body: "After the Wall Street Crash of 1929, millions of Americans lost their jobs and savings. In the Midwest, drought and dust storms destroyed farms, driving thousands of families to California in search of work. Migrant labourers like George and Lennie accepted low wages and insecure work, living in bunkhouses.",
          },
          {
            heading: "Other aspects of context",
            body: "Racism was legalised in many states, women had limited opportunities, and disability or age often meant dismissal. Steinbeck, who worked on ranches himself, wrote with compassion for the migrant poor. The book was published in 1937.",
          },
          {
            heading: "Using context well (AO4)",
            body: "Context must be linked to the text and to a specific point, not added as a separate paragraph of history. Say how a fact about the period explains a character's choices or Steinbeck's message, for example: 'Crooks's segregation reflects the racism of the time, and Steinbeck uses it to expose injustice.'",
          },
        ],
        keyFormulas: [
          { name: "Wall Street Crash", statement: "The 1929 collapse of the stock market that began the Great Depression." },
          { name: "Dust Bowl", statement: "Drought and dust storms in the 1930s that ruined farms and caused migration to California." },
          { name: "AO4 link", statement: "Fact from context, plus effect on a character or theme, plus writer's purpose." },
        ],
        workedExample: {
          problem: "How is the context of the Great Depression important to the novel?",
          solution: "The Depression explains why George and Lennie are itinerant: with no steady work and no safety net, men follow jobs from ranch to ranch. The dream of a small farm is a response to this insecurity, and it feels poignant because the reader knows that economic reality makes it nearly impossible. Candy's fear of being thrown away reflects a time when old or injured workers were abandoned. Steinbeck's compassion for the poor therefore shapes the novel's tragedy: the characters fail not through weakness but because the system allows them no hope.",
        },
      },
      questions: [
        {
          id: "et11-u1-great-depression-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In what year did the Wall Street Crash, which began the Great Depression, take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1914" },
              { id: "b", text: "1929" },
              { id: "c", text: "1937" },
              { id: "d", text: "1945" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Wall Street Crash", statement: "The stock market collapsed in 1929, beginning the Great Depression." }],
            steps: [{ reasoning: "The Crash happened in 1929.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** 1929",
            commonErrors: ["Choosing 1937, the year the novel was published."],
          },
        },
        {
          id: "et11-u1-great-depression-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the context of migrant labour helps the reader to understand the lives of the men on the ranch.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Integrating context", statement: "Link historical fact to the text rather than listing facts." }],
            steps: [
              { reasoning: "Migrant workers moved for jobs, with no permanent home, explaining the men's isolation and the rarity of friendship.", marks: 1, markCode: "AO4" },
              { reasoning: "Wages were low and jobs insecure, so the dream of land is attractive, representing safety.", marks: 1, markCode: "AO4" },
              { reasoning: "Workers who could not labour (like Candy) had no support, explaining their fear of being discarded.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Migrant workers moved from job to job without a home or safety net, which explains the loneliness, the appeal of the dream and Candy's fear of dismissal.",
            commonErrors: ["Giving general history with no link to the novel."],
          },
        },
        {
          id: "et11-u1-great-depression-context-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "How does Steinbeck use the treatment of Crooks to comment on racial prejudice in 1930s America?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Segregation", statement: "Black Americans faced legal and social segregation in the 1930s." },
              { kind: "skill", name: "Context with analysis", statement: "Explain how a feature of the text reflects a historical fact." },
            ],
            steps: [
              { reasoning: "Crooks is excluded from the bunkhouse and card games, reflecting segregation.", marks: 2, markCode: "AO1" },
              { reasoning: "Curley's wife can threaten him with lynching without consequence, showing how little protection he had.", marks: 2, markCode: "AO4" },
              { reasoning: "Steinbeck gives Crooks intelligence and dignity, so his isolation exposes the injustice and invites sympathy.", marks: 2, markCode: "AO2" },
            ],
            levels: bands(6, "link between context and Steinbeck's presentation of Crooks"),
            finalAnswer: "Crooks's segregation reflects the racism of the time. By giving him intelligence and vulnerability, Steinbeck makes the reader condemn the prejudice that isolates him.",
            commonErrors: ["Describing racism without referring to the text.", "Including no analysis of Steinbeck's purpose."],
          },
        },
        {
          id: "et11-u1-great-depression-context-q4",
          difficulty: "challenge",
          totalMarks: 15,
          stem: "This question is about the context of Of Mice and Men.",
          parts: [
            { label: "a", prompt: "State two ways in which the Great Depression affected ordinary Americans.", marks: 2 },
            { label: "b", prompt: "Explain how Steinbeck shows that the Depression has made life insecure for Candy.", marks: 4 },
            { label: "c", prompt: "'The novel is a criticism of the society in which it was written.' How far do you agree? Refer to the context of the Great Depression.", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Depression America", statement: "Mass unemployment, poverty and migration shaped lives." },
              { kind: "skill", name: "Evaluating purpose", statement: "Judge what the writer wants the reader to think about society." },
            ],
            steps: [
              { part: "a", reasoning: "Mass unemployment and loss of savings.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Migration in search of work, often in poverty.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Candy is old and has lost a hand, so he is vulnerable to dismissal.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "His dog is shot for being old, which he sees as a sign of his own fate.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "There is no welfare or pension, so he depends on the farm dream.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "His fear shows the cruelty of a system that treats workers as disposable.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Shows the injustice of prejudice and the hierarchy, through Crooks, Curley's wife and Candy.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Uses methods such as symbolism, setting and tragic structure to guide the reader's sympathy.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Links the criticism to the Depression, the failure of the American Dream, and reaches a reasoned judgement.", marks: 3, markCode: "AO4" },
            ],
            levels: bands(9, "evaluation of the novel as social criticism", "c"),
            finalAnswer: "(a) Unemployment; migration. (b) Age and disability leave Candy open to dismissal; the dog's death mirrors his fate. (c) A strong answer agrees that the novel criticises an unequal society while recognising its universal human sympathy.",
            commonErrors: ["Giving a history lesson with no link to the novel.", "Avoiding a judgement."],
          },
        },
      ],
    },
  ],
};
