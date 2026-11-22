import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "langb-u4-lesson-4-3",
  code: "4-3",
  title: "Critical Reading Skills",
  goal: "I CAN evaluate a text's reliability, identify logical fallacies and form my own evidence-based judgement.",
  standards: ["Critical reading", "Comprehension", "Evaluation", "Language B SL"],
  vocabulary: [
    { term: "Logical fallacy", definition: "A flaw in reasoning that makes an argument invalid, e.g. attacking the person instead of the argument." },
    { term: "Ad hominem", definition: "Dismissing an argument by attacking the person making it rather than the argument itself." },
    { term: "Straw man", definition: "Misrepresenting an opponent's argument to make it easier to attack." },
    { term: "False dilemma", definition: "Presenting only two options when more exist — 'either you agree or you're the enemy'." },
    { term: "Correlation vs causation", definition: "Mistaking 'two things happen together' for 'one causes the other'." },
    { term: "Synthesis", definition: "Combining information from multiple sources or parts of a text into a coherent view." },
  ],
  concepts: [
    {
      id: "langb-u4-fallacies",
      title: "Recognising logical fallacies",
      skill: "Identify common fallacies — ad hominem, straw man, false dilemma, correlation/causation — in arguments.",
      lesson: {
        sections: [
          {
            heading: "Arguments can be wrong in clever ways",
            body: "A text can be fluent, confident and still logically flawed. **Logical fallacies** are reasoning errors that make arguments invalid regardless of how well they are expressed. Critical readers learn to spot them: the writer may be emotionally persuasive while being logically weak. Language B comprehension rewards identifying these flaws.",
          },
          {
            heading: "The main fallacies to know",
            body: "**Ad hominem**: attacking the person, not the argument ('He's just a politician, of course he'd say that'). **Straw man**: misrepresenting the opponent's view to defeat it easily. **False dilemma**: presenting only two options ('Either support this or you're against progress'). **Correlation/causation**: assuming that because two things happen together, one causes the other.",
          },
          {
            heading: "Why fallacies work",
            body: "Fallacies work because they feel convincing — emotion, simplification and tribal loyalty bypass logic. A straw man is easier to defeat than a real argument; a false dilemma forces a choice that may not exist. Recognising them lets you read critically: not 'is this well written?' but 'is this well reasoned?'",
          },
        ],
        keyFormulas: [
          { name: "Fallacy signals", statement: "Attacks the person = ad hominem; oversimplifies opponent = straw man; only two options = false dilemma" },
          { name: "Correlation trap", statement: "A and B happen together ≠ A causes B — look for a third factor" },
        ],
        workedExample: {
          problem: "'My opponent wants to raise taxes, which means he hates poor people.' Which fallacies appear?",
          solution: "Straw man (redefines 'raise taxes' as 'hates poor people') and possibly false dilemma (implies only two options). Both misrepresent the position.",
        },
      },
      questions: [
        {
          id: "langb-u4-q17",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'ad hominem' fallacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attacking the person making the argument rather than the argument itself" },
              { id: "b", text: "Attacking the argument's evidence" },
              { id: "c", text: "Presenting two false options" },
              { id: "d", text: "Using too many statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ad hominem", statement: "Dismissing an argument by attacking the arguer's character instead of the reasoning." },
            ],
            steps: [
              { reasoning: "Ad hominem targets the person, not the argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Attacking the person making the argument rather than the argument itself",
            commonErrors: ["Confusing ad hominem with legitimate criticism of a source's credibility."],
          },
        },
        {
          id: "langb-u4-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define 'false dilemma' and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "False dilemma", statement: "Presenting only two options when more exist, forcing a false choice." },
            ],
            steps: [
              { reasoning: "Definition: artificially restricting options to two extremes.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'Either you support the war or you support the enemy.'", marks: 1, markCode: "M" },
              { reasoning: "Other options (neutrality, negotiation) are ignored to force agreement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "False dilemma = only two options presented when more exist; e.g. 'support war or support enemy'.",
            commonErrors: ["Accepting binary choices without checking whether alternatives exist."],
          },
        },
        {
          id: "langb-u4-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between correlation and causation, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation vs causation", statement: "Two events occurring together does not prove one causes the other." },
            ],
            steps: [
              { reasoning: "Correlation: two things happen together — an observable pattern.", marks: 1, markCode: "M" },
              { reasoning: "Causation: one thing directly produces the other — a stronger claim needing evidence.", marks: 1, markCode: "M" },
              { reasoning: "Example: ice cream sales and drowning both rise in summer — neither causes the other; heat does.", marks: 1, markCode: "M" },
              { reasoning: "A third factor (season/temperature) explains both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correlation = together; causation = causes. Ice cream/drowning share a third factor (summer heat).",
            commonErrors: ["Assuming that because A and B correlate, A must cause B."],
          },
        },
        {
          id: "langb-u4-q20",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Video games and violence",
            author: "Written for Akademik Space",
            source: "Fallacy analysis practice",
            text: "Everyone knows violent video games make children aggressive — the evidence is obvious. Sales of violent games have risen alongside youth crime, proving the connection. The gaming industry disagrees, of course — they would say that, wouldn't they? They are just greedy companies protecting their profits. Parents who let children play these games are basically neglecting them.",
          },
          parts: [
            { label: "a", prompt: "Identify two logical fallacies used.", marks: 2 },
            { label: "b", prompt: "Explain the correlation/causation problem in the argument.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the argument is convincing despite its flaws.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fallacy identification", statement: "Correlation≠causation + ad hominem + straw man weaken the argument." },
            ],
            steps: [
              { part: "a", reasoning: "Correlation/causation: rising sales + rising crime 'proving' the link.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ad hominem/straw man: 'they would say that' + 'greedy companies' + 'basically neglecting'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two trends rising together doesn't prove one causes the other — third factors possible.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No mechanism or controlled evidence offered.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Emotionally persuasive but logically weak — fallacies substitute for evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The underlying concern may be valid but this argument fails to prove it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verdict: not convincing as an argument, though the topic deserves better evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Correlation/causation + ad hominem/straw man. (b) Rising together ≠ causing. (c) Persuasive emotionally, weak logically — unconvincing argument.",
            commonErrors: ["Being swayed by confident tone rather than checking reasoning."],
          },
        },
        {
          id: "langb-u4-q73",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'straw man' fallacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using weak evidence" },
              { id: "b", text: "Presenting only two options when more exist" },
              { id: "c", text: "Attacking the person making the argument" },
              { id: "d", text: "Misrepresenting an opponent's argument to make it easier to defeat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Straw man", statement: "Distorting the opponent's position into an easier target." },
            ],
            steps: [
              { reasoning: "A straw man attacks a distorted version of the real argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Misrepresenting an opponent's argument to make it easier to defeat",
            commonErrors: ["Confusing straw man (misrepresentation) with ad hominem (personal attack)."],
          },
        },
        {
          id: "langb-u4-q74",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Either you support the new law or you want the country to fail.' Which fallacy is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ad hominem" },
              { id: "b", text: "Correlation/causation" },
              { id: "c", text: "Straw man" },
              { id: "d", text: "False dilemma" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "False dilemma", statement: "Presenting only two options when more exist." },
            ],
            steps: [
              { reasoning: "Only two options are offered — support the law or want failure — ignoring middle positions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** False dilemma",
            commonErrors: ["Missing that many positions exist between the two extremes offered."],
          },
        },
        {
          id: "langb-u4-q75",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A text says 'Ice cream sales and drowning rates both rise in summer, so ice cream causes drowning.' What is the flaw?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "False dilemma" },
              { id: "b", text: "Ad hominem attack" },
              { id: "c", text: "Correlation mistaken for causation — a third factor (heat) explains both" },
              { id: "d", text: "Straw man" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation vs causation", statement: "Two events rising together does not prove one causes the other." },
            ],
            steps: [
              { reasoning: "Both rise with summer heat — the real cause of both is temperature, not ice cream.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Correlation mistaken for causation — a third factor (heat) explains both",
            commonErrors: ["Accepting 'X and Y rise together, so X causes Y' without checking for third factors."],
          },
        },
        {
          id: "langb-u4-q76",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'My opponent is just a failed businessman, so his economic plan can't work.' Which fallacy appears?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Straw man" },
              { id: "b", text: "False dilemma" },
              { id: "c", text: "Ad hominem — attacking the person rather than the plan" },
              { id: "d", text: "Appeal to evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ad hominem", statement: "Dismissing an argument by attacking the arguer's character." },
            ],
            steps: [
              { reasoning: "The attack targets the person's business failure, not the plan's merits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ad hominem — attacking the person rather than the plan",
            commonErrors: ["Confusing legitimate questions about credibility with personal attacks."],
          },
        },
        {
          id: "langb-u4-q77",
          difficulty: "core",
          totalMarks: 2,
          stem: "A writer argues against 'giving criminals better conditions in prison' — but the opponent actually argued for humane, lawful treatment. What fallacy is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Correlation/causation" },
              { id: "b", text: "Ad hominem" },
              { id: "c", text: "False dilemma" },
              { id: "d", text: "Straw man — the opponent's view is exaggerated into an easier target" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Straw man", statement: "The real position (humane treatment) is distorted into 'better conditions'." },
            ],
            steps: [
              { reasoning: "'Better conditions' misrepresents 'humane, lawful treatment' — an exaggerated, easier target.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Straw man — the opponent's view is exaggerated into an easier target",
            commonErrors: ["Not noticing the position was distorted before being attacked."],
          },
        },
        {
          id: "langb-u4-q78",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do fallacies like straw men and false dilemmas feel convincing to readers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because they are hard to understand" },
              { id: "b", text: "Because they use accurate statistics" },
              { id: "c", text: "Because simplification and emotional tribal loyalty bypass careful reasoning" },
              { id: "d", text: "Because they always cite experts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fallacy effectiveness", statement: "Emotion and simplification bypass logic — that is why fallacies persuade." },
            ],
            steps: [
              { reasoning: "Straw men are easier to defeat; false dilemmas force choices — both exploit mental shortcuts.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because simplification and emotional tribal loyalty bypass careful reasoning",
            commonErrors: ["Assuming convincing tone means convincing reasoning."],
          },
        },
        {
          id: "langb-u4-q79",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'logical fallacy' and explain why a fluent, well-written argument can still be invalid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logical fallacy", statement: "A flaw in reasoning that invalidates an argument regardless of expression." },
            ],
            steps: [
              { reasoning: "Definition: an error in reasoning — the conclusion does not follow from the premises.", marks: 1, markCode: "M" },
              { reasoning: "Fluency and confidence are about style, not logic — a fallacy can be beautifully expressed.", marks: 1, markCode: "R" },
              { reasoning: "Critical reading asks 'is this well reasoned?' not just 'is this well written?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A logical fallacy is a reasoning flaw — style cannot rescue invalid logic.",
            commonErrors: ["Equating good writing with good reasoning."],
          },
        },
        {
          id: "langb-u4-q80",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of a false dilemma you might encounter in everyday argument, and explain why it is a fallacy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fallacy application", statement: "False dilemmas force a choice between two extremes while ignoring alternatives." },
            ],
            steps: [
              { reasoning: "Example given: e.g. 'Either you recycle everything or you don't care about the planet.'", marks: 1, markCode: "M" },
              { reasoning: "The dilemma ignores middle options — partial recycling, different environmental actions.", marks: 1, markCode: "M" },
              { reasoning: "It pressures agreement by making the alternative seem extreme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Recycling or you don't care' — ignores partial effort and other actions; forces a false binary.",
            commonErrors: ["Accepting the two-option frame without checking whether alternatives exist."],
          },
        },
        {
          id: "langb-u4-q81",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a legitimate criticism of a source's credibility and an ad hominem attack.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fallacy boundaries", statement: "Credibility critiques address relevance; ad hominem attacks character to dismiss." },
            ],
            steps: [
              { reasoning: "Legitimate: 'This study was funded by the industry it praises — check for bias.'", marks: 1, markCode: "M" },
              { reasoning: "Ad hominem: 'The author is a liar, so ignore everything they say' — character attack replaces argument engagement.", marks: 1, markCode: "M" },
              { reasoning: "The difference: does the point address the argument's reliability or just the person's worth?", marks: 1, markCode: "R" },
              { reasoning: "Credibility concerns can be relevant evidence; ad hominem is always a fallacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Credibility critique questions the argument's reliability; ad hominem attacks the person to dismiss without engaging.",
            commonErrors: ["Labeling all source criticism as ad hominem — relevant credibility issues are valid."],
          },
        },
        {
          id: "langb-u4-q82",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The truth about fast food",
            author: "Written for Akademik Space",
            source: "Fallacy analysis practice",
            text: "Fast food is destroying our children's health — this is the shocking truth that nobody wants to admit. One study found that children who eat fast food weekly are more likely to be overweight. But fast food companies spend millions advertising to children, and the evidence is clear: regulation is urgently needed. Of course, some argue that personal choice matters more than rules. They would say that, wouldn't they? Parents should simply say no.",
          },
          parts: [
            { label: "a", prompt: "Identify two logical fallacies or weak reasoning moves in the extract.", marks: 2 },
            { label: "b", prompt: "Explain why 'one study found' is weak evidence for a general claim.", marks: 2 },
            { label: "c", prompt: "Evaluate the strength of the writer's overall argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fallacy identification", statement: "Single study + ad hominem dismissal + emotional language weaken the argument." },
            ],
            steps: [
              { part: "a", reasoning: "Ad hominem: 'They would say that, wouldn't they?' mocks opponents.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also emotional overstatement: 'destroying', 'shocking truth nobody wants to admit'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One study is a single data point — cannot establish a general pattern.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No study details given — cannot verify methodology, sample or relevance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Emotionally persuasive but logically weak — fallacies substitute for evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The underlying concern about child health advertising may be valid but is unproven here.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verdict: unconvincing as an argument despite a plausible topic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ad hominem + emotional overstatement. (b) Single unnamed study proves nothing general. (c) Persuasive tone, weak logic — unconvincing.",
            commonErrors: ["Being swayed by the alarming language rather than checking the reasoning."],
          },
        },
        {
          id: "langb-u4-q83",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Ban cars from city centres",
            author: "Written for Akademik Space",
            source: "Fallacy identification practice",
            text: "Cars should be banned from all city centres immediately. The air pollution is unbearable, and everyone knows drivers don't care about the environment. Pedestrians are the real victims of this selfish policy of car dependence. Shop owners will tell you the same — they have watched customers disappear since the traffic scheme began. The only people opposing the ban are car lovers who put their hobby before everyone's health.",
          },
          parts: [
            { label: "a", prompt: "Identify two logical fallacies in the extract.", marks: 2 },
            { label: "b", prompt: "Explain the problem with 'everyone knows drivers don't care'.", marks: 2 },
            { label: "c", prompt: "Explain how the writer handles opposing views and whether this helps or hurts the argument.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fallacy identification", statement: "Appeal to consensus + ad hominem + unverified claims weaken arguments." },
            ],
            steps: [
              { part: "a", reasoning: "Ad hominem: 'car lovers who put their hobby before health' attacks opponents' character.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also 'everyone knows' — false consensus appeal; 'unbearable' is emotional overstatement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Everyone knows' fabricates consensus — drivers' attitudes are assumed, not evidenced.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It pressures agreement by making disagreement seem ignorant.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Opposition is mentioned only to dismiss it — 'only people opposing' are selfish car lovers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No genuine engagement with practical objections (accessibility, deliveries, emergencies).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This reveals bias and weakens credibility — the argument avoids its hardest questions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Verdict: emotionally forceful but logically incomplete — the ban's costs are never addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ad hominem + false consensus. (b) Fabricates agreement, pressures reader. (c) Opposition dismissed not engaged — hurts the argument.",
            commonErrors: ["Missing that opponents are caricatured rather than answered."],
          },
        },
        {
          id: "langb-u4-q84",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why spotting a fallacy requires checking the reasoning, not just the style of an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical reading", statement: "Fallacies are reasoning errors invisible to style-focused reading." },
            ],
            steps: [
              { reasoning: "Style (tone, vocabulary, structure) can be excellent while logic is flawed.", marks: 1, markCode: "M" },
              { reasoning: "Fallacies hide inside fluent prose — only checking premises vs conclusion reveals them.", marks: 1, markCode: "R" },
              { reasoning: "Emotionally persuasive fallacies are designed to bypass scrutiny.", marks: 1, markCode: "M" },
              { reasoning: "Critical readers ask 'does the evidence prove the claim?' at every step.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Style and logic are separate — fallacies hide in fluent writing, so reasoning must be checked step by step.",
            commonErrors: ["Judging arguments by how confidently they are written."],
          },
        },
      ],
    },
    {
      id: "langb-u4-critical-evaluation",
      title: "Forming your own judgement",
      skill: "Weigh evidence from a text, form a supported personal evaluation, and synthesise information across sources.",
      lesson: {
        sections: [
          {
            heading: "From comprehension to judgement",
            body: "Critical reading ends with your own **evaluation**. This does not mean rejecting the text — it means weighing what it says against evidence, logic and your own knowledge. A strong evaluation acknowledges what the text does well AND where it is weak. In Language B, questions asking 'do you agree?' require a position supported by textual evidence, not just opinion.",
          },
          {
            heading: "Building an evidence-based view",
            body: "Support your judgement with specifics from the text: 'The writer claims X, supported by Y, but ignores Z.' Reference both strengths and weaknesses. If you agree, say why the argument works; if you disagree, identify the specific flaw. Vague responses ('it was interesting') score poorly — anchor every judgement in the text.",
          },
          {
            heading: "Synthesising across sources",
            body: "Real-world understanding combines multiple texts. Compare what different sources say about the same topic — where do they agree? Where do they diverge? Divergence often reveals bias or different evidence. Synthesising means building a view more reliable than any single source. This skill underlies both comprehension questions and your own extended writing in Language B.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation structure", statement: "Position + evidence from text + acknowledged limitations = strong judgement" },
          { name: "Synthesis", statement: "Compare sources -> find agreements/divergences -> build a more reliable view" },
        ],
        workedExample: {
          problem: "A text argues school uniforms improve equality. How do you evaluate it?",
          solution: "Acknowledge the argument's logic (uniforms reduce visible differences) but note it ignores other inequalities (shoes, accessories) and freedom of expression — balanced judgement anchored in the text.",
        },
      },
      questions: [
        {
          id: "langb-u4-q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'synthesis' mean in critical reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counting the arguments in a text" },
              { id: "b", text: "Summarising a single text briefly" },
              { id: "c", text: "Combining information from multiple sources into a coherent view" },
              { id: "d", text: "Translating a text accurately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synthesis", statement: "Building a coherent view by combining information across sources or sections." },
            ],
            steps: [
              { reasoning: "Synthesis combines multiple inputs into one view.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Combining information from multiple sources into a coherent view",
            commonErrors: ["Confusing synthesis with simple summarising of one text."],
          },
        },
        {
          id: "langb-u4-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements of a strong evidence-based evaluation of a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Position + textual evidence + balanced acknowledgement of strengths/weaknesses." },
            ],
            steps: [
              { reasoning: "A clear position: agree, disagree or qualified agreement.", marks: 1, markCode: "M" },
              { reasoning: "Evidence from the text supporting the position — specific claims, quotes, examples.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledgement of limitations or counter-evidence — balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear position, textual evidence, balanced limitations.",
            commonErrors: ["Giving opinion without anchoring it in the text."],
          },
        },
        {
          id: "langb-u4-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a 'balanced' evaluation is stronger than simply praising or attacking a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced judgement", statement: "Weighing strengths and weaknesses shows critical engagement rather than reaction." },
            ],
            steps: [
              { reasoning: "Praise-only or attack-only responses are one-sided reactions, not analysis.", marks: 1, markCode: "R" },
              { reasoning: "Balanced evaluation weighs what works AND what doesn't — showing real engagement.", marks: 1, markCode: "M" },
              { reasoning: "It demonstrates you can hold complexity — the essence of critical thinking.", marks: 1, markCode: "M" },
              { reasoning: "Examiners reward nuanced judgement over blanket approval or dismissal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balanced evaluation shows critical engagement and nuance — rewarded over one-sided reactions.",
            commonErrors: ["Writing 'I really liked it' without analysis, or attacking without fairness."],
          },
        },
        {
          id: "langb-u4-q24",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Social media and teenagers",
            author: "Written for Akademik Space",
            source: "Critical evaluation practice",
            text: "Social media is ruining a generation. Teenagers who spend hours online show higher rates of anxiety and depression, studies confirm. The platforms are designed to be addictive — infinite scroll, notifications, likes. Schools should ban phones entirely to protect students. Of course, defenders claim social media also connects isolated teens and provides educational content. But the risks clearly outweigh the benefits.",
          },
          parts: [
            { label: "a", prompt: "State the writer's position on social media.", marks: 2 },
            { label: "b", prompt: "Identify one strength and one weakness in the argument.", marks: 2 },
            { label: "c", prompt: "Write a balanced evaluation of the writer's argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced evaluation", statement: "Position + evidence assessment + acknowledged counter-view = strong judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Writer argues social media is harmful and schools should ban phones.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Position accurately identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strength: cites studies linking social media to anxiety/depression.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weakness: dismisses counter-argument ('defenders claim') without engaging its evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluation takes a position (e.g. concerns valid but ban too extreme).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Anchors judgement in the text's evidence and its gaps.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Acknowledges both the real risks and the ignored benefits — balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Social media harmful; ban phones. (b) Strength: cites studies; weakness: dismisses counter-evidence. (c) Balanced judgement — concerns real, solution too extreme.",
            commonErrors: ["Agreeing completely or rejecting completely without weighing evidence."],
          },
        },
        {
          id: "langb-u4-q85",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'forming your own judgement' of a text require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weighing the text's claims against evidence and logic to reach a supported position" },
              { id: "b", text: "Rejecting every opinion in the text" },
              { id: "c", text: "Deciding whether you enjoyed it" },
              { id: "d", text: "Repeating the writer's opinion accurately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical evaluation", statement: "Judgement = weighing claims and evidence to reach a supported position." },
            ],
            steps: [
              { reasoning: "Evaluation weighs the text's reasoning and evidence before forming a position.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Weighing the text's claims against evidence and logic to reach a supported position",
            commonErrors: ["Confusing personal taste with critical judgement."],
          },
        },
        {
          id: "langb-u4-q86",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'I really enjoyed this text' a weak evaluation answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it gives a reaction, not a judgement anchored in the text's reasoning and evidence" },
              { id: "b", text: "Because essays must always disagree" },
              { id: "c", text: "Because enjoyment is never relevant" },
              { id: "d", text: "Because it is too short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation quality", statement: "Strong evaluations anchor judgement in textual evidence, not personal reaction." },
            ],
            steps: [
              { reasoning: "Enjoyment is a reaction; evaluation requires analysing claims, evidence and reasoning.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because it gives a reaction, not a judgement anchored in the text's reasoning and evidence",
            commonErrors: ["Mistaking personal response for critical evaluation."],
          },
        },
        {
          id: "langb-u4-q87",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When comparing two sources on the same topic, what does 'divergence' between them most often signal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That the topic has no truth" },
              { id: "b", text: "That bias, different evidence or different cultural frames may be at work" },
              { id: "c", text: "That one source is always wrong" },
              { id: "d", text: "That both sources must be ignored" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Divergence across sources reveals bias, evidence gaps or cultural framing." },
            ],
            steps: [
              { reasoning: "Where sources disagree is where bias, evidence quality or frames differ — worth investigating.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** That bias, different evidence or different cultural frames may be at work",
            commonErrors: ["Assuming disagreement means one side is simply lying — investigate why they diverge."],
          },
        },
        {
          id: "langb-u4-q88",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the first step in forming an evidence-based evaluation of a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify the writer's claim and the evidence offered for it" },
              { id: "b", text: "Write your opinion immediately" },
              { id: "c", text: "Count the number of paragraphs" },
              { id: "d", text: "Check the publication date only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation process", statement: "Identify claim and evidence before judging." },
            ],
            steps: [
              { reasoning: "You cannot evaluate without first knowing what is claimed and what supports it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Identify the writer's claim and the evidence offered for it",
            commonErrors: ["Judging before analysing — opinion first, evidence never."],
          },
        },
        {
          id: "langb-u4-q89",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which response demonstrates a 'balanced' evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The text was boring and should not exist" },
              { id: "b", text: "I agree with everything the writer says" },
              { id: "c", text: "The argument is persuasive but relies on one unnamed study and ignores cost concerns" },
              { id: "d", text: "The text was brilliant and perfect in every way" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced judgement", statement: "Weighing strengths AND weaknesses demonstrates critical engagement." },
            ],
            steps: [
              { reasoning: "Option (b) acknowledges a strength (persuasive) and a weakness (unnamed study, ignored costs).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The argument is persuasive but relies on one unnamed study and ignores cost concerns",
            commonErrors: ["Choosing praise or attack — balance requires both."],
          },
        },
        {
          id: "langb-u4-q90",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does synthesis produce a 'more reliable view' than any single source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because more sources means more words" },
              { id: "b", text: "Because combining sources always proves them wrong" },
              { id: "c", text: "Because single sources are never accurate" },
              { id: "d", text: "Because agreements across sources strengthen confidence and divergences reveal what to question" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Cross-source comparison strengthens agreements and exposes divergences." },
            ],
            steps: [
              { reasoning: "Agreement across independent sources is stronger evidence; divergence flags questions to investigate.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because agreements across sources strengthen confidence and divergences reveal what to question",
            commonErrors: ["Assuming more sources automatically means more truth — quality still matters."],
          },
        },
        {
          id: "langb-u4-q91",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the three elements of a strong evidence-based evaluation of a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation structure", statement: "Position + textual evidence + acknowledged limitations." },
            ],
            steps: [
              { reasoning: "A clear position: agree, disagree or qualified agreement.", marks: 1, markCode: "M" },
              { reasoning: "Evidence from the text: specific claims, examples or quotations supporting the position.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledged limitations: weaknesses or counter-evidence considered — balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear position, textual evidence, acknowledged limitations.",
            commonErrors: ["Giving a position without anchoring it in the text."],
          },
        },
        {
          id: "langb-u4-q92",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why vague evaluations like 'the text was interesting' score poorly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation quality", statement: "Every judgement must be anchored in specific textual evidence." },
            ],
            steps: [
              { reasoning: "'Interesting' expresses a reaction, not an analysis — it says nothing about the argument.", marks: 1, markCode: "M" },
              { reasoning: "No claim, evidence or reasoning is referenced — the examiner cannot see engagement.", marks: 1, markCode: "R" },
              { reasoning: "Specific judgements ('the evidence is weak because...') demonstrate actual critical reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague reactions show no engagement — every judgement must cite specific claims, evidence or reasoning.",
            commonErrors: ["Believing any opinion counts as evaluation."],
          },
        },
        {
          id: "langb-u4-q93",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A text argues strongly for a policy you personally disagree with. Explain how you would still write a fair evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair evaluation", statement: "Evaluate the argument's quality, not whether you like the conclusion." },
            ],
            steps: [
              { reasoning: "Separate your position on the issue from your judgement of the argument.", marks: 1, markCode: "R" },
              { reasoning: "Assess the text on its own terms: Are claims supported? Are fallacies present? Is evidence balanced?", marks: 1, markCode: "M" },
              { reasoning: "Acknowledge genuine strengths even while disagreeing with the conclusion.", marks: 1, markCode: "M" },
              { reasoning: "Fair evaluation judges reasoning quality — a well-argued case you disagree with can still score well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Judge the argument's reasoning, not your agreement — acknowledge strengths while noting weaknesses.",
            commonErrors: ["Rejecting the text because you disagree with its conclusion."],
          },
        },
        {
          id: "langb-u4-q94",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Year-round schooling",
            author: "Written for Akademik Space",
            source: "Critical evaluation practice",
            text: "Year-round schooling is the future of education. With shorter, more frequent breaks, students retain more knowledge and teachers avoid the burnout of long terms. Attendance improves because there are fewer long gaps for habits to slip. The model is already working in several countries, and the evidence is clear. Critics worry about costs and family holidays, but these are minor problems compared to the benefits. Schools clinging to the traditional calendar are simply afraid of change.",
          },
          parts: [
            { label: "a", prompt: "State the writer's position on year-round schooling.", marks: 2 },
            { label: "b", prompt: "Identify one strength and one weakness in the argument.", marks: 2 },
            { label: "c", prompt: "Write a balanced evaluation of the writer's argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced evaluation", statement: "Position + evidence assessment + acknowledged limitations = strong judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Writer strongly supports year-round schooling as the future of education.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Position accurately identified as unqualified advocacy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strength: cites real-world pilots and plausible benefits (retention, attendance).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weakness: 'evidence is clear' without specifics; dismisses critics as 'afraid of change' — ad hominem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluation takes a position (e.g. benefits plausible but evidence overstated).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Anchors judgement in the text's claims and its gaps — no data, critics dismissed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Acknowledges the real potential benefits while noting the weak support — balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strong advocacy of year-round schooling. (b) Strength: pilot examples; weakness: vague evidence + ad hominem on critics. (c) Plausible benefits, overstated evidence — qualified agreement.",
            commonErrors: ["Agreeing fully because the idea sounds good, or rejecting without engaging."],
          },
        },
        {
          id: "langb-u4-q95",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Online learning is superior",
            author: "Written for Akademik Space",
            source: "Synthesis and evaluation practice",
            text: "Online learning has transformed education for the better. Students can learn anywhere, at any time, at their own pace — a flexibility impossible in traditional classrooms. Recorded lessons mean no student ever misses content. Interactive platforms personalise learning in ways a teacher with thirty students never could. Of course, some miss the social side of school. But education should be about knowledge, not socialising. The classroom model is outdated, and institutions resisting digital education are holding students back.",
          },
          parts: [
            { label: "a", prompt: "State the writer's position on online versus classroom learning.", marks: 2 },
            { label: "b", prompt: "Identify two benefits the writer claims for online learning.", marks: 2 },
            { label: "c", prompt: "Explain what the writer ignores and write a balanced evaluation.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis and balanced evaluation", statement: "Position + claimed benefits + ignored dimensions = complete judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Writer claims online learning is superior; classroom model is outdated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Position accurately identified as strongly pro-online.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two of: flexibility of time/place, recorded lessons, personalised pacing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both benefits accurately identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Writer dismisses social learning with 'education should be about knowledge, not socialising' — false dilemma.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ignores: peer learning, motivation, teacher-student relationships, digital divide access issues.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluation takes a position — online offers real flexibility but 'superior' overstates it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced judgement weighs genuine benefits against ignored social and access dimensions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Online superior, classrooms outdated. (b) Flexibility, recorded lessons, personalisation. (c) Ignores social learning + access — 'superior' overstated; hybrid likely best.",
            commonErrors: ["Accepting the writer's dismissal of social learning without questioning it."],
          },
        },
        {
          id: "langb-u4-q96",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how comparing two sources on the same topic helps you form a more reliable view than either source alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Comparison reveals agreements (stronger confidence) and divergences (points to question)." },
            ],
            steps: [
              { reasoning: "Where sources agree, confidence increases — independent convergence suggests reliability.", marks: 1, markCode: "M" },
              { reasoning: "Where they diverge, you investigate why — revealing bias, weak evidence or different frames.", marks: 1, markCode: "R" },
              { reasoning: "You can then weigh the stronger evidence rather than accepting one source's account.", marks: 1, markCode: "M" },
              { reasoning: "The resulting view is more reliable than either source because it is tested against alternatives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agreement builds confidence, divergence exposes bias and evidence gaps — synthesis yields a tested, more reliable view.",
            commonErrors: ["Choosing one source arbitrarily instead of comparing both."],
          },
        },
      ],
    },
  ],
};
