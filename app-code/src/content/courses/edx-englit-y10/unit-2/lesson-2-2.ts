import type { Lesson } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

export const lesson22: Lesson = {
  id: "et10-u2-lesson-2-2",
  code: "2-2",
  title: "Themes and Context in An Inspector Calls",
  goal: "I CAN analyse the play's key themes and link them to the contexts of 1912 and 1945.",
  standards: ["4ET1 Paper 2 Section A", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Responsibility", definition: "Being accountable for your actions and their effects on others." },
    { term: "Patriarchy", definition: "A society in which men hold most power and authority." },
    { term: "Suffragette", definition: "A woman who campaigned for the right to vote in the early twentieth century." },
    { term: "Welfare state", definition: "A system in which the government protects citizens' health and wellbeing, developed in Britain after 1945." },
    { term: "Edwardian", definition: "Relating to the period 1901-1914, a time of sharp class divisions." },
    { term: "Hypocrisy", definition: "Claiming standards or beliefs that you do not follow yourself." },
  ],
  concepts: [
    {
      id: "et10-u2-themes",
      title: "Themes: responsibility, class, gender and age",
      skill: "Explain how Priestley develops a theme across the play and what message it carries.",
      lesson: {
        sections: [
          {
            heading: "Responsibility",
            body: "The central question of the play is who is responsible for Eva Smith's death. The Inspector shows that each member of the family played a part and that society as a whole has a duty to others. Priestley contrasts Mr Birling's belief that everyone should look after themselves with the Inspector's insistence that “we are members of one body”.",
          },
          {
            heading: "Class and gender",
            body: "The Birlings hold power because of wealth and social status, and they judge Eva Smith as an inferior. Eva is also exploited because she is a woman: she is dismissed, harassed and used. Priestley exposes how class and gender combine to leave working-class women with little protection.",
          },
          {
            heading: "Age",
            body: "Older characters resist change, while Sheila and Eric are willing to learn. Priestley suggests that the younger generation can build a fairer society, though their parents' reaction shows how hard change can be.",
          },
        ],
        keyFormulas: [
          { name: "Collective responsibility", statement: "Society is interdependent: we are each answerable for how our actions affect others." },
          { name: "Intersection of class and gender", statement: "Working-class women, like Eva, are vulnerable to both economic and sexual exploitation." },
          { name: "Generational contrast", statement: "The young may change; the old resist." },
        ],
        workedExample: {
          problem: "How does Priestley explore the theme of class?",
          solution: "Priestley presents class as a barrier to empathy. Mr and Mrs Birling treat Eva Smith as a replaceable cheap worker and as unworthy of charity, and they are shocked that the Inspector speaks to them so directly. Gerald, though more polite, uses his status to take advantage of Daisy Renton. The structure of the play, in which each class-privileged character is shown to have harmed the same working-class girl, argues that the divisions of Edwardian society are unjust and that those with power must accept the consequences of their choices.",
        },
      },
      questions: [
        {
          id: "et10-u2-themes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best summarises the play's main message about responsibility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Responsibility belongs to the police" },
              { id: "b", text: "Each person must look after themselves first" },
              { id: "c", text: "Only the rich are responsible for society" },
              { id: "d", text: "Everyone is responsible for how their actions affect others" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Collective responsibility", statement: "Priestley's socialist belief that people are linked and accountable to each other." }],
            steps: [{ reasoning: "The Inspector's message is that all are responsible for one another.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** The play argues for shared, collective responsibility.",
            commonErrors: ["Choosing (a), which is Mr Birling's view that the play rejects."],
          },
        },
        {
          id: "et10-u2-themes-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Priestley presents the theme of gender in An Inspector Calls.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Women in 1912", statement: "Women had few legal and economic rights and were often dependent on men." }],
            steps: [
              { reasoning: "Eva Smith is dismissed, then exploited by men such as Eric and Gerald, which shows women's vulnerability.", marks: 1, markCode: "AO1" },
              { reasoning: "Sheila is treated by Mr Birling and Gerald as a possession or child at first, showing patriarchal attitudes.", marks: 1, markCode: "AO1" },
              { reasoning: "Sheila's growth and her challenge to her parents shows women becoming more independent, which echoes the changing status of women by 1945.", marks: 1, markCode: "AO4" },
              { reasoning: "Priestley uses the contrast between Sheila and Mrs Birling to suggest that women can both uphold and challenge social prejudice.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Priestley shows women as vulnerable to male power (Eva), patronised at first (Sheila), but able to change and speak out, reflecting shifting roles by 1945.",
            commonErrors: ["Only describing Eva's story.", "No link to context."],
          },
        },
        {
          id: "et10-u2-themes-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "How does Priestley explore the theme of age and generational difference? Refer to at least two characters and use very short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast", statement: "Characters are set against each other to show different attitudes." },
              { kind: "context", name: "Post-war change", statement: "The 1945 audience wanted social reform and looked to a new generation." },
            ],
            steps: [
              { reasoning: "Mr and Mrs Birling are fixed in their views, refuse to accept blame and are relieved when the Inspector is thought to be a hoax.", marks: 2, markCode: "AO1" },
              { reasoning: "Sheila and Eric are shaken, admit their guilt and say the message remains true even if the Inspector was not genuine.", marks: 2, markCode: "AO1" },
              { reasoning: "Mr Birling's attitude that the young “know nothing” is ironic because the younger characters show greater moral insight.", marks: 2, markCode: "AO2" },
              { reasoning: "The final phone call confirms the parents' wish to return to normal, whereas Sheila's and Eric's disquiet shows lasting change.", marks: 2, markCode: "AO2" },
              { reasoning: "Context: Priestley writes in 1945 when many hoped the young would build a fairer society, so the play ends with a note of challenge to the old.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "The older Birlings resist responsibility and seek to return to comfort, while Sheila and Eric are changed by the evening. Priestley contrasts them to suggest that hope lies with a younger generation willing to learn, a message resonant in 1945.",
            commonErrors: ["Generalising that 'old people are bad'.", "Not exploring how Priestley presents the contrast."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u2-themes-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts about An Inspector Calls.",
          parts: [
            { label: "a", prompt: "Give two ways in which Eva Smith is treated unfairly in the play.", marks: 2 },
            { label: "b", prompt: "Explain what the play suggests about the divisions between social classes.", marks: 4 },
            { label: "c", prompt: "How does Priestley present responsibility through the way the Inspector questions each character?", marks: 6 },
            { label: "d", prompt: "'Priestley wrote An Inspector Calls to criticise society, not individuals.' How far do you agree? Refer to the whole play and its context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "1912 and 1945", statement: "A play set before the wars but written after them to argue for social reform." },
              { kind: "skill", name: "Evaluative argument", statement: "Weigh the view against alternatives with evidence." },
              { kind: "technique", name: "Structure as argument", statement: "The chain of interrogations argues that responsibility is shared." },
            ],
            steps: [
              { part: "a", reasoning: "She is dismissed from her job for asking for a fair wage.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She is refused help by a charity and exploited by men.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The wealthy Birlings hold power and look down on those with less, as shown by their attitude to Eva.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Class division causes a lack of empathy and allows exploitation to go unchecked.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "The Inspector questions each character in turn and reveals each link to Eva, building a chain of shared guilt.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The individual responses (denial, remorse, defensiveness) show different attitudes to responsibility.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Agreement: the family stands for classes and attitudes in society, and Priestley's message is political.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of methods: the Inspector's final speech, the structure of interrogations and the dramatic irony of Mr Birling's speeches.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: individuals are held to account and some (Sheila, Eric) change, so personal responsibility matters too.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: a socialist writing in 1945 uses an Edwardian setting to argue for the welfare state.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) She loses her job; she is refused help and exploited. (b) The wealthy look down on the poor and lack empathy. (c) The chain of interrogations shows shared guilt. (d) A top answer sees the family as representing society but recognises that individual change matters, linked to Priestley's socialist context.",
            commonErrors: ["Retelling the plot.", "One-sided argument.", "Context not linked to the question."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
    {
      id: "et10-u2-context-1912-1945",
      title: "Context: 1912 and 1945",
      skill: "Use historical and social context to illuminate Priestley's methods and message (AO4).",
      lesson: {
        sections: [
          {
            heading: "Two time periods",
            body: "The play is set in 1912, when the Titanic was about to sail, class divisions were rigid, women could not vote and the First World War was two years away. It was written in 1945, as Britain emerged from the Second World War and voted for a Labour government that would build the welfare state. The gap allows Priestley to use hindsight against his characters.",
          },
          {
            heading: "Priestley's politics",
            body: "J. B. Priestley was a socialist who believed in cooperation and shared responsibility. The Inspector's call to treat others as “members of one body” reflects that view and contrasts with the capitalist individualism of Mr Birling.",
          },
          {
            heading: "How to use context",
            body: "Do not list facts. Select context that explains a specific method or idea, such as Birling's wrong predictions, and say how it shapes the audience's response.",
          },
        ],
        keyFormulas: [
          { name: "Hindsight", statement: "The 1945 audience knows what the 1912 characters do not, creating dramatic irony." },
          { name: "Socialism", statement: "A belief that society should share responsibility and resources." },
          { name: "Linked context", statement: "Fact + how it shapes a method or idea + effect on the audience." },
        ],
        workedExample: {
          problem: "How does context help explain Mr Birling's early speeches?",
          solution: "In 1912 many wealthy businessmen shared Birling's confidence about progress and peace. By writing in 1945 Priestley lets the audience see how mistaken this optimism was: the Titanic sank and two world wars followed. This hindsight turns Birling's speeches into dramatic irony, discrediting his individualism and preparing the audience to accept the Inspector's contrasting message.",
        },
      },
      questions: [
        {
          id: "et10-u2-context-1912-1945-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When was An Inspector Calls first performed, and when is it set?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Performed in 1945 and set in 1912" },
              { id: "b", text: "Performed and set in 1945" },
              { id: "c", text: "Performed in 1912 and set in 1945" },
              { id: "d", text: "Performed and set in 1912" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Time gap", statement: "The gap between setting and writing allows dramatic irony." }],
            steps: [{ reasoning: "Written in 1945, set in 1912.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Written in 1945 but set in 1912.",
            commonErrors: ["Reversing the dates."],
          },
        },
        {
          id: "et10-u2-context-1912-1945-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the position of women in 1912 helps us understand Priestley's presentation of Sheila or Eva.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Women in the Edwardian era", statement: "Women could not vote and had limited rights and independence." }],
            steps: [
              { reasoning: "Women in 1912 had few legal rights and depended on men, so Eva's vulnerability to exploitation is realistic.", marks: 1, markCode: "AO4" },
              { reasoning: "Sheila's engagement is treated as a business-like match, showing the limited choices of middle-class women.", marks: 1, markCode: "AO4" },
              { reasoning: "Priestley shows Sheila gaining independent judgement, which looks forward to change.", marks: 1, markCode: "AO1" },
              { reasoning: "The contrast between 1912 and 1945 invites the audience to compare how much has, or has not, improved.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Women lacked rights in 1912, so Eva's exploitation and Sheila's early dependence are realistic; Sheila's growth points to a changing role by 1945.",
            commonErrors: ["Listing facts without linking to the play.", "Confusing 1912 with 1945 attitudes."],
          },
        },
        {
          id: "et10-u2-context-1912-1945-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "How does Priestley use the contrast between the 1912 setting and the 1945 audience to present his ideas? Refer to specific moments and use very short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic irony from hindsight", statement: "The audience's later knowledge exposes the characters' errors." },
              { kind: "context", name: "Post-war Britain", statement: "A mood of reform and the creation of the welfare state." },
            ],
            steps: [
              { reasoning: "Birling's confident claims about peace and the Titanic are ironic to a 1945 audience who knows the truth.", marks: 2, markCode: "AO2" },
              { reasoning: "This irony discredits his capitalist views and invites the audience to question similar attitudes.", marks: 2, markCode: "AO4" },
              { reasoning: "The Inspector's warning of “fire and blood and anguish” alludes to the wars that follow the play's setting.", evidence: "fire and blood and anguish", marks: 2, markCode: "AO2" },
              { reasoning: "The setting in 1912 shows how rigid class divisions were, while the 1945 audience wants a fairer society.", marks: 2, markCode: "AO4" },
              { reasoning: "The structure of the play, in which a family learns too late, serves as a warning to the audience not to repeat the same mistakes.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "By setting the play in 1912 and writing in 1945, Priestley creates dramatic irony that discredits Birling and gives the Inspector's warning weight. The audience is invited to learn from history and build a fairer society.",
            commonErrors: ["Context presented as a list of facts.", "Not linking context to methods."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u2-context-1912-1945-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts about An Inspector Calls.",
          parts: [
            { label: "a", prompt: "Give two events after 1912 that a 1945 audience would know about.", marks: 2 },
            { label: "b", prompt: "Explain how Priestley's socialist views shape the Inspector's final speech.", marks: 4 },
            { label: "c", prompt: "How does Priestley use Mr Birling's attitude to business to criticise capitalism?", marks: 6 },
            { label: "d", prompt: "'An Inspector Calls is a play for its time, not for ours.' How far do you agree? Refer to the play and its contexts.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Socialist playwright", statement: "Priestley believed in community and shared responsibility." },
              { kind: "skill", name: "Judgement", statement: "Evaluate the claim across the whole play, considering both historical and modern relevance." },
              { kind: "technique", name: "Dramatic irony", statement: "Characters' beliefs are contradicted by what the audience knows." },
            ],
            steps: [
              { part: "a", reasoning: "The sinking of the Titanic in 1912.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "The First World War, and the Second World War.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "The speech uses collective language to argue that everyone is linked, reflecting socialist beliefs.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It warns of consequences if the lesson is ignored, as the wars showed.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Birling values profit and cheap labour, and dismisses Eva's claim for a fair wage.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "His mistakes in predictions undermine his authority and discredit his individualist creed.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: the play is rooted in Edwardian class divisions and the 1945 desire for reform.", marks: 4, markCode: "AO4" },
              { part: "d", reasoning: "Disagreement: themes of responsibility, inequality and prejudice remain relevant, and the structure invites audiences of any time to reflect.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of methods that carry timeless force: the interrogations, the final speech and the open ending.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "A reasoned overall judgement that links context to continuing relevance.", marks: 3, markCode: "AO4" },
            ],
            finalAnswer: "(a) The Titanic; the two world wars. (b) Collective language and warnings express socialist ideas. (c) Birling's profit-driven views and wrong predictions discredit capitalism. (d) A top answer weighs the play's historical rootedness against its enduring themes and reaches a justified judgement.",
            commonErrors: ["Bolt-on facts.", "One-sided answers.", "No reference to dramatic methods."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
  ],
};
