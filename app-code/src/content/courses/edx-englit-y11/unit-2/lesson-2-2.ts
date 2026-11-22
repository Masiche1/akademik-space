import type { Lesson } from "../../../types.ts";
import { bands } from "../unit-1/levels.ts";

export const lesson22: Lesson = {
  id: "et11-u2-lesson-2-2",
  code: "2-2",
  title: "Themes and Regency Context in Pride and Prejudice",
  goal: "I CAN explain how Austen explores marriage, class and reputation, and link them to Regency society.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Entail", definition: "A legal arrangement that restricted who could inherit an estate, here passing Longbourn to Mr Collins rather than the Bennet daughters." },
    { term: "Gentry", definition: "The landowning class just below the aristocracy, to which the Bennets and Darcy belong." },
    { term: "Reputation", definition: "The public view of a person's character, especially important to a woman's marriage prospects." },
    { term: "Regency", definition: "The period in early nineteenth-century Britain, roughly 1811 to 1820, in which the novel is set and was published." },
    { term: "Satire", definition: "Using humour and irony to expose and criticise foolishness or vice in society." },
    { term: "Mercenary", definition: "Motivated chiefly by money." },
  ],
  concepts: [
    {
      id: "et11-u2-marriage-class-reputation",
      title: "Marriage, class and reputation",
      skill: "Analyse how Austen presents different kinds of marriage and the influence of class and reputation.",
      lesson: {
        sections: [
          {
            heading: "Marriage",
            body: "Austen presents a spectrum of marriages. Charlotte Lucas marries Mr Collins for security, a pragmatic choice that Elizabeth cannot accept. Lydia and Wickham marry out of impulse and money trouble. Mr and Mrs Bennet are mismatched, a warning of marrying without respect. Jane and Bingley, and finally Elizabeth and Darcy, marry for love, mutual respect and understanding. The novel suggests that the best marriages combine affection with good sense.",
          },
          {
            heading: "Class",
            body: "Class shapes attitudes throughout. Lady Catherine de Bourgh insists that marriage between her nephew and Elizabeth would pollute the shades of Pemberley. The Bingley sisters despise the Bennets' connections in trade. Austen mocks snobbery, yet she also shows Darcy overcoming his own prejudice, and the match between a gentleman and a gentleman's daughter is shown as acceptable. Her criticism is therefore gentle and reforming rather than revolutionary.",
          },
          {
            heading: "Reputation",
            body: "A woman's reputation could determine her family's future. Lydia's elopement threatens to ruin all the Bennet sisters, which explains the urgency of the situation. Austen shows how fragile a woman's position was and how much depended on public opinion.",
          },
        ],
        keyFormulas: [
          { name: "Satire", statement: "Gentle mockery to expose social flaws, such as Mrs Bennet's single-minded focus on marriage." },
          { name: "Contrasting marriages", statement: "Different couples allow Austen to compare motives and judge them." },
          { name: "Reputation", statement: "A woman's public character determined her family's social standing." },
        ],
        workedExample: {
          problem: "How does Austen present marriage in Pride and Prejudice?",
          solution: "Austen presents marriage as both an economic necessity and a moral choice. The novel's opening sentence, with its mock-authoritative claim that 'a single man in possession of a good fortune, must be in want of a wife', immediately frames marriage as a matter of money, and the irony shows how the community views it. Charlotte Lucas's marriage to Mr Collins demonstrates the pressure on women without fortune: she chooses security over affection. In contrast, Elizabeth's refusal of two wealthy proposals shows her insistence on respect and love. By ending with the marriages of Jane and Elizabeth, Austen suggests that the ideal marriage reconciles personal happiness with social sense.",
        },
      },
      questions: [
        {
          id: "et11-u2-marriage-class-reputation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does Charlotte Lucas accept Mr Collins's proposal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She wants to make Elizabeth jealous" },
              { id: "b", text: "She has been ordered to by Lady Catherine" },
              { id: "c", text: "She wants financial security and a home of her own" },
              { id: "d", text: "She is deeply in love with him" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Women and marriage", statement: "For women without fortune, marriage was often the only route to security." }],
            steps: [{ reasoning: "Charlotte is practical and accepts a safe, if unromantic, future.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** She wants security and a home.",
            commonErrors: ["Believing she loves Collins; Austen makes it clear she does not."],
          },
        },
        {
          id: "et11-u2-marriage-class-reputation-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Austen uses the marriage of Lydia and Wickham to explore the importance of reputation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Female reputation", statement: "A scandal could ruin a whole family's prospects." },
              { kind: "skill", name: "Explaining significance", statement: "Say why an event matters to theme and plot." },
            ],
            steps: [
              { reasoning: "Lydia's elopement without marriage threatens her own and her sisters' reputations.", marks: 1, markCode: "AO1" },
              { reasoning: "The family's panic shows how dependent a woman's standing was on propriety.", marks: 1, markCode: "AO4" },
              { reasoning: "Darcy intervenes and pays for the marriage, restoring reputation and revealing his generosity.", marks: 1, markCode: "AO1" },
              { reasoning: "Austen shows that the marriage solves the social problem but not the moral one, since Lydia and Wickham remain irresponsible.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Lydia's elopement threatens the whole family with ruin, showing the power of reputation. Darcy's intervention saves them, though the marriage itself remains unhappy.",
            commonErrors: ["Describing the elopement without addressing reputation."],
          },
        },
        {
          id: "et11-u2-marriage-class-reputation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How does Austen use Lady Catherine de Bourgh to explore ideas about class? Refer to the novel as a whole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Caricature", statement: "An exaggerated figure used to satirise a social attitude." },
              { kind: "context", name: "Class hierarchy", statement: "Rank and birth determined status in Regency England." },
            ],
            steps: [
              { reasoning: "Lady Catherine is domineering and condescending, presented as a caricature of aristocratic snobbery.", marks: 2, markCode: "AO2" },
              { reasoning: "She confronts Elizabeth, insisting that a match with Darcy would be a degradation, expressing the belief in class purity.", marks: 2, markCode: "AO1" },
              { reasoning: "Elizabeth's firm reply shows individual worth outweighing rank and challenges the hierarchy.", marks: 2, markCode: "AO1" },
              { reasoning: "Ironically, Lady Catherine's interference gives Darcy hope and helps bring the couple together, so her snobbery defeats itself.", marks: 2, markCode: "AO2" },
            ],
            levels: bands(8, "analysis of Austen's presentation of class through Lady Catherine"),
            finalAnswer: "Lady Catherine is a satirical figure of aristocratic arrogance. Elizabeth's defiance asserts merit against rank, and the irony that Lady Catherine hastens the marriage exposes the weakness of snobbery.",
            commonErrors: ["Retelling the confrontation scene without analysis.", "Treating class as only a background detail."],
          },
        },
        {
          id: "et11-u2-marriage-class-reputation-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "This question is about marriage, class and reputation in Pride and Prejudice.",
          parts: [
            { label: "a", prompt: "Name two marriages in the novel and say whether each is based on love, money or impulse.", marks: 2 },
            { label: "b", prompt: "Explain what Mrs Bennet's attitude to her daughters' marriages reveals about her values.", marks: 4 },
            { label: "c", prompt: "How does Austen use the contrast between Jane and Bingley and Charlotte and Mr Collins to explore marriage?", marks: 6 },
            { label: "d", prompt: "'Austen suggests that marriage should combine love with practical good sense.' How far do you agree? Refer to the whole novel.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison within a text", statement: "Contrast characters or events to reveal the writer's view." },
              { kind: "context", name: "Marriage in the Regency", statement: "Marriage determined security, status and inheritance." },
            ],
            steps: [
              { part: "a", reasoning: "Jane and Bingley or Elizabeth and Darcy: love and respect.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Charlotte and Collins: security; or Lydia and Wickham: impulse.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She values wealth and status; her aim is to see her daughters 'well married'.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Her fear of the entail drives her anxiety.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Austen satirises her shallow, noisy speech.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "She neglects character and happiness, showing a lack of judgement.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Jane and Bingley marry for gentle mutual affection, though lacking insight.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Charlotte marries for security and accepts a loveless, comfortless arrangement.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The contrast shows Austen's sympathy for women's constraints while upholding love.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Love combined with good sense: Elizabeth and Darcy learn about each other before marrying.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Counter-examples: Lydia and Wickham (impulse) and the Bennets (attraction without respect) show the dangers of neglecting sense.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Austen's irony and the ending's reconciliation of love and fortune support a reasoned judgement.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "analysis of contrasting marriages", "c"),
              ...bands(8, "evaluation of marriage as love combined with sense", "d"),
            ],
            finalAnswer: "(a) Jane and Bingley (love); Charlotte and Collins (security). (b) Mrs Bennet values wealth and status. (c) The contrast shows both the pressures on women and Austen's preference for affection. (d) Agree: the successful marriages combine affection with judgement, while the failed ones lack one or the other.",
            commonErrors: ["Describing marriages with no comment on Austen's purpose.", "One-sided answer in (d)."],
          },
        },
      ],
    },
    {
      id: "et11-u2-regency-context",
      title: "Regency context",
      skill: "Use knowledge of Regency society, gender roles and inheritance to explain Austen's concerns (AO4).",
      lesson: {
        sections: [
          {
            heading: "Society and gender",
            body: "In Austen's England, property passed to men and daughters often inherited little. Women of the gentry had few acceptable careers, so marriage determined security. The entail on Longbourn means that Mrs Bennet's fear for her daughters is real, not merely comic.",
          },
          {
            heading: "Class and manners",
            body: "Society was ordered by birth and land. Trade was considered lower than the landed gentry, so the Gardiners' background is a minor point of snobbery. Manners were closely watched, and propriety dictated how men and women could behave.",
          },
          {
            heading: "Austen's perspective",
            body: "Austen was an unmarried woman from a clergyman's family. She wrote with a clear view of the economics of marriage and a witty, ironic stance. Her novels criticise snobbery and mercenary marriage but do not overturn the social order.",
          },
        ],
        keyFormulas: [
          { name: "Entail", statement: "A legal restriction that ensured the estate passed to a male heir." },
          { name: "Propriety", statement: "Socially approved behaviour, especially for women." },
          { name: "AO4", statement: "Use context only where it explains the text or Austen's purpose." },
        ],
        workedExample: {
          problem: "How is the context of inheritance important in Pride and Prejudice?",
          solution: "The entail explains why the Bennet daughters' futures are precarious: because Longbourn will pass to Mr Collins, the girls will be left with little unless they marry well. This context makes Mrs Bennet's apparent obsession understandable and adds urgency to the plot. It also raises the stakes of Elizabeth's refusal of Collins, which is a serious risk to her security. Austen uses the situation to expose a legal system that disadvantages women, while using comedy to keep the tone light.",
        },
      },
      questions: [
        {
          id: "et11-u2-regency-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the entail mean for the Bennet family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Bennets must sell their house to pay debts" },
              { id: "b", text: "Longbourn will pass to a male relative, not to the Bennet daughters" },
              { id: "c", text: "The eldest daughter will inherit the estate" },
              { id: "d", text: "The family will be given an allowance by Mr Darcy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Entail", statement: "An estate was limited to male heirs." }],
            steps: [{ reasoning: "The entail leaves Longbourn to Mr Collins.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Longbourn will pass to a male relative.",
            commonErrors: ["Thinking the eldest daughter inherits."],
          },
        },
        {
          id: "et11-u2-regency-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how knowledge of the limited options for women in Regency society helps us to understand Charlotte Lucas.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Integrating context", statement: "Use a contextual fact to explain a character's choice." }],
            steps: [
              { reasoning: "Women had few careers, so unmarried women depended on relatives.", marks: 1, markCode: "AO4" },
              { reasoning: "Charlotte is plain and twenty-seven, so she fears becoming a burden on her family.", marks: 1, markCode: "AO1" },
              { reasoning: "Her choice of Collins is therefore realistic, and Austen invites sympathy as well as criticism.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Women had few careers, and Charlotte fears dependence, so she chooses security with Collins. Austen presents this with understanding as well as irony.",
            commonErrors: ["Judging Charlotte by modern attitudes."],
          },
        },
        {
          id: "et11-u2-regency-context-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "How does Austen use Elizabeth's refusal of Mr Collins to challenge the expectations of her society?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Marriage expectations", statement: "Women were expected to accept suitable offers." },
              { kind: "technique", name: "Comic scene", statement: "Humour used to expose pomposity." },
            ],
            steps: [
              { reasoning: "Collins's pompous proposal is comic, and Austen mocks his sense that his rank is a gift.", marks: 2, markCode: "AO2" },
              { reasoning: "Elizabeth refuses, even though marriage would secure Longbourn, showing she values respect over security.", marks: 2, markCode: "AO1" },
              { reasoning: "Mrs Bennet's fury reflects social expectation, so Elizabeth's independence is a risk and a challenge.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(6, "analysis of Elizabeth's challenge to social expectation"),
            finalAnswer: "Austen ridicules Collins and presents Elizabeth's refusal as a courageous choice of respect over security, challenging the expectation that women accept any suitable offer.",
            commonErrors: ["Telling the story of the proposal.", "No reference to context."],
          },
        },
        {
          id: "et11-u2-regency-context-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "This question is about the context of Pride and Prejudice.",
          parts: [
            { label: "a", prompt: "State two ways in which the lives of women in the Regency period were restricted.", marks: 2 },
            { label: "b", prompt: "Explain how the entail increases the tension in the novel.", marks: 4 },
            { label: "c", prompt: "How does Austen present class distinctions through the Bingley sisters?", marks: 6 },
            { label: "d", prompt: "'Austen is more interested in individuals than in society.' How far do you agree? Refer to the whole novel and its context.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Regency society", statement: "Rank, property and gender structured life." },
              { kind: "skill", name: "Evaluating purpose", statement: "Weigh the focus on individuals against the picture of society." },
            ],
            steps: [
              { part: "a", reasoning: "Women could not usually inherit property.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Few respectable careers were open to them, making marriage essential.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Longbourn will pass to Mr Collins on Mr Bennet's death.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "The daughters will be left with little, so marriage is urgent.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Mrs Bennet's anxiety is therefore grounded in reality.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Collins's proposal becomes a serious temptation, increasing tension.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The Bingley sisters despise the Bennets' connections with trade.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Their false politeness is satirised through irony.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Their snobbery is ironic since their own fortune came from trade.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "Individuals: Elizabeth and Darcy's development drives the plot.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Society: entail, class and reputation shape every decision, and Austen satirises it.", marks: 3, markCode: "AO4" },
              { part: "d", reasoning: "A reasoned judgement that individuals are shown within society.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "analysis of class through the Bingley sisters", "c"),
              ...bands(8, "evaluation of individuals and society with relevant context", "d"),
            ],
            finalAnswer: "(a) Could not inherit; few careers. (b) The entail makes marriage urgent and Collins a temptation. (c) The sisters are snobbish and ironically hypocritical. (d) Austen shows individuals shaped by and testing society, so the two cannot be separated.",
            commonErrors: ["Context given as a list of facts.", "A one-sided answer in (d)."],
          },
        },
      ],
    },
  ],
};
