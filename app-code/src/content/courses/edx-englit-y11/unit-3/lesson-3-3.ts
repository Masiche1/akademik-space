import type { Lesson } from "../../../types.ts";
import { bands } from "../unit-1/levels.ts";

export const lesson33: Lesson = {
  id: "et11-u3-lesson-3-3",
  code: "3-3",
  title: "Context (AO4) and Full Exam-style Questions",
  goal: "I CAN integrate context into my analysis and complete full exam-style questions on all three set texts.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO4", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Context", definition: "The social, historical and cultural circumstances in which a text was written or is set." },
    { term: "AO4", definition: "The assessment objective that rewards understanding of the relationship between texts and the contexts in which they were written." },
    { term: "Integrated context", definition: "Context woven into analysis so that it explains a specific point, not added as a separate paragraph." },
    { term: "Social criticism", definition: "Writing that exposes the faults of a society." },
    { term: "Purpose", definition: "What a writer intends to achieve or make the reader think or feel." },
    { term: "Relevance", definition: "How closely a point answers the question set." },
  ],
  concepts: [
    {
      id: "et11-u3-integrating-context",
      title: "Integrating context (AO4)",
      skill: "Link precise contextual knowledge to specific points of analysis in all three set texts.",
      lesson: {
        sections: [
          {
            heading: "Context must explain the text",
            body: "A contextual fact earns credit only when it illuminates a particular choice by the writer. 'Steinbeck wrote in the 1930s' is not enough. 'In the Depression, workers like Candy had no pension, so his fear after losing the dog reflects a real danger' links the fact to a character and a theme.",
          },
          {
            heading: "The pattern for each text",
            body: "Of Mice and Men: the Great Depression, migrant labour, racial segregation and the limited role of women. Pride and Prejudice: the entail, the importance of marriage to women's security, rank and reputation. Poetry: Romantic and Enlightenment ideas, such as Blake's anger at institutions and Shelley's belief in the fall of tyrants. Use only context you know well.",
          },
          {
            heading: "Where to place it",
            body: "Place context inside a paragraph that is already analysing language or structure: first the point and quotation, then the effect, then 'This reflects...' with the contextual fact. One well-integrated contextual link per paragraph is more effective than a long historical introduction.",
          },
        ],
        keyFormulas: [
          { name: "AO4 sentence", statement: "'This reflects the fact that... which explains why the writer...'" },
          { name: "Relevance test", statement: "Does this fact help to explain this quotation or character?" },
          { name: "Avoid", statement: "Do not include a separate paragraph of historical background." },
        ],
        workedExample: {
          problem: "Add a contextual link to this sentence: 'Crooks lives in a separate room next to the stable.'",
          solution: "Crooks lives in a separate room next to the stable, which reflects the segregation that was widespread in 1930s America, where black workers were excluded from shared spaces. Steinbeck uses this physical separation to expose the injustice that makes Crooks bitter and isolated, so that his later hope in the dream is all the more moving.",
        },
      },
      questions: [
        {
          id: "et11-u3-integrating-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is the best example of integrated context?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Because Longbourn is entailed to a male heir, Mrs Bennet's panic about her daughters' futures reflects a real danger.'" },
              { id: "b", text: "'Jane Austen was born in 1775 and lived in Hampshire.'" },
              { id: "c", text: "'Context is important in the novel.'" },
              { id: "d", text: "'In the nineteenth century many things were different from today.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Integrated context", statement: "A precise fact explaining a specific character or event." }],
            steps: [{ reasoning: "Option (a) links a specific legal fact to a character's behaviour.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** It links a precise fact to a character and event.",
            commonErrors: ["Choosing (b), a biographical fact that does not explain the text."],
          },
        },
        {
          id: "et11-u3-integrating-context-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences that link the shooting of Candy's dog to the context of the Great Depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Depression insecurity", statement: "No welfare or pension for old or injured workers." },
              { kind: "skill", name: "AO4 link", statement: "Fact, effect, purpose." },
            ],
            steps: [
              { reasoning: "Explains the event: the old dog is shot because it is judged useless.", marks: 1, markCode: "AO1" },
              { reasoning: "Links to context: workers who could no longer labour had no safety net.", marks: 1, markCode: "AO4" },
              { reasoning: "Links to character: Candy fears he will be discarded in the same way.", marks: 1, markCode: "AO1" },
              { reasoning: "States purpose: Steinbeck criticises a society that treats people as disposable.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The dog is shot because it has no use, mirroring the position of workers in the Depression who had no pension or welfare once they were too old to work. Candy fears the same fate, so Steinbeck criticises a society that discards the weak.",
            commonErrors: ["Facts about the Depression with no link to the event."],
          },
        },
        {
          id: "et11-u3-integrating-context-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How does Austen's presentation of Charlotte Lucas reflect the context in which Pride and Prejudice was written? Integrate context into your analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Women and marriage", statement: "Limited careers made marriage a woman's route to security." },
              { kind: "skill", name: "Integrated context", statement: "Context woven into analysis." },
            ],
            steps: [
              { reasoning: "Charlotte accepts Collins because she is plain, twenty-seven and without fortune, fearing dependence.", marks: 2, markCode: "AO1" },
              { reasoning: "Context: unmarried women had few careers and depended on family, so her choice was rational.", marks: 2, markCode: "AO4" },
              { reasoning: "Austen's methods: Charlotte's pragmatic speech and Elizabeth's shock present the issue with irony and sympathy.", marks: 2, markCode: "AO2" },
              { reasoning: "Purpose: Austen exposes the economic pressure on women while valuing love.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(8, "integration of context with analysis of Charlotte"),
            finalAnswer: "Charlotte accepts Collins to avoid dependence, reflecting the real limits on women in the Regency. Austen presents her choice with irony and sympathy, exposing the economic pressure on women.",
            commonErrors: ["Judging Charlotte by modern values.", "Separate paragraph on Regency society."],
          },
        },
        {
          id: "et11-u3-integrating-context-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "This question is about context in the set texts.",
          parts: [
            { label: "a", prompt: "State two features of life for migrant workers in the 1930s that help us understand Of Mice and Men.", marks: 2 },
            { label: "b", prompt: "Explain how the context of a woman's reputation in Regency society helps us to understand the reaction to Lydia's elopement.", marks: 4 },
            { label: "c", prompt: "How does Blake in London reflect the context of late eighteenth-century society? You may use what you know about the poem printed in the previous lesson.", marks: 6 },
            { label: "d", prompt: "'Writers use the problems of their own time to explore ideas that last.' How far do you agree? Refer to ONE of the texts you have studied and to its context.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context across the set texts", statement: "Depression, Regency marriage and late eighteenth-century society." },
              { kind: "skill", name: "Integrated context", statement: "Link fact to text to purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Migrant workers moved from job to job with insecure pay.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "There was no welfare or safety net for the old or injured.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "A woman's reputation affected her family's standing and her sisters' chances.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "An unmarried elopement was a scandal that would damage everyone.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The Bennets' panic is therefore realistic.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Darcy's intervention shows generosity and restores respectability.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Blake wrote during industrialisation and criticised institutions of church and state.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "'Charter'd' and 'manacles' reflect commercial control and lack of true freedom.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The poem expresses a radical view that suffering is created by social structures.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "A clear stance on how context shapes and yet does not limit the text.", marks: 3, markCode: "AO4" },
              { part: "d", reasoning: "Specific references to the chosen text's themes and methods.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "A reasoned judgement about the lasting relevance of the themes.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "link between London and its context", "c"),
              ...bands(8, "evaluation of context and lasting themes", "d"),
            ],
            finalAnswer: "(a) Insecure migrant work; no safety net. (b) Reputation determined family standing so the elopement threatened everyone. (c) Blake reflects industrial London and condemns controlling institutions. (d) Agree: the historical problems give shape to timeless ideas about power, love and loneliness.",
            commonErrors: ["General history with no link.", "No judgement in (d)."],
          },
        },
      ],
    },
    {
      id: "et11-u3-full-exam-questions",
      title: "Full exam-style questions",
      skill: "Plan, write and review complete responses under timed conditions.",
      lesson: {
        sections: [
          {
            heading: "Know the paper",
            body: "In the Edexcel International GCSE Literature course you answer on set texts and unseen or anthology poetry across two papers. Check the exam paper instructions for the question types and mark allocations that apply to your entry. Know which assessment objectives each question rewards.",
          },
          {
            heading: "A timing plan",
            body: "Spend roughly a quarter of the time planning and checking. Allow equal time to your essays, and never leave an essay unfinished: a short conclusion earns marks. Write legibly and spell the authors' and characters' names correctly.",
          },
          {
            heading: "Review with the mark scheme",
            body: "After writing, check against the objectives: do I have a clear argument (AO1)? Have I analysed language and structure (AO2)? Have I compared where asked (AO3)? Have I linked to context (AO4)? Mark your own answer and set one target for improvement.",
          },
        ],
        keyFormulas: [
          { name: "Plan, write, check", statement: "Divide the time: a short plan, a sustained answer, a brief check." },
          { name: "AO checklist", statement: "AO1 argument and evidence, AO2 methods, AO3 comparison, AO4 context." },
          { name: "Target", statement: "Finish by setting one specific improvement." },
        ],
        workedExample: {
          problem: "Plan a response to: 'How does Steinbeck present the character of Curley's wife?'",
          solution: "Thesis: Steinbeck presents Curley's wife as a lonely, powerless woman whom the men misread as a threat. Point 1: her entrance and the men's label 'tart' (AO1, AO2). Point 2: her loneliness and trapped marriage ('awful lonely') (AO1). Point 3: her thwarted dream and the context of limited options for women in the 1930s (AO4). Point 4: her presentation in death as peaceful, inviting sympathy (AO2). Conclusion: a victim of her circumstances rather than a villain.",
        },
      },
      questions: [
        {
          id: "et11-u3-full-exam-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which assessment objective rewards the analysis of a writer's use of language, form and structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AO2" },
              { id: "b", text: "AO1" },
              { id: "c", text: "AO3" },
              { id: "d", text: "AO4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "AO2", statement: "Analyse the language, form and structure used by writers to create meanings and effects." }],
            steps: [{ reasoning: "AO2 is the assessment objective for analysing language, form and structure.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** AO2",
            commonErrors: ["Confusing AO2 with AO1, which rewards knowledge and textual reference."],
          },
        },
        {
          id: "et11-u3-full-exam-questions-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short plan (a thesis and three points with a method for each) for the question: 'How does Austen present the importance of reputation in Pride and Prejudice?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A thesis and a few well-chosen points." },
              { kind: "context", name: "Reputation", statement: "A woman's reputation affected her family." },
            ],
            steps: [
              { reasoning: "A clear thesis responding to the question.", marks: 1, markCode: "AO1" },
              { reasoning: "Three relevant points from different parts of the novel (such as Lydia's elopement, Lady Catherine, Elizabeth's views).", marks: 1, markCode: "AO1" },
              { reasoning: "A method for each point (irony, reported speech, structure).", marks: 1, markCode: "AO2" },
              { reasoning: "A contextual link, such as the effect of scandal on all the sisters.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Thesis: Austen presents reputation as a fragile asset on which women's futures depend. Points: Lydia's elopement and Darcy's rescue (plot and context); Lady Catherine's snobbery (satire); Elizabeth's insistence on character over reputation (characterisation).",
            commonErrors: ["No methods in the plan.", "A plan that is a list of events."],
          },
        },
        {
          id: "et11-u3-full-exam-questions-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write ONE developed analytical paragraph in response to: 'How does Steinbeck present loneliness in Of Mice and Men?' Include a short quotation, analysis of method and a contextual link.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PETAL paragraph", statement: "Point, evidence, technique, analysis, link." },
              { kind: "context", name: "Migrant labour", statement: "Itinerant work isolated individuals." },
            ],
            steps: [
              { reasoning: "A clear point on loneliness as a condition of ranch life.", marks: 2, markCode: "AO1" },
              { reasoning: "A relevant short quotation, such as 'the loneliest guys in the world'.", evidence: "loneliest guys in the world", marks: 2, markCode: "AO1" },
              { reasoning: "Analysis of method, e.g. the superlative or the contrast with George and Lennie.", marks: 3, markCode: "AO2" },
              { reasoning: "A contextual link to migrant labour and the Depression.", marks: 3, markCode: "AO4" },
            ],
            levels: bands(10, "paragraph combining analysis and context"),
            finalAnswer: "Model: Steinbeck presents loneliness as the defining condition of ranch life. George's remark that such workers are 'the loneliest guys in the world' uses a superlative to suggest an extreme, universal isolation, which makes his friendship with Lennie remarkable. This reflects the experience of migrant workers in the Depression, who moved from job to job without family or home, so that Steinbeck's compassion for the isolated becomes social criticism.",
            commonErrors: ["No contextual link.", "Quotation with no analysis."],
          },
        },
        {
          id: "et11-u3-full-exam-questions-q4",
          difficulty: "challenge",
          totalMarks: 30,
          stem: "This is a full exam-style question for Paper 2 Section B. Choose ONE set text: Of Mice and Men or Pride and Prejudice.",
          parts: [
            { label: "a", prompt: "Of Mice and Men: 'How does Steinbeck present the relationship between power and weakness in the novel?' OR Pride and Prejudice: 'How does Austen present the importance of first impressions in the novel?' Write a plan.", marks: 5 },
            { label: "b", prompt: "Write your essay in response to the question you planned. Refer to the whole text and to its context.", marks: 20 },
            { label: "c", prompt: "Review your essay against the assessment objectives and identify one strength and one target for improvement.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Full response", statement: "Plan, sustained essay, review." },
              { kind: "context", name: "Context", statement: "Integrated, relevant contextual knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "A clear thesis.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three or four points covering the whole text.", marks: 2, markCode: "AO1" },
              { part: "a", reasoning: "Methods and context noted for points.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Knowledge and understanding with relevant, embedded references.", marks: 8, markCode: "AO1" },
              { part: "b", reasoning: "Analysis of language, form and structure.", marks: 8, markCode: "AO2" },
              { part: "b", reasoning: "Integrated contextual understanding and purpose.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accurately identifies a strength by reference to an assessment objective.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Identifies a specific, realistic target.", marks: 3, markCode: "AO1" },
            ],
            levels: [
              { level: "Level 5", marks: "17-20", descriptor: "Perceptive, sustained argument; assured analysis of methods; context integrated seamlessly; precisely chosen references.", part: "b" },
              { level: "Level 4", marks: "13-16", descriptor: "Thorough, well-developed response; well-chosen references; confident analysis; relevant context.", part: "b" },
              { level: "Level 3", marks: "9-12", descriptor: "Clear, relevant response; appropriate references; some analysis and context.", part: "b" },
              { level: "Level 2", marks: "5-8", descriptor: "Some understanding; some references; limited analysis or context.", part: "b" },
              { level: "Level 1", marks: "1-4", descriptor: "Simple, limited response; few references.", part: "b" },
            ],
            finalAnswer: "(a) Thesis and three or four points with methods and context. (b) A sustained essay with a clear argument, embedded quotations, analysis of methods and integrated context. (c) An honest AO-based review with one specific target.",
            commonErrors: ["Skipping the plan.", "Retelling the story.", "Vague targets such as 'write more'."],
            examinerNote: "Parts (a) and (c) are practice tasks to develop exam technique; only the essay is assessed in the exam.",
          },
        },
      ],
    },
  ],
};
