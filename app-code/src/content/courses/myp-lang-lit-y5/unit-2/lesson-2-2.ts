import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mll5-u2-lesson-2-2",
  code: "2-2",
  title: "Representation in Texts",
  goal: "I CAN analyse how texts represent different groups and perspectives, and evaluate the implications of these representations.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Representation", definition: "How groups or individuals are portrayed in texts." },
    { term: "Stereotype", definition: "Oversimplified, fixed idea about a group — often negative." },
    { term: "Tokenism", definition: "Including one representative of a group to appear inclusive without real representation." },
    { term: "Perspective", definition: "The viewpoint from which events are narrated." },
    { term: "Agency", definition: "The capacity to act and make choices — often denied to marginalized groups in texts." },
    { term: "Othering", definition: "Representing a group as fundamentally different or inferior." },
  ],
  concepts: [
    {
      id: "mll5-u2-representation",
      title: "How texts represent groups",
      skill: "Analyse representations of groups and identify stereotypes, tokenism and othering.",
      lesson: {
        sections: [
          {
            heading: "Representation matters",
            body: "Texts **shape** how we see groups. If all villains are one ethnicity, or all heroes are one gender, texts reinforce stereotypes. Representation isn't just about accuracy — it's about **power**: who gets to be complex, who gets reduced to a label?",
          },
          {
            heading: "Stereotypes and tokenism",
            body: "**Stereotype** = fixed, oversimplified image ('the angry black man', 'the dumb blonde'). **Tokenism** = one character from a group included to 'tick a box' — they're there but not really represented. Both reduce people to categories.",
          },
          {
            heading: "Agency and othering",
            body: "**Agency** = ability to act. When marginalized characters are passive, rescued, or defined by others, they lack agency. **Othering** = presenting a group as 'them' vs 'us' — different, inferior, threatening. Watch who has agency and who is 'othered'.",
          },
        ],
        keyFormulas: [
          { name: "Representation analysis", statement: "Who is represented + How + With what agency = power dynamics." },
        ],
        workedExample: {
          problem: "A film has one gay character who is only defined by being gay — is this good representation?",
          solution: "No — tokenism. The character exists to represent a group but has no independent identity or agency.",
        },
      },
      questions: [
        {
          id: "mll5-u2-representation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is tokenism in representation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using tokens as currency" },
              { id: "b", text: "A type of voting" },
              { id: "c", text: "Including one representative to appear inclusive without real representation" },
              { id: "d", text: "Including many diverse characters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Tokenism", statement: "One representative included superficially, not real representation." }],
            steps: [{ reasoning: "Criterion A (Analysing): tokenism = superficial inclusion — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Including one representative to appear inclusive without real representation",
          },
        },
        {
          id: "mll5-u2-representation-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Characters",
            author: "Written for Akademik Space",
            text: "The novel features 20 characters. The only female character is the love interest who cries twice and needs rescuing. The only character of colour is the villain's sidekick who speaks in broken English.",
          },
          stem: "Identify two representation problems in this novel.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Representation problems", statement: "Stereotypes, lack of agency, tokenism = poor representation." }],
            steps: [
              { reasoning: "Criterion A (Analysing): female character = stereotype (love interest, cries, needs rescue) — lacks agency, defined by male needs.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): character of colour = 'broken English' stereotype — villain's sidekick, othered through language.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Female = passive stereotype; character of colour = 'broken English' stereotype — both lack agency, reinforce stereotypes.",
          },
        },
        {
          id: "mll5-u2-representation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Films",
            author: "Written for Akademik Space",
            text: "Film A: The only gay character is the best friend who provides comic relief and has no storyline of his own.\n\nFilm B: The gay character is the protagonist with a complex arc — he falls in love, faces rejection, and chooses to come out on his own terms.",
          },
          stem: "Compare the representation in these two films — which is better and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Representation quality", statement: "Complex, agentic characters = good representation; stereotyped, passive = poor." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Film A's gay character = tokenism — comic relief, no independent storyline, defined by sexuality.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Film B's character = protagonist with agency — complex arc, own choices, real representation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is better — represents a person, not a stereotype; A reduces character to label.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Film B better — protagonist with agency vs Film A's tokenistic comic relief character.",
          },
        },
        {
          id: "mll5-u2-representation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the 'othering' in: 'Those people are so different — they don't even speak our language.'", marks: 1 },
            { label: "b", prompt: "Explain how this language constructs 'us vs them'.", marks: 2 },
            { label: "c", prompt: "Rewrite it to represent the same group more fairly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Othering", statement: "Language that emphasizes difference creates 'us vs them'." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'those people', 'different', 'our language' — 'us vs them' language, othering.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'those' vs 'our' creates in-group/out-group; 'different' emphasizes alienness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'don't even speak our language' implies inferiority — they fail our standard.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): fair rewrite — e.g. 'They speak a different language, but they're still people with the same hopes and fears.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes 'othering' language, emphasizes shared humanity.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'Those people', 'different', 'our' = othering. (b) Us-vs-them, inferiority implied. (c) e.g. 'They speak a different language, but share the same hopes.'",
          },
        },
        {
          id: "mll5-u2-representation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype in representation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An oversimplified, fixed idea about a group" },
              { id: "b", text: "A character's hobby" },
              { id: "c", text: "An accurate, detailed portrait" },
              { id: "d", text: "A type of camera angle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stereotype", statement: "Oversimplified, fixed idea about a group." }],
            steps: [{ reasoning: "Criterion A (Analysing): stereotype = oversimplified fixed idea — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** An oversimplified, fixed idea about a group",
          },
        },
        {
          id: "mll5-u2-representation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Cast",
            author: "Written for Akademik Space",
            text: "The film's only woman is a nagging mother; the only elderly character is confused; the only teenager is a criminal.",
          },
          stem: "How many stereotyped character descriptions appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Stereotype", statement: "Fixed, oversimplified group images." }],
            steps: [{ reasoning: "Criterion A (Analysing): nagging mother, confused elderly, criminal teenager — 3 stereotypes.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-representation-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Show",
            author: "Written for Akademik Space",
            text: "The only character with a disability in the series exists to inspire the able-bodied protagonist.",
          },
          stem: "What representation problem does this describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No problem at all" },
              { id: "b", text: "A spelling error" },
              { id: "c", text: "Tokenism — the character exists to serve another's narrative, not as a full person" },
              { id: "d", text: "Excellent representation — disability is shown positively" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tokenism", statement: "Inclusion that serves others' narratives, not the character's own." }],
            steps: [{ reasoning: "Criterion A (Analysing): character defined by inspiring others = tokenism — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Tokenism — the character exists to serve another's narrative",
          },
        },
        {
          id: "mll5-u2-representation-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Advertisement",
            author: "Written for Akademik Space",
            text: "The cleaning product ad shows only women using it, always smiling, always in aprons.",
          },
          stem: "What representation issue does this ad exhibit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows too many people" },
              { id: "b", text: "It represents all genders equally" },
              { id: "c", text: "It reinforces the stereotype that cleaning is women's work — gendered representation" },
              { id: "d", text: "It is perfectly neutral" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Stereotyped representation", statement: "Texts reinforce assumptions about who does what." }],
            steps: [{ reasoning: "Criterion A (Analysing): only women + aprons + smiling = gender stereotype — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It reinforces the stereotype that cleaning is women's work",
          },
        },
        {
          id: "mll5-u2-representation-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When analysing representation, what does 'agency' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How famous a character is" },
              { id: "b", text: "The size of a character's role" },
              { id: "c", text: "The author's agency" },
              { id: "d", text: "The capacity of characters to act and make choices — often denied to marginalised groups" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Agency", statement: "Capacity to act and make choices." }],
            steps: [{ reasoning: "Criterion A (Analysing): agency = capacity to act — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The capacity of characters to act and make choices",
          },
        },
        {
          id: "mll5-u2-representation-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Characters",
            author: "Written for Akademik Space",
            text: "In the story, the refugee child decides to walk to the border alone; the aid worker argues with officials; the grandmother chooses to stay.",
          },
          stem: "How many characters shown here have agency (make their own choices)?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Agency", statement: "Characters with agency make their own choices." }],
            steps: [{ reasoning: "Criterion A (Analysing): child 'decides', worker 'argues', grandmother 'chooses' — 3 agents.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-representation-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "'Those people are so different. They don't even speak our language. We tried to help, but they just don't fit in.'",
          },
          stem: "Analyse how this language 'others' a group — what assumptions does it reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Othering", statement: "Language that emphasizes difference creates 'us vs them'." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'those people', 'they' vs 'we', 'our' — in-group/out-group pronouns.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'different', 'don't fit in' — frames the group as inherently incompatible; 'we tried to help' claims moral superiority.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'just don't fit in' implies the group is the problem, not the society — shifts blame onto the marginalised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pronouns + 'different'/'don't fit' construct 'us vs them'; group blamed for not fitting rather than society for excluding.",
          },
        },
        {
          id: "mll5-u2-representation-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'othering' in representation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Giving a character a nickname" },
              { id: "b", text: "Using a different font" },
              { id: "c", text: "Representing a group as fundamentally different or inferior" },
              { id: "d", text: "Showing a group accurately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Othering", statement: "Representing a group as different/inferior — 'them' vs 'us'." }],
            steps: [{ reasoning: "Criterion A (Analysing): othering = 'them' vs 'us' — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Representing a group as fundamentally different or inferior",
          },
        },
        {
          id: "mll5-u2-representation-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the representation problem in: 'The only Asian character is the convenience store owner who speaks broken English.'", marks: 1 },
            { label: "b", prompt: "Name two specific issues in this representation.", marks: 2 },
            { label: "c", prompt: "Suggest a fairer way to represent this character.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Stereotype and othering", statement: "Single-function, linguistically mocked characters = poor representation." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): stereotyping + othering — Asian character reduced to accent joke and service role.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): issue 1 — 'convenience store owner' = occupational stereotype; issue 2 — 'broken English' = linguistic othering.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): also tokenism — 'the only Asian character' exists as a stereotype marker, not a person.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): fairer version — e.g. 'Mr. Chen ran the store; he'd worked there for twenty years and knew every customer's order by heart.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): gives character history, skill and individuality — agency restored.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Stereotype + othering. (b) Occupational stereotype, 'broken English' mockery, tokenism. (c) e.g. character with history and skill.",
          },
        },
        {
          id: "mll5-u2-representation-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Panel",
            author: "Written for Akademik Space",
            text: "The documentary includes a farmer, a teacher, a nurse, and a street vendor.",
          },
          stem: "How many distinct social groups are represented?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Representation", statement: "Each occupation/group counts as a represented group." }],
            steps: [{ reasoning: "Criterion A (Analysing): farmer, teacher, nurse, street vendor — 4 groups.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "mll5-u2-representation-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Candidate",
            author: "Written for Akademik Space",
            text: "The film includes one deaf character — a background extra with one line and no storyline.",
          },
          stem: "Why is this poor representation despite including a deaf character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because deaf people cannot act" },
              { id: "b", text: "Because one line is too many" },
              { id: "c", text: "It isn't poor — any inclusion is good" },
              { id: "d", text: "Because it is tokenism — inclusion without real representation, agency or complexity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tokenism", statement: "Inclusion without agency/complexity is superficial." }],
            steps: [{ reasoning: "Criterion A (Analysing): one line, no storyline = tokenism — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Because it is tokenism — inclusion without real representation",
          },
        },
        {
          id: "mll5-u2-representation-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the representation issue: 'The villain is the only character of colour, and he is corrupt and violent.'", marks: 1 },
            { label: "b", prompt: "Explain how this reinforces a harmful association.", marks: 2 },
            { label: "c", prompt: "Rewrite the scenario to avoid the stereotype while keeping a villain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Stereotype", statement: "Linking a group to villainy reinforces harmful associations." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): racial stereotyping — villainy assigned to a racial group.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'only character of colour' + villain = text links race to corruption/violence — reinforces racist association.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): if the group is otherwise absent, the stereotype goes unchallenged — no counter-representation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): e.g. 'The villain is a wealthy white businessman who embezzles from the community; characters of all backgrounds oppose him.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): decouples race from villainy; diverse characters share moral agency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Racial stereotype linking group to villainy. (b) Reinforces racist association, unchallenged. (c) Decouple race from villainy; diversify cast.",
          },
        },
      ],
    },
    {
      id: "mll5-u2-perspective-representation",
      title: "Whose perspective?",
      skill: "Analyse narrative perspective and its impact on representation.",
      lesson: {
        sections: [
          {
            heading: "Perspective shapes representation",
            body: "The same story told from different perspectives **represents** differently. A story about immigration told by a citizen vs an immigrant gives different representations. Whose eyes are we seeing through? Whose voice is centred? Whose is marginalised?",
          },
          {
            heading: "Dominant vs marginalised voices",
            body: "Most texts centre **dominant** perspectives — the powerful, the majority, the 'norm'. Marginalised groups are often **background**, **stereotyped**, or **voiceless**. Ask: who narrates? Who is 'other'? Who gets to be complex?",
          },
          {
            heading: "Reading against the grain",
            body: "Critical readers can **read against the grain** — find the silences, question assumptions, imagine alternative perspectives. 'Whose story isn't being told?' 'What would this look like from the other side?' This is active, critical reading.",
          },
        ],
        keyFormulas: [
          { name: "Perspective and representation", statement: "Narrator's position = whose reality is centred." },
        ],
        workedExample: {
          problem: "A novel about slavery is narrated by the slave owner, not the enslaved. What's the problem?",
          solution: "Centres the oppressor's perspective — enslaved people become objects, not subjects; their experience is filtered through the owner's eyes.",
        },
      },
      questions: [
        {
          id: "mll5-u2-perspective-representation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does narrative perspective matter for representation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It determines whose reality is centred and whose is marginalised" },
              { id: "b", text: "It doesn't — stories are stories" },
              { id: "c", text: "It only affects the plot" },
              { id: "d", text: "It makes the story longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Perspective and representation", statement: "Perspective determines whose voice is centred." }],
            steps: [{ reasoning: "Criterion A (Analysing): perspective determines representation — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It determines whose reality is centred",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Tellings",
            author: "Written for Akademik Space",
            text: "Version A (citizen's view): 'The refugees came to our town. We tried to help, but they were different — different customs, different languages.'\n\nVersion B (refugee's view): 'We fled our homes with nothing. We arrived in a strange country where no one spoke our language. We were grateful for help but felt like outsiders.'",
          },
          stem: "Compare these perspectives — how does each represent the refugee experience?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective and representation", statement: "Whose voice narrates determines how experience is represented." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A centres citizen's view — refugees as 'they', 'different' — objectified, othered.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B centres refugee's experience — 'we fled', 'we arrived' — subjective, empathetic, complex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = citizen's view (refugees as 'other'); B = refugee's view (subjective, empathetic) — perspective determines representation.",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Colonial Text",
            author: "Written for Akademik Space",
            text: "'The natives were simple people, content with their lot. The explorers brought civilization to the wilderness.'",
          },
          stem: "Analyse the perspective and representation — whose voice is missing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Colonial perspective", statement: "Colonial texts centre the colonizer and marginalize the colonized." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'natives', 'simple', 'content' — colonized people represented as primitive, passive, satisfied.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'explorers brought civilization' — colonizer as hero, colonized as recipient — agency denied.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'natives' own voice completely absent — we only see through colonizer's eyes; their perspective is silenced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Colonizer's perspective — 'natives' stereotyped as simple/passive; their voice absent; agency denied.",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify whose perspective dominates in: 'The soldiers liberated the town. The grateful citizens cheered.'", marks: 1 },
            { label: "b", prompt: "How are the citizens represented?", marks: 2 },
            { label: "c", prompt: "Rewrite from the citizens' perspective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dominant perspective", statement: "Text centres liberators; citizens are passive objects of liberation." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): soldiers'/liberators' perspective — they act, citizens react.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): citizens = 'grateful', 'cheered' — passive recipients, no agency or voice.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'liberated' frames soldiers as heroes — citizens' own experience of war absent.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): citizen perspective — e.g. 'We hid in cellars as the fighting raged. When the soldiers came, we didn't know if they were friends or enemies. Slowly, we dared to hope.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): gives citizens agency, fear, complexity — different representation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Soldiers'. (b) Citizens passive, grateful, no voice. (c) Citizen perspective — fear, uncertainty, hope — agency restored.",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does narrative perspective matter for representation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It determines whose reality is centred and whose is marginalised" },
              { id: "b", text: "It doesn't affect meaning" },
              { id: "c", text: "It only affects the ending" },
              { id: "d", text: "It only matters in poetry" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Perspective and representation", statement: "Perspective determines whose voice is centred." }],
            steps: [{ reasoning: "Criterion A (Analysing): perspective determines centred vs marginalised reality — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It determines whose reality is centred and whose is marginalised",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A tells the story from the coloniser's diary. Version B tells it from the colonised family's letters.",
          },
          stem: "How many distinct narrative perspectives are presented in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective", statement: "Each telling centres a different viewpoint." }],
            steps: [{ reasoning: "Criterion A (Analysing): coloniser's diary + colonised family's letters — 2 perspectives.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'reading against the grain' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only reading the ending" },
              { id: "b", text: "Skimming quickly" },
              { id: "c", text: "Questioning the text's assumptions and imagining silenced perspectives" },
              { id: "d", text: "Reading the text backwards" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading against the grain", statement: "Critical reading questions assumptions and finds silences." }],
            steps: [{ reasoning: "Criterion A (Analysing): against the grain = questioning dominant perspective — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Questioning the text's assumptions and imagining silenced perspectives",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Story",
            author: "Written for Akademik Space",
            text: "The novel about the factory fire is narrated entirely by the factory owner's son. The workers who died are mentioned only as 'the casualties'.",
          },
          stem: "What is the main representation problem here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no problem" },
              { id: "b", text: "The owner's son is underrepresented" },
              { id: "c", text: "The fire is described too briefly" },
              { id: "d", text: "The workers have no voice — the dead are reduced to 'casualties', centring the privileged perspective" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Centred perspective", statement: "Privileged narrator centres own view; victims become statistics." }],
            steps: [{ reasoning: "Criterion A (Analysing): workers = 'casualties' — voiceless; owner's son narrates — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** The workers have no voice — reduced to 'casualties'",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Account",
            author: "Written for Akademik Space",
            text: "'The expedition 'discovered' the valley. The guide who actually led them through is never named.'",
          },
          stem: "What does 'reading against the grain' reveal here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — the text is objective" },
              { id: "b", text: "The expedition failed" },
              { id: "c", text: "The guide was the true discoverer" },
              { id: "d", text: "The valley was already known — 'discovered' is colonial language erasing prior knowledge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Colonial discourse", statement: "'Discovery' language erases indigenous knowledge." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'discovered' implies prior emptiness — erases that locals knew the valley; unnamed guide = silenced labour — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** 'Discovered' is colonial language erasing prior knowledge and the unnamed guide's role",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Voices",
            author: "Written for Akademik Space",
            text: "The report quotes the mayor, the police chief, and a shopkeeper. No resident who lived through the flood is quoted.",
          },
          stem: "How many perspectives are represented in this report?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective and voice", statement: "Count whose voices actually appear." }],
            steps: [{ reasoning: "Criterion A (Analysing): mayor + police chief + shopkeeper = 3 quoted perspectives; residents silenced.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "'The settlers built new schools. The indigenous children were finally given an education.'",
          },
          stem: "Analyse the perspective — whose voice is centred and whose is missing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Colonial perspective", statement: "Settler-centred text frames indigenous people as passive recipients." }],
            steps: [
              { reasoning: "Criterion A (Analysing): centred voice = settlers — 'built', 'given' — settlers are agents of generosity.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): indigenous children = 'finally given' — passive recipients; their own education systems and voices absent.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'finally' implies prior deprivation — settler narrative of benevolence; missing perspective = indigenous experience of schooling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Settler voice centred (agents of generosity); indigenous voice absent — children passive recipients of 'given' education.",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean for a text to 'centre' a perspective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To put the perspective in the middle of the page" },
              { id: "b", text: "To make one viewpoint the main focus while others are marginalised" },
              { id: "c", text: "To avoid all perspectives" },
              { id: "d", text: "To give all perspectives equal space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Centred perspective", statement: "One viewpoint dominates; others are backgrounded." }],
            steps: [{ reasoning: "Criterion A (Analysing): centred = main focus, others marginalised — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** To make one viewpoint the main focus while others are marginalised",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify whose perspective dominates: 'The volunteers saved the village. The grateful villagers wept with joy.'", marks: 1 },
            { label: "b", prompt: "How are the villagers represented — with agency or as objects?", marks: 2 },
            { label: "c", prompt: "Rewrite from the villagers' perspective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dominant perspective", statement: "Saviour narrative centres helpers; recipients become passive." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): volunteers'/saviours' perspective — they act, villagers react.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): villagers = 'grateful', 'wept' — passive emotional objects; no voice, no choices shown.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'saved' frames volunteers as heroes — villagers' own survival efforts absent.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): e.g. 'We dug out our own wells while the outsiders filmed. When the volunteers arrived, we were already rebuilding.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): restores villager agency — they acted first; volunteers become secondary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Volunteers'. (b) Villagers passive objects. (c) Villager perspective — they acted first, volunteers secondary.",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Pronouns",
            author: "Written for Akademik Space",
            text: "'We must protect our borders from them. They don't understand us.'",
          },
          stem: "How many pronouns mark an in-group ('we', 'us', 'our') versus out-group ('they', 'them') split? Count all pronouns marking this division.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Pronouns and othering", statement: "In-group vs out-group pronouns construct 'us vs them'." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'We', 'our', 'us' (in-group) + 'them', 'They' (out-group) — 5 division-marking pronouns.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Film",
            author: "Written for Akademik Space",
            text: "The whole film is shot through the guard's eyes. The prisoners are seen only through the bars, silent and uniform.",
          },
          stem: "Whose perspective is centred, and what is lost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No perspective is centred" },
              { id: "b", text: "The prisoners' — we see their inner lives" },
              { id: "c", text: "The guard's — the prisoners' inner lives, voices and individuality are lost" },
              { id: "d", text: "The director's" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective and representation", statement: "Whose eyes we see through determines whose humanity is visible." }],
            steps: [{ reasoning: "Criterion A (Analysing): guard's POV; prisoners = silent, uniform objects — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The guard's — the prisoners' inner lives, voices and individuality are lost",
          },
        },
        {
          id: "mll5-u2-perspective-representation-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the centred perspective in: 'The empire expanded its borders. The conquered peoples submitted.'", marks: 1 },
            { label: "b", prompt: "Explain how the conquered peoples are represented.", marks: 2 },
            { label: "c", prompt: "Write one sentence from the conquered people's perspective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Imperial perspective", statement: "Imperial texts centre expansion; conquered become passive objects." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): empire's/imperial perspective — 'expanded' centres the empire's agency.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'conquered peoples submitted' — passive verb, no voice, defined entirely by empire's action.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'submitted' implies consent/weakness — erases resistance and their own historical narrative.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): e.g. 'We did not submit — we survived what they could not hold.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): restores agency and counters 'submitted' — different representation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Imperial. (b) Passive, voiceless, 'submitted' erases resistance. (c) e.g. 'We did not submit — we survived.'",
          },
        },
      ],
    },
  ],
};
