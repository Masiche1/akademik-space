import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eias-soc-u1-lesson-1-1",
  code: "1-1",
  title: "Socialisation and Socialisation Agents",
  goal: "I CAN define socialisation and explain the main agents of socialisation.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 1 — Socialisation"],
  vocabulary: [
    {
      term: "Socialisation",
      definition:
        "Process by which individuals learn norms and values of their society.",
    },
    {
      term: "Primary socialisation",
      definition: "Early learning of basic norms — family.",
    },
    {
      term: "Secondary socialisation",
      definition: "Further learning — school, peers, media.",
    },
    { term: "Norms", definition: "Rules of behaviour expected in a society." },
    { term: "Values", definition: "Beliefs about what is right and wrong." },
    {
      term: "Agents of socialisation",
      definition:
        "Institutions that transmit culture — family, school, peers, media.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u1-socialisation",
      title: "What is Socialisation",
      skill: "Define socialisation and distinguish primary from secondary.",
      lesson: {
        sections: [
          {
            heading: "Socialisation defined",
            body: "**Socialisation**: lifelong process of learning the norms, values, beliefs and behaviours of a society. Without it, humans couldn't function in groups — no language, no shared expectations.\n\n**Nature vs nurture**: socialisation shows culture shapes behaviour — not just biology. **Lifelong**: continues through adulthood — new jobs, roles, societies.",
          },
          {
            heading: "Primary vs secondary",
            body: "**Primary socialisation**: first stage — family teaches language, basic values, identity. Happens early childhood — most influential. **Secondary socialisation**: school, peers, media, workplace — teaches specialist roles, wider society norms.\n\n**Evaluation**: primary dominates early identity; secondary extends and sometimes conflicts with primary.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Child learns language and table manners from parents. Stage?",
          solution: "Primary socialisation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-soc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic inheritance" },
              { id: "b", text: "Learning norms and values of society" },
              { id: "c", text: "Physical growth" },
              { id: "d", text: "Biological development" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Socialisation",
                statement: "Learn culture.",
              },
            ],
            steps: [
              {
                reasoning: "Socialisation = learn norms/values.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Learn norms/values",
            commonErrors: ["Biology confused."],
          },
        },
        {
          id: "eias-soc-u1-soc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two agents of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agents",
                statement: "Family, school, peers, media.",
              },
            ],
            steps: [
              {
                reasoning: "Family — primary agent, early identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "School — secondary agent, wider society norms.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Peers/media — peer groups, mass media influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Family, school, peers, media.",
            commonErrors: ["Only one.", "Wrong agent."],
          },
        },
        {
          id: "eias-soc-u1-soc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between primary and secondary socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Primary vs secondary",
                statement: "Early vs later.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary: family, early childhood, basic identity/language.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Secondary: school/peers/media, later, specialist roles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Primary most influential for identity; secondary extends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both lifelong but primary dominates early years.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Primary=family/early, secondary=school/later.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eias-soc-u1-soc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A child raised in isolation until age 7 shows no language.",
          parts: [
            {
              label: "a",
              prompt: "What does this show about socialisation?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest implications for development.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isolation effects",
                statement: "Critical period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Socialisation essential — humans can't develop alone.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Language requires social interaction — not innate alone.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Missed critical period — language may never fully develop.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shows family is irreplaceable primary agent.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) essential+language (b) critical period",
            commonErrors: ["Innate only.", "No implication."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u1-agents",
      title: "Family and School as Agents",
      skill: "Explain how family and school socialise individuals.",
      lesson: {
        sections: [
          {
            heading: "Family socialisation",
            body: "**Functionalist view** (Parsons): family primary agent — teaches norms, prepares for society. **Marxist view**: family reproduces class inequality — working-class children learn submission, middle-class learn achievement.\n\n**Gender roles**: family transmits gender expectations — pink for girls, blue for boys. **Class**: family background shapes values, aspirations — cultural capital.",
          },
          {
            heading: "School socialisation",
            body: "**Hidden curriculum**: school teaches obedience, punctuality, hierarchy — not just subjects. **Streaming**: labels students — self-fulfilling prophecy. **Peer groups**: school provides peer socialisation — subcultures form.\n\n**Evaluation**: school reinforces existing inequalities — but can also challenge them (comprehensive vs selective).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "School teaches obedience and punctuality beyond subjects. Concept?",
          solution: "Hidden curriculum.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-fam-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the hidden curriculum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extracurricular" },
              { id: "b", text: "Unwritten rules — obedience, punctuality" },
              { id: "c", text: "Official subjects" },
              { id: "d", text: "Homework" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement: "Implicit norms.",
              },
            ],
            steps: [
              {
                reasoning: "Hidden curriculum = unwritten rules.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unwritten rules",
            commonErrors: ["Official confused."],
          },
        },
        {
          id: "eias-soc-u1-fam-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways family socialises children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family socialisation",
                statement: "Gender + class.",
              },
            ],
            steps: [
              {
                reasoning: "Gender roles — expectations for boys/girls.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Class values — working vs middle class aspirations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Language/culture — transmit norms, beliefs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Gender, class, language/culture.",
            commonErrors: ["Only one.", "School confused."],
          },
        },
        {
          id: "eias-soc-u1-fam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how school acts as an agent of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "School socialisation",
                statement: "Hidden curriculum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hidden curriculum — obedience, punctuality, hierarchy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Peer groups — subcultures, social learning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Streaming — labels, self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prepares for work — discipline, teamwork.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Hidden curriculum+peers+streaming.",
            commonErrors: ["Only subjects.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u1-fam-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Working-class child gets lower grades than middle-class peer.",
          parts: [
            {
              label: "a",
              prompt: "Explain using family socialisation.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain using school socialisation.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class inequality",
                statement: "Family + school.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Family transmits different values — working-class may devalue education.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Less cultural capital — fewer educational resources/expectations.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Hidden curriculum favours middle-class norms — obedience, delayed gratification.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Teacher expectations — working-class labelled less able.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) values+capital (b) hidden curriculum+expectations",
            commonErrors: ["Ability only.", "No theory."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u1-identity",
      title: "Identity and Socialisation",
      skill: "Explain how socialisation shapes identity.",
      lesson: {
        sections: [
          {
            heading: "Identity formation",
            body: "**Identity**: sense of self — who we are. Shaped by socialisation — family tells us who we are, school labels us, peers reinforce. **Looking-glass self** (Cooley): we see ourselves as others see us.\n\n**Social identity**: group memberships — class, gender, ethnicity, nationality. **Personal identity**: individual traits, choices.",
          },
          {
            heading: "Identity in modern society",
            body: "**Choice biography** (Giddens): modern identity more chosen — career, lifestyle, relationships. **Reflexive**: we construct identity through choices. **Fragmented**: multiple identities — work, family, online.\n\n**Evaluation**: socialisation still powerful — but modern society offers more identity choices than traditional.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Person sees themselves as others see them. Concept?",
          solution: "Looking-glass self.",
        },
      },
      questions: [
        {
          id: "eias-soc-u1-id-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the looking-glass self?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-image from others' views" },
              { id: "b", text: "Social class" },
              { id: "c", text: "Personality test" },
              { id: "d", text: "Mirror reflection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Looking-glass self",
                statement: "Others' view → self.",
              },
            ],
            steps: [
              {
                reasoning: "Looking-glass = self from others.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Others' view",
            commonErrors: ["Mirror confused."],
          },
        },
        {
          id: "eias-soc-u1-id-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity types",
                statement: "Social + personal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social identity — group memberships (class, gender, ethnicity).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Personal identity — individual traits, choices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both shaped by socialisation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Social + personal identity.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-soc-u1-id-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how socialisation shapes identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity formation",
                statement: "Agents shape self.",
              },
            ],
            steps: [
              {
                reasoning: "Family — tells us who we are, values, roles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "School — labels, streaming, peer groups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Looking-glass self — internalise others' views.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identity is ongoing — shaped throughout life.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Agents + looking-glass → identity.",
            commonErrors: ["Innate only.", "No agents."],
          },
        },
        {
          id: "eias-soc-u1-id-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Teenager adopts different style/values from parents.",
          parts: [
            {
              label: "a",
              prompt: "Explain using peer socialisation.",
              marks: 4,
            },
            { label: "b", prompt: "Explain identity construction.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer influence",
                statement: "Identity + belonging.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Peer pressure — conform to group norms.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Belonging — adopt style to fit in.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Identity construction — experimenting with who we are.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Refined over time — choose what feels right.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) peer pressure+belonging (b) experimenting",
            commonErrors: ["Rebellion only.", "No theory."],
          },
        },
      ],
    },
  ],
};
