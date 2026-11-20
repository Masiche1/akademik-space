module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson811",
    lesson: {
      id: "ciealsoc-u1-lesson-1-1", code: "1-1",
      title: "Research Methods: Quantitative and Qualitative",
      goal: "I CAN distinguish quantitative and qualitative research methods.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 1: research methods"],
      vocabulary: [
        { term: "Quantitative", definition: "Numerical data, statistics, large samples." },
        { term: "Qualitative", definition: "Words, meanings, small samples." },
        { term: "Positivism", definition: "View that social facts can be measured objectively." },
        { term: "Interpretivism", definition: "View that social reality is constructed through meanings." },
        { term: "Reliability", definition: "Consistency of results." },
        { term: "Validity", definition: "Accuracy — measuring what you intend." },
      ],
      concept: {
        id: "ciealsoc-u1-s1-methods", title: "Research methods",
        skill: "Distinguish quantitative and qualitative approaches.",
        sections: [
          { heading: "Quantitative methods", body: "Questionnaires, structured interviews, experiments. Large samples, statistical analysis. Positivist — seeks objective laws. Reliable but may miss meanings." },
          { heading: "Qualitative methods", body: "Unstructured interviews, participant observation, case studies. Small samples, detailed meanings. Interpretivist — seeks verstehen. Valid but hard to generalise." },
          { heading: "Triangulation", body: "Combining methods for richer picture. Mixed methods increasingly common." },
        ],
        keyFormulas: [
          { name: "Quantitative", statement: "numbers, large samples" },
          { name: "Qualitative", statement: "meanings, small samples" },
          { name: "Positivism", statement: "objective facts" },
        ],
        workedExample: {
          problem: "Which method best studies why people join protests?",
          solution: "Qualitative — unstructured interviews reveal meanings and motivations that questionnaires miss.",
        },
        questions: [
          {
            id: "ciealsoc-u1-meth-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is quantitative research?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Numerical data, statistics, large samples" }, { id: "b", text: "Words and meanings" }, { id: "c", text: "Observation only" }, { id: "d", text: "Case studies" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Quantitative", statement: "Numerical data." }],
              steps: [{ reasoning: "Quantitative = numbers, large samples.", marks: 1, markCode: "M" }],
              finalAnswer: "Numerical data",
            },
          },
          {
            id: "ciealsoc-u1-meth-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between positivism and interpretivism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Positivism/interpretivism", statement: "Facts vs meanings." }],
              steps: [
                { reasoning: "Positivism: social facts measurable objectively.", marks: 1, markCode: "M" },
                { reasoning: "Interpretivism: reality constructed through meanings.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Facts vs meanings",
            },
          },
          {
            id: "ciealsoc-u1-meth-q3", difficulty: "core", totalMarks: 3,
            stem: "What are strengths and weaknesses of qualitative methods?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Qualitative", statement: "Evaluation." }],
              steps: [
                { reasoning: "Strengths: depth, meanings, validity.", marks: 1, markCode: "M" },
                { reasoning: "Weaknesses: small samples, hard to generalise, researcher bias.", marks: 1, markCode: "M" },
                { reasoning: "Good for exploring meanings, poor for testing hypotheses.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Depth vs generalisation",
            },
          },
          {
            id: "ciealsoc-u1-meth-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define quantitative, qualitative, positivism, interpretivism, reliability, validity. (b) What is quantitative? (c) What is qualitative? (d) What is positivism? (e) What is interpretivism? (f) What is reliability? (g) What is validity? (h) Evaluate quantitative vs qualitative methods.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Methods", statement: "Comparison." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Numbers, large samples.", marks: 1, markCode: "M" },
                { reasoning: "(c) Words, small samples.", marks: 1, markCode: "M" },
                { reasoning: "(d) Objective facts.", marks: 1, markCode: "M" },
                { reasoning: "(e) Constructed meanings.", marks: 1, markCode: "M" },
                { reasoning: "(f) Consistency.", marks: 1, markCode: "M" },
                { reasoning: "(g) Accuracy.", marks: 1, markCode: "M" },
                { reasoning: "(h) Quantitative reliable but misses meanings; qualitative deep but narrow.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Methods comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u1-meth-notes", title: "Methods — notes",
      summary: "Quantitative=numbers; qualitative=meanings. Positivism vs interpretivism.",
      sections: [
        { heading: "Key idea", body: "Different paradigms produce different kinds of knowledge." },
        { heading: "Triangulation", body: "Combining methods gives richer picture." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson812",
    lesson: {
      id: "ciealsoc-u1-lesson-1-2", code: "1-2",
      title: "Research Methods: Surveys, Observation and Interviews",
      goal: "I CAN describe surveys, observation and interview methods.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 1: research methods"],
      vocabulary: [
        { term: "Questionnaire", definition: "Written set of questions for self-completion." },
        { term: "Structured interview", definition: "Interview with fixed questions." },
        { term: "Unstructured interview", definition: "Flexible interview exploring meanings." },
        { term: "Participant observation", definition: "Researcher joins group being studied." },
        { term: "Non-participant observation", definition: "Researcher observes without joining." },
        { term: "Sampling", definition: "Selecting participants from population." },
      ],
      concept: {
        id: "ciealsoc-u1-s2-tech", title: "Data collection",
        skill: "Describe surveys, observation and interviews.",
        sections: [
          { heading: "Surveys", body: "Questionnaires: large samples, cheap, but low response rates, can't probe. Structured interviews: consistent, but interviewer bias. Self-completion vs face-to-face." },
          { heading: "Observation", body: "Participant: deep insight, but goes native, ethical issues. Non-participant: less bias, but less insight. Covert vs overt — ethical concerns." },
          { heading: "Sampling", body: "Random: everyone equal chance, representative. Stratified: proportionate subgroups. Quota: match population characteristics. Snowball: referrals for hidden populations." },
        ],
        keyFormulas: [
          { name: "Questionnaire", statement: "large sample" },
          { name: "Observation", statement: "behaviour in context" },
          { name: "Sampling", statement: "representative selection" },
        ],
        workedExample: {
          problem: "Choose method to study gang behaviour.",
          solution: "Participant observation — gangs hard to access; researcher must join to understand meanings.",
        },
        questions: [
          {
            id: "ciealsoc-u1-tech-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is participant observation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Researcher joins group being studied" }, { id: "b", text: "Self-completed questionnaire" }, { id: "c", text: "A statistical test" }, { id: "d", text: "A type of interview" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PO", statement: "Join group." }],
              steps: [{ reasoning: "PO = researcher joins group.", marks: 1, markCode: "M" }],
              finalAnswer: "Join group",
            },
          },
          {
            id: "ciealsoc-u1-tech-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between structured and unstructured interviews?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Interview types", statement: "Fixed vs flexible." }],
              steps: [
                { reasoning: "Structured: fixed questions, consistent.", marks: 1, markCode: "M" },
                { reasoning: "Unstructured: flexible, explores meanings.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Fixed vs flexible",
            },
          },
          {
            id: "ciealsoc-u1-tech-q3", difficulty: "core", totalMarks: 3,
            stem: "What sampling methods are used in sociology?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Sampling", statement: "Types." }],
              steps: [
                { reasoning: "Random, stratified, quota, snowball.", marks: 1, markCode: "M" },
                { reasoning: "Each has strengths/weaknesses for representativeness.", marks: 1, markCode: "M" },
                { reasoning: "Snowball useful for hidden populations.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Random, stratified, quota, snowball",
            },
          },
          {
            id: "ciealsoc-u1-tech-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define questionnaire, structured interview, unstructured interview, participant observation, sampling, stratified sampling. (b) What is questionnaire? (c) What is participant observation? (d) What is structured interview? (e) What is unstructured interview? (f) What is sampling? (g) What are sampling types? (h) Evaluate questionnaires vs interviews.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data collection", statement: "Methods." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Written questions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Join group.", marks: 1, markCode: "M" },
                { reasoning: "(d) Fixed questions.", marks: 1, markCode: "M" },
                { reasoning: "(e) Flexible questions.", marks: 1, markCode: "M" },
                { reasoning: "(f) Select participants.", marks: 1, markCode: "M" },
                { reasoning: "(g) Random, stratified, quota, snowball.", marks: 1, markCode: "M" },
                { reasoning: "(h) Questionnaires cheap but shallow; interviews deep but costly.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data collection comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u1-tech-notes", title: "Data collection — notes",
      summary: "Questionnaires=large samples; observation=behaviour; interviews=meanings.",
      sections: [
        { heading: "Key idea", body: "Each method has trade-offs between breadth and depth." },
        { heading: "Sampling", body: "Random/stratified/quota/snowball — affects representativeness." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson813",
    lesson: {
      id: "ciealsoc-u1-lesson-1-3", code: "1-3",
      title: "Research Methods: Ethics and Analysis",
      goal: "I CAN explain ethical issues and data analysis in research.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 1: research methods"],
      vocabulary: [
        { term: "Informed consent", definition: "Participants agree knowing research details." },
        { term: "Deception", definition: "Misleading participants about research." },
        { term: "Confidentiality", definition: "Protecting participant identity." },
        { term: "Harm", definition: "Physical, psychological or emotional damage." },
        { term: "Content analysis", definition: "Analysing media/text quantitatively." },
        { term: "Thematic analysis", definition: "Identifying patterns in qualitative data." },
      ],
      concept: {
        id: "ciealsoc-u1-s3-ethics", title: "Ethics and analysis",
        skill: "Explain ethical issues and data analysis.",
        sections: [
          { heading: "Ethical issues", body: "Informed consent vs covert research. Deception vs realistic data. Confidentiality vs transparency. Harm vs valuable findings. British Sociological Association guidelines." },
          { heading: "Data analysis", body: "Quantitative: descriptive stats (mean, mode), inferential (chi-square, correlation). Qualitative: coding, thematic analysis, grounded theory." },
          { heading: "Practical issues", body: "Access, funding, time, researcher safety, personal characteristics affecting research." },
        ],
        keyFormulas: [
          { name: "Consent", statement: "participant agreement" },
          { name: "Deception", statement: "misleading research" },
          { name: "Thematic", statement: "qualitative patterns" },
        ],
        workedExample: {
          problem: "Is covert observation of a cult ethical?",
          solution: "Violates consent but may reveal important truths. Justified only if no alternative and harm minimised.",
        },
        questions: [
          {
            id: "ciealsoc-u1-eth-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is informed consent?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Participants agree knowing research details" }, { id: "b", text: "Misleading participants" }, { id: "c", text: "Hiding identity" }, { id: "d", text: "A sampling method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Consent", statement: "Participant agreement." }],
              steps: [{ reasoning: "Consent = informed agreement.", marks: 1, markCode: "M" }],
              finalAnswer: "Informed agreement",
            },
          },
          {
            id: "ciealsoc-u1-eth-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the main ethical issues in sociological research?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Ethics", statement: "Issues." }],
              steps: [
                { reasoning: "Consent, deception, confidentiality, harm.", marks: 1, markCode: "M" },
                { reasoning: "Often conflicting — trade-offs needed.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Consent, deception, confidentiality, harm",
            },
          },
          {
            id: "ciealsoc-u1-eth-q3", difficulty: "core", totalMarks: 3,
            stem: "What is thematic analysis?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Thematic", statement: "Qualitative analysis." }],
              steps: [
                { reasoning: "Identifying patterns/themes in qualitative data.", marks: 1, markCode: "M" },
                { reasoning: "Coding and categorising responses.", marks: 1, markCode: "M" },
                { reasoning: "Builds theory from data (grounded theory).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Pattern identification",
            },
          },
          {
            id: "ciealsoc-u1-eth-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define informed consent, deception, confidentiality, harm, content analysis, thematic analysis. (b) What is informed consent? (c) What is deception? (d) What is confidentiality? (e) What is harm? (f) What is content analysis? (g) What is thematic analysis? (h) Evaluate ethical issues in covert research.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Ethics", statement: "Issues." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Informed agreement.", marks: 1, markCode: "M" },
                { reasoning: "(c) Misleading.", marks: 1, markCode: "M" },
                { reasoning: "(d) Identity protection.", marks: 1, markCode: "M" },
                { reasoning: "(e) Damage caused.", marks: 1, markCode: "M" },
                { reasoning: "(f) Media/text analysis.", marks: 1, markCode: "M" },
                { reasoning: "(g) Pattern identification.", marks: 1, markCode: "M" },
                { reasoning: "(h) Covert violates consent but reveals truths.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Ethics analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u1-eth-notes", title: "Ethics — notes",
      summary: "Consent, deception, confidentiality, harm — often conflicting.",
      sections: [
        { heading: "Key idea", body: "Ethical guidelines balance participant protection with research value." },
        { heading: "Analysis", body: "Quantitative=statistics; qualitative=thematic analysis." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson814",
    lesson: {
      id: "ciealsoc-u1-lesson-1-4", code: "1-4",
      title: "Families and Households: Types and Functions",
      goal: "I CAN describe family types and their functions.",
      standards: ["Cambridge A Level Sociology 9696", "Paper 2: families"],
      vocabulary: [
        { term: "Nuclear family", definition: "Parents and dependent children." },
        { term: "Extended family", definition: "Three+ generations or relatives together." },
        { term: "Single-parent family", definition: "One parent with children." },
        { term: "Reconstituted family", definition: "Blended family after remarriage." },
        { term: "Cereal packet family", definition: "Idealised nuclear family image." },
        { term: "Family functions", definition: "Socialisation, economic support, emotional support." },
      ],
      concept: {
        id: "ciealsoc-u1-s4-families", title: "Family types",
        skill: "Describe family structures and functions.",
        sections: [
          { heading: "Family types", body: "Nuclear: parents + children. Extended: grandparents etc. Single-parent: ~25% UK families. Reconstituted: blended. Same-sex, cohabiting, lone person households increasing." },
          { heading: "Functions", body: "Functionalists (Murdock): reproduction, socialisation, economic support, sexual regulation. Marxists: reproduce labour power for capitalism. Feminists: patriarchy reproduction." },
          { heading: "Changes", body: "Decline of nuclear family myth — diversity increasing. Cohabitation, divorce, same-sex families normalising." },
        ],
        keyFormulas: [
          { name: "Nuclear", statement: "parents + children" },
          { name: "Extended", statement: "3+ generations" },
          { name: "Functions", statement: "socialisation, support" },
        ],
        workedExample: {
          problem: "Has the nuclear family declined?",
          solution: "Partly — diverse family forms now common, but nuclear family remains idealised norm.",
        },
        questions: [
          {
            id: "ciealsoc-u1-fam-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a nuclear family?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Parents and dependent children" }, { id: "b", text: "Three generations" }, { id: "c", text: "One parent" }, { id: "d", text: "Blended family" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Nuclear", statement: "Parents + children." }],
              steps: [{ reasoning: "Nuclear = parents + children.", marks: 1, markCode: "M" }],
              finalAnswer: "Parents + children",
            },
          },
          {
            id: "ciealsoc-u1-fam-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What functions does the family perform?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Family functions", statement: "Roles." }],
              steps: [
                { reasoning: "Socialisation, economic support, emotional support.", marks: 1, markCode: "M" },
                { reasoning: "Murdock: reproduction, sexual regulation.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Socialisation, support, reproduction",
            },
          },
          {
            id: "ciealsoc-u1-fam-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a reconstituted family?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reconstituted", statement: "Blended." }],
              steps: [
                { reasoning: "Blended family after remarriage.", marks: 1, markCode: "M" },
                { reasoning: "Step-parents, step-siblings.", marks: 1, markCode: "M" },
                { reasoning: "Increasing due to divorce rates.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Blended family",
            },
          },
          {
            id: "ciealsoc-u1-fam-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define nuclear, extended, single-parent, reconstituted, cereal packet, family functions. (b) What is nuclear? (c) What is extended? (d) What is single-parent? (e) What is reconstituted? (f) What are family functions? (g) How has family changed? (h) Evaluate whether nuclear family is declining.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Families", statement: "Types/functions." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Parents + children.", marks: 1, markCode: "M" },
                { reasoning: "(c) 3+ generations.", marks: 1, markCode: "M" },
                { reasoning: "(d) One parent.", marks: 1, markCode: "M" },
                { reasoning: "(e) Blended.", marks: 1, markCode: "M" },
                { reasoning: "(f) Socialisation, support.", marks: 1, markCode: "M" },
                { reasoning: "(g) Diversity increasing.", marks: 1, markCode: "M" },
                { reasoning: "(h) Diversity increased but nuclear remains idealised.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Family types analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealsoc-u1-fam-notes", title: "Family types — notes",
      summary: "Nuclear→diversity. Functions: socialisation, support, reproduction.",
      sections: [
        { heading: "Key idea", body: "Family forms diversifying but nuclear remains cultural ideal." },
        { heading: "Theory", body: "Functionalists see functions; Marxists see labour reproduction; feminists see patriarchy." },
      ],
    },
  },
];
