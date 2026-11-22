import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const CITY_COUNTRY: TextExtract = {
  title: "Text A and Text B: Two Views of Home",
  author: "Written for Akademik Space",
  text: "Text A: A city dweller writes\n\nI love the roar of the city. From my flat on the ninth floor I can watch the lights of a thousand windows blink on at dusk, and the sound of the traffic is a kind of music to me. Everything I need is a few minutes away: a bakery that opens at six, a cinema, a library, friends. In the country, I am told, you can hear a pin drop. Personally, I would go mad. Cities are alive; they never sleep, and neither do I.\n\nText B: A farmer writes\n\nI rise before the sun, as my father did, and walk the fields while the dew is still on the grass. The only sounds are birdsong and the low murmur of the cattle. People tell me the countryside is lonely, but I have never felt it. Every hedge, every gate, every stone wall has a story, and I know them all. The city, on my rare visits, feels like a crowd of strangers all in a hurry to be somewhere else.",
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant comparison supported by well-chosen references from both texts." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some comparison with some relevant references; may be uneven between texts." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comparison; may describe each text separately." },
];

export const lesson23: Lesson = {
  id: "el8-u2-lesson-2-3",
  code: "2-3",
  title: "Comparing Texts",
  goal: "I CAN compare the ideas and the methods of two non-fiction texts using connectives and evidence from both.",
  standards: ["KS3 Reading", "KS3 AO3"],
  vocabulary: [
    { term: "Compare", definition: "To explain similarities and differences between two things." },
    { term: "Comparative connective", definition: "A word or phrase that links two ideas in comparison, such as 'whereas' or 'similarly'." },
    { term: "Perspective", definition: "A particular way of seeing or thinking about something." },
    { term: "Contrast", definition: "A clear difference between two things." },
    { term: "Method", definition: "A technique a writer uses, such as word choice, sentence type or structure." },
    { term: "Synthesise", definition: "To combine information from two texts into a single answer." },
  ],
  concepts: [
    {
      id: "el8-u2-comparing-ideas",
      title: "Comparing ideas",
      skill: "Identify similarities and differences between the viewpoints of two texts and support them with evidence from both.",
      lesson: {
        sections: [
          {
            heading: "Compare, don't list",
            body: "A good comparison does not describe Text A and then Text B separately. Instead, make each paragraph a point of comparison: 'Both writers love their home, but they value different things.' Use **comparative connectives**: similarly, likewise, whereas, in contrast, however, on the other hand.",
          },
          {
            heading: "Find the point of comparison",
            body: "Decide what the texts are about in common (here, where to live) and then compare their ideas: what each values (energy versus calm), how each sees the other place (mad versus lonely), and how each sounds (confident or reflective). Always quote from **both** texts in the same paragraph.",
          },
        ],
        keyFormulas: [
          { name: "Similarity connectives", statement: "Similarly, likewise, both, in the same way." },
          { name: "Difference connectives", statement: "Whereas, however, in contrast, on the other hand, unlike." },
          { name: "Comparison paragraph", statement: "Point of comparison, quotation from A, quotation from B, explain the difference or similarity." },
        ],
        workedExample: {
          problem: "Compare the writers' attitudes to the place where they live. (4 marks)",
          solution: "Both writers feel strongly attached to their homes, but they value different things. The city dweller celebrates energy: 'Cities are alive; they never sleep'. In contrast, the farmer values calm and tradition: 'The only sounds are birdsong and the low murmur of the cattle'. Whereas Text A finds the countryside frightening in its quiet, Text B finds the city 'a crowd of strangers', so each is sure the other place would be unbearable.",
        },
      },
      questions: [
        {
          id: "el8-u2-comparing-ideas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CITY_COUNTRY,
          stem: "Which idea do both writers share?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They both think the weather is the most important thing." },
              { id: "b", text: "They both want to move to the other place." },
              { id: "c", text: "They both dislike their neighbours." },
              { id: "d", text: "They are both content with the place where they live." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Shared ideas", statement: "Look for what both texts say, not only differences." }],
            steps: [{ reasoning: "Text A says 'I love the roar of the city' and Text B says he has 'never felt' lonely, so both are content.", evidence: "I love the roar of the city", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(a)** Both are content with where they live.",
            commonErrors: ["Choosing (b): each writer rejects the other place."],
          },
        },
        {
          id: "el8-u2-comparing-ideas-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: CITY_COUNTRY,
          stem: "How do the writers' views of the other place differ? Use one quotation from each text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Contrast", statement: "Use evidence from both texts to show a difference." }],
            steps: [
              { reasoning: "Text A finds the quiet of the countryside unbearable.", evidence: "Personally, I would go mad", marks: 1, markCode: "AO3" },
              { reasoning: "Text B finds the city impersonal and rushed.", evidence: "a crowd of strangers all in a hurry", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The city dweller believes the countryside's silence would drive him mad, 'I would go mad', whereas the farmer sees the city as cold and impersonal, 'a crowd of strangers all in a hurry'.",
            commonErrors: ["Giving a quotation from only one text."],
          },
        },
        {
          id: "el8-u2-comparing-ideas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: CITY_COUNTRY,
          stem: "Compare what the two writers value about their way of life. Support your answer with evidence from both texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative paragraph", statement: "A point of comparison, evidence from both texts, then explanation." },
              { kind: "skill", name: "Connectives", statement: "Use whereas, similarly and in contrast to link texts." },
            ],
            steps: [
              { reasoning: "Text A values energy and convenience.", evidence: "Everything I need is a few minutes away", marks: 1, markCode: "AO3" },
              { reasoning: "Text A also values constant activity and life.", evidence: "Cities are alive; they never sleep", marks: 1, markCode: "AO3" },
              { reasoning: "Text B values quiet and natural peace.", evidence: "The only sounds are birdsong and the low murmur of the cattle", marks: 1, markCode: "AO3" },
              { reasoning: "Text B also values familiarity, history and belonging, unlike A's modern convenience.", evidence: "Every hedge, every gate, every stone wall has a story", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The city dweller values energy and convenience: 'Everything I need is a few minutes away' and 'Cities are alive'. In contrast, the farmer values peace and a deep sense of belonging: 'The only sounds are birdsong' and 'Every hedge... has a story'. Whereas A enjoys the new and busy, B treasures the familiar and quiet.",
            commonErrors: ["Writing about A, then about B, with no connective linking them.", "Missing the farmer's value of tradition and belonging."],
          },
        },
        {
          id: "el8-u2-comparing-ideas-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: CITY_COUNTRY,
          stem: "Answer all parts of this question about Text A and Text B.",
          parts: [
            { label: "a", prompt: "Give one thing the city dweller can do close to home and one thing the farmer does each morning.", marks: 2 },
            { label: "b", prompt: "What do both writers suggest about people who disagree with them?", marks: 2 },
            { label: "c", prompt: "Compare how each writer describes the sounds of their home.", marks: 4 },
            { label: "d", prompt: "Compare the writers' perspectives on city and country life. Support your answer with evidence from both texts.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Combine details from two texts." },
              { kind: "skill", name: "Comparison", statement: "Use connectives and evidence from both texts." },
            ],
            steps: [
              { part: "a", reasoning: "The city dweller can visit a bakery, cinema or library.", evidence: "a bakery that opens at six, a cinema, a library", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The farmer rises early and walks the fields.", evidence: "walk the fields while the dew is still on the grass", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Both suggest that others' views of their home are mistaken, A through confident dismissal.", evidence: "In the country, I am told", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "B calmly insists the common view is wrong.", evidence: "People tell me the countryside is lonely, but I have never felt it", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Text A hears the city's traffic as music, turning noise into something positive.", evidence: "the sound of the traffic is a kind of music to me", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Text B hears gentle natural sounds, a contrast of loud and soft.", evidence: "birdsong and the low murmur of the cattle", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Text A is energetic and confident; the city is alive and convenient.", evidence: "Cities are alive; they never sleep, and neither do I", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Text B is calm and reflective; the countryside offers belonging and history.", evidence: "I know them all", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Both dismiss the other place, with A finding the quiet frightening and B finding the crowd cold; the shared pattern shows how personal preference shapes viewpoint.", evidence: "a crowd of strangers all in a hurry to be somewhere else", marks: 2, markCode: "AO3" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) A: the bakery, cinema or library; B: walks the fields. (b) Both reject others' views of their homes. (c) A hears traffic as music, whereas B hears birdsong and cattle. (d) A's perspective is energetic and confident, B's calm and reflective, yet both dismiss the other place in similar ways, showing that their preferences are personal.",
            commonErrors: ["Describing each text separately.", "Ignoring (b)'s link to both texts."],
          },
        },
      ],
    },
    {
      id: "el8-u2-comparing-methods",
      title: "Comparing methods",
      skill: "Compare how two writers use language and structure to present their views.",
      lesson: {
        sections: [
          {
            heading: "From what to how",
            body: "Comparing **methods** means looking at how each writer builds their effect: word choice, sentence type, tone, structure. Text A uses a confident, conversational voice with short, punchy sentences ('Personally, I would go mad.'). Text B uses a slower, rhythmic voice with long sentences and lists, reflecting the pace of country life.",
          },
          {
            heading: "Method, effect, comparison",
            body: "For each method: name it, quote it, explain the effect and compare to the other text. 'Text A uses the metaphor \"music\" to make noise pleasant, whereas Text B uses a list, \"every hedge, every gate, every stone wall\", to build a sense of deep familiarity.'",
          },
        ],
        keyFormulas: [
          { name: "Method", statement: "A language or structural technique used by a writer." },
          { name: "Voice", statement: "The personality that a writer's style gives the text, such as chatty or reflective." },
          { name: "Parallel structure", statement: "Repeating a pattern ('every hedge, every gate') for rhythm and emphasis." },
        ],
        workedExample: {
          problem: "Compare how the writers use language to present their feelings about home. (4 marks)",
          solution: "Text A uses a metaphor, calling traffic 'a kind of music', to turn noise into pleasure, in a lively, conversational voice. In contrast, Text B uses repetition, 'every hedge, every gate, every stone wall', to build a rhythm that suggests an unhurried, loving familiarity. While A's short sentences are energetic, B's longer, calmer sentences reflect the slower pace of country life.",
        },
      },
      questions: [
        {
          id: "el8-u2-comparing-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CITY_COUNTRY,
          stem: "'the sound of the traffic is a kind of music to me' is an example of which technique in Text A?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistics" },
              { id: "b", text: "Rhetorical question" },
              { id: "c", text: "Metaphor" },
              { id: "d", text: "Anaphora" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Describing one thing as another." }],
            steps: [{ reasoning: "Traffic is described as being music, making noise seem pleasant.", evidence: "a kind of music to me", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Metaphor.",
            commonErrors: ["Choosing (d): no phrase is repeated at the start of sentences."],
          },
        },
        {
          id: "el8-u2-comparing-methods-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: CITY_COUNTRY,
          stem: "Compare the sentence styles of Text A and Text B. Give one example from each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Short sentences sound abrupt and lively; long sentences sound flowing and calm." }],
            steps: [
              { reasoning: "Text A uses short, blunt sentences that sound confident and conversational.", evidence: "Personally, I would go mad.", marks: 1, markCode: "AO3" },
              { reasoning: "Text B uses a long sentence with a list, giving a gentle, flowing pace.", evidence: "Every hedge, every gate, every stone wall has a story, and I know them all.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Text A uses short, blunt sentences such as 'Personally, I would go mad', which sound lively and confident, whereas Text B's longer sentence with a list, 'Every hedge, every gate...', sounds slower and calmer.",
            commonErrors: ["Naming the sentence types without quoting."],
          },
        },
        {
          id: "el8-u2-comparing-methods-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: CITY_COUNTRY,
          stem: "Compare how the two writers use language to describe the other place.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Exaggeration", statement: "Strong claims show strong feeling." },
              { kind: "technique", name: "Collective noun and contrast", statement: "'A crowd of strangers' makes people anonymous." },
            ],
            steps: [
              { reasoning: "Text A uses a strong, exaggerated claim to dismiss the countryside.", evidence: "I would go mad", marks: 1, markCode: "AO3" },
              { reasoning: "The cliche 'hear a pin drop' mocks the quiet playfully.", evidence: "you can hear a pin drop", marks: 1, markCode: "AO3" },
              { reasoning: "Text B uses a negative image of a faceless crowd to suggest coldness.", evidence: "a crowd of strangers", marks: 1, markCode: "AO3" },
              { reasoning: "'All in a hurry' shows the city as restless, mirroring A's energy but seeing it negatively.", evidence: "all in a hurry to be somewhere else", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Text A mocks the countryside with exaggeration and a cliche: 'hear a pin drop', 'I would go mad'. Text B is gentler but just as critical, using the image 'a crowd of strangers all in a hurry' to make the city seem cold and impersonal. Both use language to make the other place unattractive.",
            commonErrors: ["Comparing the writers' home descriptions instead of the other place."],
          },
        },
        {
          id: "el8-u2-comparing-methods-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: CITY_COUNTRY,
          stem: "Answer all parts of this question about Text A and Text B.",
          parts: [
            { label: "a", prompt: "Write down one short sentence from Text A and one phrase from Text B that show each writer's confidence.", marks: 2 },
            { label: "b", prompt: "What is the effect of the word 'only' in Text B's sentence 'The only sounds are birdsong'?", marks: 2 },
            { label: "c", prompt: "Compare how each text begins and what that tells us about the writer's attitude.", marks: 4 },
            { label: "d", prompt: "Compare the methods the writers use to persuade the reader that their home is best.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Openings", statement: "How a text begins sets its voice and viewpoint." },
              { kind: "skill", name: "Method-effect-compare", statement: "Name, quote, explain, compare." },
            ],
            steps: [
              { part: "a", reasoning: "A confident short sentence.", evidence: "Personally, I would go mad.", marks: 1, markCode: "AO3" },
              { part: "a", reasoning: "A confident phrase.", evidence: "I know them all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Only' suggests nothing else disturbs the peace, stressing the quiet.", evidence: "The only sounds", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It also suggests that these gentle sounds are enough for him, so quiet is a strength.", evidence: "birdsong and the low murmur of the cattle", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Text A begins with a bold declaration of love, showing a passionate, open attitude.", evidence: "I love the roar of the city.", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Text B begins with a calm routine and family tradition, showing a quieter, rooted attitude.", evidence: "I rise before the sun, as my father did", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Text A uses sensory metaphor and personification of the city to make it exciting.", evidence: "Cities are alive", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Text B uses lists and repetition, building quiet familiarity.", evidence: "every hedge, every gate, every stone wall", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Both address the opposing view, A with a dismissive tone and B with a calm rebuttal.", evidence: "People tell me the countryside is lonely, but I have never felt it", marks: 2, markCode: "AO3" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) 'Personally, I would go mad.' / 'I know them all'. (b) 'Only' stresses the peace and suggests it is enough. (c) A starts with passion, B with tradition and calm. (d) A uses a metaphor and personification to make the city exciting, B uses lists and repetition to build familiarity, and both answer opposing views, A dismissively and B with calm rebuttal.",
            commonErrors: ["Comparing content when the question asks about methods."],
          },
        },
      ],
    },
  ],
};
