import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "bio9-u8-lesson-8-3",
  code: "8-3",
  title: "Biotechnology Applications",
  goal: "I CAN describe DNA technology tools (PCR, gel electrophoresis, cloning, CRISPR) and their applications.",
  standards: [
    "HS-LS1-1",
    "HS-LS3-1",
    "HS-LS3-2",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "PCR",
      definition: "Polymerase chain reaction — amplifies DNA exponentially.",
    },
    {
      term: "Gel electrophoresis",
      definition: "Separates DNA fragments by size using electric field.",
    },
    {
      term: "Restriction enzyme",
      definition: "Enzyme that cuts DNA at specific sequences.",
    },
    {
      term: "Plasmid",
      definition: "Small circular DNA in bacteria used as cloning vector.",
    },
    {
      term: "Recombinant DNA",
      definition: "DNA combining genes from different sources.",
    },
    {
      term: "CRISPR-Cas9",
      definition: "Gene editing system using guide RNA to target DNA.",
    },
    {
      term: "Gel electrophoresis",
      definition: "Technique separating molecules by size/charge.",
    },
    {
      term: "DNA fingerprinting",
      definition: "Using variable DNA regions to identify individuals.",
    },
  ],
  concepts: [
    {
      id: "bio9-u8-pcr-gel",
      title: "PCR and gel electrophoresis",
      skill: "Explain PCR amplification and gel electrophoresis separation.",
      lesson: {
        sections: [
          {
            heading: "PCR",
            body: "**PCR** (polymerase chain reaction) amplifies DNA exponentially:\n\n1. **Denaturation**: heat separates DNA strands (~95°C).\n2. **Annealing**: primers bind to target sequences (~50-65°C).\n3. **Extension**: DNA polymerase synthesizes new strands (~72°C).\n\nEach cycle doubles DNA — 30 cycles → ~1 billion copies.",
          },
          {
            heading: "Gel electrophoresis",
            body: "**Gel electrophoresis** separates DNA by size:\n\n- DNA loaded into agarose gel wells.\n- Electric field applied — DNA (negative) moves toward positive electrode.\n- Smaller fragments move faster/farther.\n- Stained with ethidium bromide or SYBR → visible bands.",
          },
        ],
        keyFormulas: [
          {
            name: "PCR",
            statement:
              "Denaturation → annealing → extension; exponential amplification.",
          },
          { name: "PCR yield", statement: "$2^n$ copies after n cycles." },
          {
            name: "Gel electrophoresis",
            statement: "Smaller fragments travel farther.",
          },
        ],
        workedExample: {
          problem:
            "How many DNA copies after 10 PCR cycles starting with 1 molecule?",
          solution: "$2^{10} = 1,024$ copies.",
        },
      },
      questions: [
        {
          id: "bio9-u8-pcr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PCR stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein chain reaction" },
              { id: "b", text: "Polymerase chain reaction" },
              { id: "c", text: "Polymerase copying RNA" },
              { id: "d", text: "Precise cell replication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PCR",
                statement: "Polymerase chain reaction — amplifies DNA.",
              },
            ],
            steps: [
              {
                reasoning: "PCR = polymerase chain reaction.",
                evidence: "PCR",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Polymerase chain reaction.",
            commonErrors: ["Choosing (a): it's DNA, not protein."],
          },
        },
        {
          id: "bio9-u8-pcr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the three steps of PCR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "PCR steps",
                statement: "Denaturation → annealing → extension.",
              },
            ],
            steps: [
              {
                reasoning: "Denaturation: heat separates strands.",
                evidence: "denaturation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Annealing: primers bind to target.",
                evidence: "annealing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Extension: polymerase synthesizes new strands.",
                evidence: "extension",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Denaturation → annealing → extension.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "bio9-u8-pcr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how gel electrophoresis separates DNA fragments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gel electrophoresis",
                statement:
                  "Electric field moves DNA; smaller fragments travel farther.",
              },
            ],
            steps: [
              {
                reasoning: "DNA is negatively charged.",
                evidence: "negative",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Electric field drives DNA toward positive electrode.",
                evidence: "field",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gel acts as sieve — smaller fragments move faster.",
                evidence: "sieve",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Result: bands at different positions = different sizes.",
                evidence: "bands",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Electric field + gel sieve → smaller fragments travel farther.",
            commonErrors: ["Not mentioning size-based separation."],
          },
        },
        {
          id: "bio9-u8-pcr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A forensic scientist has a DNA sample and needs to amplify a specific gene.",
          parts: [
            { label: "a", prompt: "What technique?", marks: 1 },
            { label: "b", prompt: "What are the steps?", marks: 3 },
            {
              label: "c",
              prompt: "How many copies after 25 cycles?",
              marks: 2,
            },
            { label: "d", prompt: "Why is this useful?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "PCR application",
                statement: "Amplifies tiny DNA samples for analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "PCR (polymerase chain reaction).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Denaturation → annealing → extension (repeated).",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "$2^{25} ≈ 33$ million copies.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Amplifies tiny samples for sequencing, forensics, diagnostics.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) PCR (b) 3 steps repeated (c) ~33 million (d) Amplify tiny samples.",
            commonErrors: ["Wrong cycle count calculation."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-cloning",
      title: "Cloning and Genetic Engineering",
      skill:
        "Describe recombinant DNA technology, cloning vectors, and applications.",
      lesson: {
        sections: [
          {
            heading: "Recombinant DNA",
            body: "**Recombinant DNA** combines genes from different sources:\n\n1. **Restriction enzymes** cut DNA at specific sequences.\n2. **Vector** (plasmid, virus) carries the gene.\n3. **Ligase** joins insert into vector.\n4. **Transformation**: vector introduced into host cell.\n5. **Selection**: identify cells with recombinant DNA.",
          },
          {
            heading: "Applications",
            body: "- **Insulin production**: bacteria engineered to produce human insulin.\n- **Golden rice**: plants with beta-carotene gene.\n- **GMO crops**: pest resistance, herbicide tolerance.\n- **Gene therapy**: treating genetic disorders.",
          },
        ],
        keyFormulas: [
          {
            name: "Recombinant DNA",
            statement: "Restriction enzyme + vector + ligase → cloned gene.",
          },
          { name: "Vector", statement: "Plasmid or virus carrying insert." },
          { name: "Applications", statement: "Insulin, GMOs, gene therapy." },
        ],
        workedExample: {
          problem: "How is human insulin produced by bacteria?",
          solution:
            "Human insulin gene inserted into bacterial plasmid → bacteria produce insulin.",
        },
      },
      questions: [
        {
          id: "bio9-u8-clone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is recombinant DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identical DNA copies" },
              { id: "b", text: "DNA combining genes from different sources" },
              { id: "c", text: "RNA synthesis" },
              { id: "d", text: "Protein engineering" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recombinant DNA",
                statement: "DNA from different sources combined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recombinant DNA = genes from different organisms joined.",
                evidence: "recombinant",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** DNA combining genes from different sources.",
            commonErrors: ["Choosing (a): that's cloning."],
          },
        },
        {
          id: "bio9-u8-clone-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the steps of recombinant DNA technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cloning steps",
                statement: "Cut → insert → ligate → transform → select.",
              },
            ],
            steps: [
              {
                reasoning: "Restriction enzymes cut DNA at specific sites.",
                evidence: "cut",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Insert gene into vector; ligase joins.",
                evidence: "insert+ligate",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Transform host; select for recombinant cells.",
                evidence: "transform+select",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Cut → insert → ligate → transform → select.",
            commonErrors: ["Missing a step."],
          },
        },
        {
          id: "bio9-u8-clone-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how bacteria produce human insulin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Insulin production",
                statement:
                  "Human insulin gene in bacterial plasmid → bacterial production.",
              },
            ],
            steps: [
              {
                reasoning: "Human insulin gene identified and isolated.",
                evidence: "isolate",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gene inserted into bacterial plasmid vector.",
                evidence: "plasmid",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Bacteria transformed with recombinant plasmid.",
                evidence: "transform",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Bacteria produce human insulin → purified for medical use.",
                evidence: "produce",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Human insulin gene → bacterial plasmid → bacteria produce insulin.",
            commonErrors: ["Not explaining the vector."],
          },
        },
        {
          id: "bio9-u8-clone-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare traditional breeding and genetic engineering for crop improvement.",
          parts: [
            { label: "a", prompt: "Traditional breeding?", marks: 2 },
            { label: "b", prompt: "Genetic engineering?", marks: 2 },
            { label: "c", prompt: "Advantages of GE?", marks: 2 },
            { label: "d", prompt: "Concerns with GE?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Crop improvement",
                statement:
                  "Traditional = selective breeding; GE = direct gene insertion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cross-pollination + selection over generations.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Direct insertion of specific genes (e.g., Bt toxin).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Precise, fast, can use genes from any organism.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Environmental impact, gene flow, labeling, long-term safety.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Selective breeding (b) Direct gene insertion (c) Precise/fast (d) Environmental concerns.",
            commonErrors: ["Not noting precision advantage."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-crispr",
      title: "CRISPR-Cas9 Gene Editing",
      skill:
        "Explain CRISPR-Cas9 mechanism and its applications and ethical considerations.",
      lesson: {
        sections: [
          {
            heading: "CRISPR mechanism",
            body: "**CRISPR-Cas9** is a gene editing system:\n\n1. **Guide RNA** designed to match target DNA sequence.\n2. **Cas9 protein** binds guide RNA → complex.\n3. Complex scans DNA for matching sequence.\n4. Cas9 cuts DNA at target site.\n5. Cell's repair machinery fixes break → gene knocked out or edited.",
          },
          {
            heading: "Applications and ethics",
            body: "- **Research**: gene function studies, disease models.\n- **Medicine**: potential cures for genetic diseases (sickle cell, cystic fibrosis).\n- **Agriculture**: crop improvement.\n- **Ethical concerns**: germline editing, designer babies, off-target effects, accessibility.",
          },
        ],
        keyFormulas: [
          {
            name: "CRISPR mechanism",
            statement: "Guide RNA + Cas9 → targeted DNA cut.",
          },
          {
            name: "Applications",
            statement: "Research, medicine, agriculture.",
          },
          {
            name: "Ethics",
            statement: "Germline editing, designer babies, off-target effects.",
          },
        ],
        workedExample: {
          problem:
            "How does CRISPR differ from traditional genetic engineering?",
          solution:
            "CRISPR precisely targets specific DNA sequences; traditional methods are less precise.",
        },
      },
      questions: [
        {
          id: "bio9-u8-crispr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does CRISPR stand for?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Clustered regularly interspaced short palindromic repeats",
              },
              { id: "b", text: "Cutting RNA sequences precisely" },
              { id: "c", text: "Creating recombinant protein sequences" },
              { id: "d", text: "Crisp RNA silencing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CRISPR",
                statement:
                  "Clustered regularly interspaced short palindromic repeats.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CRISPR = clustered regularly interspaced short palindromic repeats.",
                evidence: "CRISPR",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Clustered regularly interspaced short palindromic repeats.",
            commonErrors: ["Not knowing the acronym."],
          },
        },
        {
          id: "bio9-u8-crispr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the CRISPR-Cas9 mechanism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "CRISPR mechanism",
                statement: "Guide RNA + Cas9 → targeted DNA cut.",
              },
            ],
            steps: [
              {
                reasoning: "Guide RNA designed to match target DNA.",
                evidence: "guide RNA",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cas9 binds guide RNA → complex scans for target.",
                evidence: "Cas9",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cas9 cuts DNA → repair machinery edits gene.",
                evidence: "cut+repair",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Guide RNA + Cas9 → targeted DNA cut → gene editing.",
            commonErrors: ["Not mentioning guide RNA."],
          },
        },
        {
          id: "bio9-u8-crispr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What are the ethical concerns with CRISPR gene editing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "CRISPR ethics",
                statement:
                  "Germline editing, designer babies, off-target effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Germline editing affects future generations — irreversible.",
                evidence: "germline",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Designer babies — selecting traits raises equity concerns.",
                evidence: "designer",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Off-target effects — Cas9 may cut wrong sites.",
                evidence: "off-target",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Accessibility — who gets access to treatment?",
                evidence: "access",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Germline editing, designer babies, off-target effects, access.",
            commonErrors: ["Not mentioning germline concerns."],
          },
        },
        {
          id: "bio9-u8-crispr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate CRISPR's potential to cure genetic diseases.",
          parts: [
            {
              label: "a",
              prompt: "Which diseases could CRISPR treat?",
              marks: 2,
            },
            { label: "b", prompt: "What is the main advantage?", marks: 2 },
            { label: "c", prompt: "What challenges remain?", marks: 2 },
            {
              label: "d",
              prompt: "What is germline vs somatic editing?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "CRISPR medicine",
                statement:
                  "Precise gene editing potential but technical/ethical challenges.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sickle cell, cystic fibrosis, muscular dystrophy, certain cancers.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Precise targeting; can correct mutations at source.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Delivery method, off-target effects, long-term safety.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Somatic = body cells (treatable); germline = reproductive cells (heritable, controversial).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Genetic diseases (b) Precision (c) Delivery/safety (d) Somatic vs germline.",
            commonErrors: ["Not distinguishing somatic/germline."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-dna-fingerprinting",
      title: "DNA Fingerprinting",
      skill:
        "Explain how DNA fingerprinting works and its forensic applications.",
      lesson: {
        sections: [
          {
            heading: "DNA fingerprinting",
            body: "**DNA fingerprinting** identifies individuals using variable DNA regions:\n\n- **STRs** (short tandem repeats): repeated sequences varying between individuals.\n- PCR amplifies STR regions.\n- Gel electrophoresis separates fragments by size.\n- Pattern of bands = unique fingerprint (except identical twins).",
          },
          {
            heading: "Applications",
            body: "- **Forensics**: match crime scene DNA to suspects.\n- **Paternity testing**: confirm biological relationships.\n- **Missing persons**: identify remains.\n- **Conservation**: track animal populations.",
          },
        ],
        keyFormulas: [
          {
            name: "STRs",
            statement: "Short tandem repeats — variable between individuals.",
          },
          {
            name: "Fingerprinting",
            statement: "PCR + gel → unique band pattern.",
          },
          {
            name: "Applications",
            statement: "Forensics, paternity, missing persons.",
          },
        ],
        workedExample: {
          problem: "Why can't DNA fingerprinting distinguish identical twins?",
          solution: "Identical twins have identical DNA → same fingerprint.",
        },
      },
      questions: [
        {
          id: "bio9-u8-dnafp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are STRs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single nucleotide polymorphisms" },
              { id: "b", text: "Short tandem repeats" },
              { id: "c", text: "Silent mutations" },
              { id: "d", text: "Chromosomal abnormalities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STRs",
                statement: "Short tandem repeats — variable DNA regions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "STRs = short tandem repeats used in DNA fingerprinting.",
                evidence: "STRs",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Short tandem repeats.",
            commonErrors: ["Choosing (a): SNPs are different."],
          },
        },
        {
          id: "bio9-u8-dnafp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps of DNA fingerprinting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "DNA fingerprinting",
                statement: "PCR → gel electrophoresis → band pattern.",
              },
            ],
            steps: [
              {
                reasoning: "Extract DNA from sample.",
                evidence: "extract",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "PCR amplifies STR regions.",
                evidence: "PCR",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Gel electrophoresis separates fragments → unique band pattern.",
                evidence: "gel",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Extract → PCR → gel → band pattern.",
            commonErrors: ["Missing PCR step."],
          },
        },
        {
          id: "bio9-u8-dnafp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is DNA fingerprinting used in forensics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Forensic DNA",
                statement: "Unique STR patterns identify individuals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "STR patterns are unique to each individual (except identical twins).",
                evidence: "unique",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Crime scene DNA can be matched to suspect's DNA.",
                evidence: "match",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can exclude suspects or link them to crime.",
                evidence: "exclude/link",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Requires sufficient DNA quantity — PCR helps amplify tiny samples.",
                evidence: "quantity",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Unique STR patterns identify individuals → match crime scene DNA.",
            commonErrors: ["Not explaining uniqueness."],
          },
        },
        {
          id: "bio9-u8-dnafp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A paternity test uses DNA fingerprinting.",
          parts: [
            { label: "a", prompt: "What is being compared?", marks: 2 },
            { label: "b", prompt: "What result confirms paternity?", marks: 3 },
            { label: "c", prompt: "What result excludes paternity?", marks: 2 },
            { label: "d", prompt: "Why can't it be 100% certain?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Paternity testing",
                statement: "Child's STRs must match both parents.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Child's and alleged father's STR patterns.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Child shares ~50% STRs with father; all child's alleles traceable to parents.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Child has alleles not present in father → excluded.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Statistical probability, not absolute certainty.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Child+father STRs (b) Matching alleles (c) Non-matching alleles (d) Statistical.",
            commonErrors: ["Not explaining allele matching."],
          },
        },
      ],
    },
  ],
};
