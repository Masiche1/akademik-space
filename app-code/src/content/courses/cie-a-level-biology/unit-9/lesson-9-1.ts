import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cial-b-u9-lesson-9-1",
  code: "9-1",
  title: "Genetic Engineering",
  goal: "I CAN describe the steps of genetic engineering and its applications.",
  standards: ["9700: Biotechnology — genetic engineering"],
  vocabulary: [
    {
      term: "Recombinant DNA",
      definition: "DNA formed by joining DNA from different sources.",
    },
    {
      term: "Restriction enzyme",
      definition: "Enzyme that cuts DNA at specific recognition sequences.",
    },
    { term: "Ligase", definition: "Enzyme that joins DNA fragments together." },
    {
      term: "Plasmid",
      definition: "Small circular DNA molecule in bacteria used as a vector.",
    },
    {
      term: "Vector",
      definition: "Carrier that transfers foreign DNA into a host cell.",
    },
    {
      term: "Selectable marker",
      definition: "Gene allowing identification of transformed cells.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u9-recombination",
      title: "Making recombinant DNA",
      skill: "Describe the steps of genetic engineering.",
      lesson: {
        sections: [
          {
            heading: "The process",
            body: "1. Isolate the gene of interest (e.g. human insulin gene) using restriction enzymes — they cut DNA at specific sequences, often producing sticky ends. 2. Cut the vector (plasmid) with the same enzyme so ends match. 3. Ligase joins gene + vector → recombinant plasmid. 4. Transform bacteria (heat shock or electroporation). 5. Select transformed cells using antibiotic resistance markers.",
          },
          {
            heading: "Why it works",
            body: "Sticky ends are complementary — base pairing lets foreign DNA insert into the plasmid. Bacteria replicate plasmids rapidly, producing many copies of the gene (cloning).",
          },
          {
            heading: "Applications",
            body: "Insulin and other proteins produced in bacteria. Genetically modified crops with pest resistance or herbicide tolerance. Gene therapy — inserting functional genes to treat genetic disorders.",
          },
        ],
        keyFormulas: [
          {
            name: "Genetic engineering",
            statement: "Restriction cut → ligase join → transform → select.",
          },
        ],
        workedExample: {
          problem:
            "Why do we use the same restriction enzyme on gene and plasmid?",
          solution:
            "It produces matching sticky ends so the gene can base-pair and ligate into the plasmid.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-ge-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a restriction enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enzyme that cuts DNA at specific sequences" },
              { id: "b", text: "Protein that cuts proteins" },
              { id: "c", text: "Enzyme that copies DNA" },
              { id: "d", text: "Enzyme that joins DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Restriction enzyme",
                statement: "Cuts DNA at specific sites.",
              },
            ],
            steps: [
              { reasoning: "Restriction = cuts DNA.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Enzyme that cuts DNA at specific sequences",
            commonErrors: ["Confusing with ligase."],
          },
        },
        {
          id: "cial-b-u9-ge-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of ligase in genetic engineering?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ligase",
                statement: "Joins DNA fragments.",
              },
            ],
            steps: [
              {
                reasoning: "Forms phosphodiester bonds.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Joins gene to vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ligase joins the foreign gene to the vector DNA.",
            commonErrors: ["Saying it cuts DNA."],
          },
        },
        {
          id: "cial-b-u9-ge-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline the steps of producing recombinant insulin in bacteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic engineering steps",
                statement: "Cut-join-transform-select.",
              },
            ],
            steps: [
              {
                reasoning: "Cut gene + plasmid with restriction enzyme.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ligase joins them.", marks: 1, markCode: "M" },
              { reasoning: "Transform bacteria.", marks: 1, markCode: "M" },
              {
                reasoning: "Select on antibiotic medium.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Restriction cut → ligase join → transform → antibiotic selection.",
            commonErrors: ["Missing selection step."],
          },
        },
        {
          id: "cial-b-u9-ge-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Genetic engineering.",
          parts: [
            { label: "a", prompt: "Define recombinant DNA.", marks: 1 },
            { label: "b", prompt: "Role of restriction enzymes?", marks: 2 },
            { label: "c", prompt: "Role of ligase?", marks: 1 },
            {
              label: "d",
              prompt: "Why same enzyme for gene and vector?",
              marks: 2,
            },
            {
              label: "e",
              prompt: "How are transformed cells selected?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic engineering",
                statement: "Definitions+enzymes+selection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "DNA from different sources joined.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Cut at specific sequences.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Produce sticky ends.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Joins fragments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Matching sticky ends.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Allows ligation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Antibiotic resistance marker.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Only transformed survive.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Plasmid also has ori for replication.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) recombinant (b) restriction (c) ligase (d) matching ends (e) selection",
          },
        },
        {
          id: "cial-b-u9-ge-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme produces sticky ends when it cuts DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA ligase" },
              { id: "b", text: "DNA polymerase" },
              { id: "c", text: "Amylase" },
              { id: "d", text: "Restriction enzyme" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Restriction enzyme",
                statement: "Cuts at specific sites leaving sticky ends.",
              },
            ],
            steps: [
              { reasoning: "Restriction enzymes leave sticky ends.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Restriction enzyme",
            commonErrors: ["Confusing sticky ends with ligation."],
          },
        },
        {
          id: "cial-b-u9-ge-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A linear DNA molecule is cut by a restriction enzyme at 3 different sites. How many DNA fragments are produced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Restriction fragments",
                statement: "n cuts in linear DNA give n+1 fragments.",
              },
            ],
            steps: [
              { reasoning: "3 cuts give 3+1 = 4 fragments.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "4 fragments",
            commonErrors: ["Answering 3 instead of 4."],
          },
        },
        {
          id: "cial-b-u9-ge-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why sticky ends are important in making recombinant DNA.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sticky ends",
                statement: "Complementary ends allow annealing and ligation.",
              },
            ],
            steps: [
              { reasoning: "Ends are complementary.", marks: 1, markCode: "M" },
              { reasoning: "Allows base pairing and ligation of foreign DNA.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sticky ends base-pair with matching ends so the foreign gene can be ligated into the vector.",
            commonErrors: ["Saying sticky ends cut the DNA."],
          },
        },
        {
          id: "cial-b-u9-ge-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bacterial culture used for insulin production starts with 1 cell and doubles every 20 minutes. Assuming no deaths, how many cells are present after 2 hours?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 64 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exponential growth",
                statement: "Each generation doubles the population.",
              },
            ],
            steps: [
              { reasoning: "2 hours = 6 doublings, $2^{6} = 64$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "64 cells",
            commonErrors: ["Counting 120 minutes as doublings."],
          },
        },
        {
          id: "cial-b-u9-ge-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of the origin of replication (ori) on a plasmid vector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confers antibiotic resistance" },
              { id: "b", text: "It cuts the plasmid DNA" },
              { id: "c", text: "It allows the plasmid to replicate inside the host cell" },
              { id: "d", text: "It joins the foreign gene to the plasmid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Origin of replication",
                statement: "Site where DNA replication begins.",
              },
            ],
            steps: [
              { reasoning: "ori lets the plasmid replicate in the host.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** It allows the plasmid to replicate inside the host cell",
            commonErrors: ["Confusing ori with selectable marker."],
          },
        },
        {
          id: "cial-b-u9-ge-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the purpose of a selectable marker gene on a plasmid vector.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Selectable marker",
                statement: "Identifies cells that took up the plasmid.",
              },
            ],
            steps: [
              { reasoning: "Marker e.g. antibiotic resistance.", marks: 1, markCode: "M" },
              { reasoning: "Only transformed cells survive selection.", marks: 1, markCode: "M" },
              { reasoning: "Untransformed cells die on the selective medium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A selectable marker lets transformed cells be identified and separated from cells that did not take up the plasmid.",
            commonErrors: ["Thinking the marker produces the desired protein."],
          },
        },
        {
          id: "cial-b-u9-ge-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In genetic engineering, 'transforming' bacteria means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Killing non-resistant bacteria" },
              { id: "b", text: "Introducing foreign DNA into the bacterial cells" },
              { id: "c", text: "Changing bacteria into a different species" },
              { id: "d", text: "Copying a plasmid using PCR" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transformation",
                statement: "Uptake of foreign DNA by a host cell.",
              },
            ],
            steps: [
              { reasoning: "Transformation = DNA uptake.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Introducing foreign DNA into the bacterial cells",
            commonErrors: ["Confusing transformation with selection."],
          },
        },
        {
          id: "cial-b-u9-ge-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about a recombinant plasmid is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is identical to the host chromosome" },
              { id: "b", text: "It cannot replicate in bacteria" },
              { id: "c", text: "It contains DNA joined from more than one source" },
              { id: "d", text: "It only exists in plant cells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recombinant plasmid",
                statement: "Plasmid carrying foreign DNA.",
              },
            ],
            steps: [
              { reasoning: "Recombinant = DNA from different sources joined.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** It contains DNA joined from more than one source",
            commonErrors: ["Thinking recombinant means identical to host."],
          },
        },
        {
          id: "cial-b-u9-ge-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss why bacteria are commonly used as hosts for producing human proteins such as insulin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bacterial hosts",
                statement: "Easy to culture, transform and scale up.",
              },
            ],
            steps: [
              { reasoning: "Bacteria divide rapidly.", marks: 1, markCode: "M" },
              { reasoning: "Easy to transform with plasmids.", marks: 1, markCode: "M" },
              { reasoning: "Cheap to culture in fermenters.", marks: 1, markCode: "A" },
              { reasoning: "Produce large amounts of protein.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bacteria are easy to transform, divide rapidly and can be grown cheaply at large scale, so they produce large quantities of human protein.",
            commonErrors: ["Claiming bacteria cannot make human proteins."],
          },
        },
        {
          id: "cial-b-u9-ge-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Assuming equal frequencies of the four bases, what is the probability that a particular 4-base-pair sequence occurs at a given position in a DNA molecule?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0039, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Base probability",
                statement: "Each base has probability $\\frac{1}{4}$ at a position.",
              },
            ],
            steps: [
              { reasoning: "$\\left(\\frac{1}{4}\\right)^{4} = \\frac{1}{256} \\approx 0.0039$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "0.0039 (about 1 in 256)",
            commonErrors: ["Using $\\frac{1}{4}$ instead of $\\left(\\frac{1}{4}\\right)^{4}$."],
          },
        },
        {
          id: "cial-b-u9-ge-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the production of human insulin in bacteria illustrates the main steps of genetic engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insulin production",
                statement: "Cut-join-transform-select applied to a real product.",
              },
            ],
            steps: [
              { reasoning: "Insulin gene cut with restriction enzyme.", marks: 1, markCode: "M" },
              { reasoning: "Ligase joins it to a plasmid vector.", marks: 1, markCode: "M" },
              { reasoning: "Bacteria transformed and selected on antibiotic medium.", marks: 1, markCode: "M" },
              { reasoning: "Selected bacteria produce human insulin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The insulin gene is cut out, ligated into a plasmid, bacteria are transformed and selected, then the bacteria secrete human insulin.",
            commonErrors: ["Omitting the selection step."],
          },
        },
        {
          id: "cial-b-u9-ge-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Making recombinant DNA — extended response.",
          parts: [
            { label: "a", prompt: "Define the term vector.", marks: 1 },
            { label: "b", prompt: "Why is the same restriction enzyme used on gene and plasmid?", marks: 3 },
            { label: "c", prompt: "Outline two ways bacteria can be transformed.", marks: 2 },
            { label: "d", prompt: "Evaluate the use of bacteria to produce human proteins.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extended GE",
                statement: "Vector+sticky ends+transformation+evaluation.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Carrier for foreign DNA.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Same enzyme gives matching sticky ends.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ends are complementary.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Allows ligation of gene into plasmid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat shock.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Electroporation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Advantages: cheap/rapid/large scale.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Limitations: post-translational modification.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Balanced judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) vector (b) matching ends (c) heat shock/electroporation (d) balanced evaluation",
          },
        },
      ],
    },
    {
      id: "cial-b-u9-pcr-cloning",
      title: "PCR and Cloning",
      skill: "Describe PCR steps and DNA cloning applications.",
      lesson: {
        sections: [
          {
            heading: "PCR steps",
            body: "Polymerase chain reaction amplifies DNA exponentially. Three steps repeated ~30 times: 1. Denaturation (~95°C) — DNA strands separate. 2. Annealing (~55°C) — primers bind to complementary sequences. 3. Extension (~72°C) — Taq polymerase synthesises new strands. Taq polymerase is heat-stable (from Thermus aquaticus).",
          },
          {
            heading: "Applications of PCR",
            body: "Amplifies tiny DNA samples — forensic DNA, disease diagnosis, archaeology. Used before gel electrophoresis to visualise DNA fragments.",
          },
          {
            heading: "Gel electrophoresis",
            body: "Separates DNA fragments by size — smaller fragments travel further through agarose gel in electric field. Used for DNA profiling, checking PCR products, restriction analysis.",
          },
        ],
        keyFormulas: [
          {
            name: "PCR",
            statement:
              "Denature→anneal→extend ×30; Taq polymerase; gel separates by size.",
          },
        ],
        workedExample: {
          problem: "Why is Taq polymerase used in PCR?",
          solution:
            "It is heat-stable — survives the 95°C denaturation step that would destroy normal polymerase.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PCR stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polymerase copying RNA" },
              { id: "b", text: "Polymerase chain reaction" },
              { id: "c", text: "Rapid cell reproduction" },
              { id: "d", text: "Protein cloning reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PCR",
                statement: "Polymerase chain reaction.",
              },
            ],
            steps: [
              {
                reasoning: "PCR = polymerase chain reaction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Polymerase chain reaction",
            commonErrors: ["Misremembering acronym."],
          },
        },
        {
          id: "cial-b-u9-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three steps of a PCR cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PCR steps",
                statement: "Denaturation, annealing, extension.",
              },
            ],
            steps: [
              { reasoning: "Any two correct steps.", marks: 1, markCode: "M" },
              { reasoning: "All three named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Denaturation, annealing, extension.",
            commonErrors: ["Missing a step."],
          },
        },
        {
          id: "cial-b-u9-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Taq polymerase is used in PCR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Taq polymerase",
                statement: "Heat-stable enzyme.",
              },
            ],
            steps: [
              {
                reasoning: "Denaturation needs ~95°C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Normal polymerase would denature.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Taq survives high temp.", marks: 1, markCode: "A" },
              {
                reasoning: "No need to re-add enzyme.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Taq polymerase is heat-stable and survives the 95°C denaturation step.",
            commonErrors: ["Saying it's faster."],
          },
        },
        {
          id: "cial-b-u9-pc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "PCR and gel electrophoresis.",
          parts: [
            { label: "a", prompt: "Purpose of PCR?", marks: 1 },
            { label: "b", prompt: "Three steps?", marks: 3 },
            { label: "c", prompt: "Why Taq polymerase?", marks: 2 },
            {
              label: "d",
              prompt: "How does gel electrophoresis separate DNA?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCR/gel",
                statement: "Amplification+steps+enzyme+separation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Amplifies DNA.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Denaturation.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Annealing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Extension.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat-stable.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Survives 95°C.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Electric field moves DNA.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Smaller travels further.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Agarose gel matrix.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) amplify (b) steps (c) Taq (d) gel",
          },
        },
        {
          id: "cial-b-u9-pc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how many times is the three-step PCR cycle repeated during a standard PCR reaction?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PCR cycles",
                statement: "Cycle repeated ~30 times.",
              },
            ],
            steps: [
              { reasoning: "About 30 cycles are used.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "30 cycles",
            commonErrors: ["Confusing with the 3 steps per cycle."],
          },
        },
        {
          id: "cial-b-u9-pc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At which temperature does the annealing step of PCR take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About $55^{\\circ}\\mathrm{C}$" },
              { id: "b", text: "$72^{\\circ}\\mathrm{C}$" },
              { id: "c", text: "$95^{\\circ}\\mathrm{C}$" },
              { id: "d", text: "$20^{\\circ}\\mathrm{C}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Annealing",
                statement: "Primers bind at about 55°C.",
              },
            ],
            steps: [
              { reasoning: "Annealing is around 55°C.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** About $55^{\\circ}\\mathrm{C}$",
            commonErrors: ["Confusing annealing with denaturation."],
          },
        },
        {
          id: "cial-b-u9-pc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why primers are required in PCR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primers",
                statement: "Short complementary sequences that initiate synthesis.",
              },
            ],
            steps: [
              { reasoning: "Primers bind complementary template sequences.", marks: 1, markCode: "M" },
              { reasoning: "Provide a starting point (3' end) for Taq polymerase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primers anneal to the template and provide a 3' end so Taq polymerase can begin synthesising new DNA.",
            commonErrors: ["Saying primers are the template."],
          },
        },
        {
          id: "cial-b-u9-pc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A PCR reaction starts with 2 DNA molecules. Assuming 100% efficiency, how many DNA molecules are present after 4 complete cycles?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCR amplification",
                statement: "Number of molecules doubles each cycle: $N = N_0 \\times 2^{n}$.",
              },
            ],
            steps: [
              { reasoning: "$2 \\times 2^{4} = 2 \\times 16 = 32$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "32 molecules",
            commonErrors: ["Calculating $2^{4}$ but forgetting the starting 2 molecules."],
          },
        },
        {
          id: "cial-b-u9-pc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In gel electrophoresis of DNA, which fragment travels furthest from the well?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fragment with the most negative charge per unit length" },
              { id: "b", text: "The largest fragment" },
              { id: "c", text: "All fragments travel the same distance" },
              { id: "d", text: "The smallest fragment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gel electrophoresis",
                statement: "Smaller fragments migrate further through agarose.",
              },
            ],
            steps: [
              { reasoning: "Smaller fragments travel further.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** The smallest fragment",
            commonErrors: ["Thinking larger fragments travel further."],
          },
        },
        {
          id: "cial-b-u9-pc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why DNA fragments move through the agarose gel during electrophoresis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA electrophoresis",
                statement: "DNA is negatively charged and moves in an electric field.",
              },
            ],
            steps: [
              { reasoning: "DNA backbone is negatively charged (phosphate groups).", marks: 1, markCode: "M" },
              { reasoning: "Electric field exerts a force on the DNA.", marks: 1, markCode: "M" },
              { reasoning: "Agarose mesh slows larger fragments more than smaller ones.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The negatively charged DNA is pulled through the agarose gel by the electric field, with smaller fragments moving further.",
            commonErrors: ["Saying DNA is positively charged."],
          },
        },
        {
          id: "cial-b-u9-pc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "State the temperature used for each of the three steps of a PCR cycle.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 95, unit: "°C" },
              { label: "b", answer: 55, unit: "°C" },
              { label: "c", answer: 72, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PCR temperatures",
                statement: "Denaturation 95°C, annealing 55°C, extension 72°C.",
              },
            ],
            steps: [
              { reasoning: "Denaturation ~95°C.", marks: 1, markCode: "M" },
              { reasoning: "Annealing ~55°C.", marks: 1, markCode: "M" },
              { reasoning: "Extension ~72°C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Denaturation $95^{\\circ}\\mathrm{C}$, annealing $55^{\\circ}\\mathrm{C}$, extension $72^{\\circ}\\mathrm{C}$",
            commonErrors: ["Swapping annealing and extension temperatures."],
          },
        },
        {
          id: "cial-b-u9-pc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of primers in PCR?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cut the DNA at specific sites" },
              { id: "b", text: "They synthesise the new DNA strands" },
              { id: "c", text: "They bind to complementary template sequences and provide a starting point for DNA synthesis" },
              { id: "d", text: "They separate the two DNA strands" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primers",
                statement: "Complementary sequences that initiate synthesis.",
              },
            ],
            steps: [
              { reasoning: "Primers bind template and start synthesis.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** They bind to complementary template sequences and provide a starting point for DNA synthesis",
            commonErrors: ["Confusing primers with Taq polymerase."],
          },
        },
        {
          id: "cial-b-u9-pc-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe one application of PCR in medicine or forensics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCR applications",
                statement: "Amplifies tiny DNA samples for detection.",
              },
            ],
            steps: [
              { reasoning: "Named application e.g. disease diagnosis or forensics.", marks: 1, markCode: "M" },
              { reasoning: "Amplifies minute amounts of DNA.", marks: 1, markCode: "M" },
              { reasoning: "Allows detection/identification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PCR amplifies trace DNA so pathogens or forensic samples can be detected, e.g. diagnosing infection or identifying individuals.",
            commonErrors: ["Listing an application without explaining how PCR helps."],
          },
        },
        {
          id: "cial-b-u9-pc-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Starting from 1 DNA molecule, after how many complete PCR cycles will approximately 1024 DNA molecules be present?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCR doubling",
                statement: "Molecules double each cycle; $2^{10} = 1024$.",
              },
            ],
            steps: [
              { reasoning: "$2^{n} = 1024$ gives $n = 10$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "10 cycles",
            commonErrors: ["Answering 1024 instead of the number of cycles."],
          },
        },
        {
          id: "cial-b-u9-pc-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a correct use of PCR in a school or research laboratory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cutting DNA at specific sequences" },
              { id: "b", text: "Amplifying a small sample of DNA so it can be analysed" },
              { id: "c", text: "Separating proteins by size" },
              { id: "d", text: "Joining DNA fragments together" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PCR purpose",
                statement: "Amplifies DNA exponentially.",
              },
            ],
            steps: [
              { reasoning: "PCR amplifies DNA for analysis.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Amplifying a small sample of DNA so it can be analysed",
            commonErrors: ["Confusing PCR with restriction digestion or ligation."],
          },
        },
        {
          id: "cial-b-u9-pc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how PCR and gel electrophoresis are used together in DNA profiling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNA profiling",
                statement: "PCR amplifies variable regions; gel separates fragments.",
              },
            ],
            steps: [
              { reasoning: "PCR amplifies specific variable DNA regions.", marks: 1, markCode: "M" },
              { reasoning: "Gel electrophoresis separates fragments by size.", marks: 1, markCode: "M" },
              { reasoning: "Produces a characteristic band pattern.", marks: 1, markCode: "A" },
              { reasoning: "Pattern compared between samples for identification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PCR amplifies variable regions of DNA, gel electrophoresis separates the fragments, and the resulting band pattern can be compared between individuals.",
            commonErrors: ["Describing the techniques separately without linking them."],
          },
        },
      ],
    },
    {
      id: "cial-b-u9-applications",
      title: "Applications of Biotechnology",
      skill:
        "Describe fermentation, tissue culture, monoclonal antibodies and GM debate.",
      lesson: {
        sections: [
          {
            heading: "Fermentation",
            body: "Microorganisms produce useful products: insulin (GM bacteria), antibiotics (Penicillium), enzymes, biofuels. Conditions controlled — temperature, pH, oxygen, nutrients — in fermenters. Batch vs continuous culture.",
          },
          {
            heading: "Tissue culture and cloning",
            body: "Tissue culture: small plant tissue sample grows into whole plant (cloning) — rapid propagation of desirable varieties. Animal cloning: Dolly the sheep — somatic cell nuclear transfer (SCNT): nucleus from adult cell into enucleated egg.",
          },
          {
            heading: "Monoclonal antibodies and GM debate",
            body: "Hybridoma technique: fuse antibody-producing B cell with cancer cell → immortal antibody factory. Uses: pregnancy tests, disease diagnosis, targeted drug delivery. GM crops debate: benefits (yield, pest resistance) vs concerns (biodiversity, gene flow to wild relatives, corporate control).",
          },
        ],
        keyFormulas: [
          {
            name: "Biotech applications",
            statement:
              "Fermentation=products; Tissue culture=cloning; Hybridoma=mAbs; SCNT=animal cloning.",
          },
        ],
        workedExample: {
          problem: "How are monoclonal antibodies produced?",
          solution:
            "Fuse antibody-producing B cell with myeloma cell → hybridoma → unlimited identical antibodies.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is somatic cell nuclear transfer (SCNT)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fusion of two egg cells" },
              { id: "b", text: "PCR amplification" },
              { id: "c", text: "Nucleus from adult cell into enucleated egg" },
              { id: "d", text: "Growing tissue in culture" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SCNT",
                statement: "Adult nucleus + enucleated egg.",
              },
            ],
            steps: [
              {
                reasoning: "SCNT = nuclear transfer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Nucleus from adult cell into enucleated egg",
            commonErrors: ["Confusing with tissue culture."],
          },
        },
        {
          id: "cial-b-u9-ap-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How are monoclonal antibodies produced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybridoma",
                statement: "B cell + myeloma fusion.",
              },
            ],
            steps: [
              {
                reasoning: "Fuse B cell with cancer cell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Immortal antibody factory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hybridoma: fuse antibody B cell with myeloma cell for unlimited antibodies.",
            commonErrors: ["Saying they're made in plants."],
          },
        },
        {
          id: "cial-b-u9-ap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of GM crops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GM crops",
                statement: "Benefits vs concerns.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: yield/pest resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Concerns: gene flow/biodiversity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corporate control issue.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Benefits real but concerns about ecology and control need consideration.",
            commonErrors: ["One-sided argument."],
          },
        },
        {
          id: "cial-b-u9-ap-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Biotechnology applications.",
          parts: [
            { label: "a", prompt: "Fermentation uses?", marks: 2 },
            { label: "b", prompt: "Tissue culture?", marks: 2 },
            { label: "c", prompt: "SCNT?", marks: 2 },
            { label: "d", prompt: "Monoclonal antibodies?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biotech",
                statement: "Fermentation+tissue+SCNT+mAbs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Microbes make products.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Insulin/antibiotics/biofuels.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Tissue → whole plant.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rapid propagation/cloning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Adult nucleus + enucleated egg.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Produces clone (Dolly).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Hybridoma fusion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Immortal cell line.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Uses: tests/diagnosis/therapy.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) fermentation (b) tissue culture (c) SCNT (d) mAbs",
          },
        },
        {
          id: "cial-b-u9-ap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is tissue culture used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making monoclonal antibodies" },
              { id: "b", text: "Growing small pieces of plant tissue into whole plants" },
              { id: "c", text: "Amplifying DNA" },
              { id: "d", text: "Producing antibiotics in bacteria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tissue culture",
                statement: "Tissue explant grows into a whole plant.",
              },
            ],
            steps: [
              { reasoning: "Tissue culture clones plants.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Growing small pieces of plant tissue into whole plants",
            commonErrors: ["Confusing with fermentation."],
          },
        },
        {
          id: "cial-b-u9-ap-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different cell types are fused together to produce a hybridoma?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybridoma",
                statement: "Fusion of two cell types: B cell and myeloma cell.",
              },
            ],
            steps: [
              { reasoning: "B cell + myeloma cell = 2 cell types.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2 cell types",
            commonErrors: ["Counting individual cells instead of cell types."],
          },
        },
        {
          id: "cial-b-u9-ap-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why conditions inside a fermenter are carefully controlled.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fermenter conditions",
                statement: "Optimal growth and product yield require control.",
              },
            ],
            steps: [
              { reasoning: "Controls e.g. temperature, pH, oxygen, nutrients.", marks: 1, markCode: "M" },
              { reasoning: "Keeps microorganisms growing at optimum rate.", marks: 1, markCode: "M" },
              { reasoning: "Maximises product yield e.g. insulin or antibiotic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Control of temperature, pH, oxygen and nutrients keeps microbes at optimum growth and maximises product yield.",
            commonErrors: ["Listing conditions without explaining why they matter."],
          },
        },
        {
          id: "cial-b-u9-ap-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bacterial culture used in fermentation doubles every 20 minutes. Starting with 200 cells, how many cells are present after 1 hour?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1600 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exponential growth",
                statement: "Each doubling doubles the population.",
              },
            ],
            steps: [
              { reasoning: "1 hour = 3 doublings, $200 \\times 2^{3} = 200 \\times 8 = 1600$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1600 cells",
            commonErrors: ["Using 6 doublings (the number of minutes per doubling)."],
          },
        },
        {
          id: "cial-b-u9-ap-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an advantage of producing monoclonal antibodies using the hybridoma technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They work against every disease" },
              { id: "b", text: "They can be made without any cells" },
              { id: "c", text: "They are cheaper than chemical synthesis" },
              { id: "d", text: "Unlimited identical antibodies can be produced from an immortal cell line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hybridoma advantage",
                statement: "Immortal cell line produces identical antibodies.",
              },
            ],
            steps: [
              { reasoning: "Hybridomas are immortal and secrete one antibody type.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Unlimited identical antibodies can be produced from an immortal cell line",
            commonErrors: ["Claiming mAbs are made chemically."],
          },
        },
        {
          id: "cial-b-u9-ap-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how tissue culture is used to clone a desirable plant variety.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant cloning",
                statement: "Explants grown on agar with hormones produce identical plants.",
              },
            ],
            steps: [
              { reasoning: "Small tissue sample (explant) taken from parent.", marks: 1, markCode: "M" },
              { reasoning: "Grown on sterile agar with nutrients and hormones.", marks: 1, markCode: "M" },
              { reasoning: "Develops into whole plant genetically identical to parent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An explant is grown on agar with hormones and develops into a whole plant that is genetically identical to the parent variety.",
            commonErrors: ["Saying seeds are used instead of tissue."],
          },
        },
        {
          id: "cial-b-u9-ap-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a recognised use of monoclonal antibodies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cloning sheep by SCNT" },
              { id: "b", text: "Pregnancy tests and disease diagnosis" },
              { id: "c", text: "Amplifying DNA by PCR" },
              { id: "d", text: "Producing insulin in fermenters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "mAb uses",
                statement: "Tests, diagnosis, targeted drug delivery.",
              },
            ],
            steps: [
              { reasoning: "mAbs used in tests and diagnosis.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Pregnancy tests and disease diagnosis",
            commonErrors: ["Confusing mAbs with enzymes or antibodies in general."],
          },
        },
        {
          id: "cial-b-u9-ap-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare batch and continuous fermentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Fermentation types",
                statement: "Batch: one culture harvested; continuous: ongoing.",
              },
            ],
            steps: [
              { reasoning: "Batch: single culture run to completion.", marks: 1, markCode: "M" },
              { reasoning: "Continuous: fresh medium added, product harvested continuously.", marks: 1, markCode: "M" },
              { reasoning: "Batch simpler but has down-time between runs.", marks: 1, markCode: "A" },
              { reasoning: "Continuous gives higher output but risk of contamination.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Batch fermentation runs one culture then harvests; continuous fermentation keeps the culture going with ongoing harvest — higher output but greater contamination risk.",
            commonErrors: ["Describing only one type."],
          },
        },
        {
          id: "cial-b-u9-ap-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A fermenter is inoculated with 100 bacterial cells and the culture doubles every 20 minutes. How many cells are present after 1 hour?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 800 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exponential growth",
                statement: "Each generation doubles the population.",
              },
            ],
            steps: [
              { reasoning: "1 hour = 3 doublings, $100 \\times 2^{3} = 800$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "800 cells",
            commonErrors: ["Using the 20-minute interval as the number of doublings."],
          },
        },
        {
          id: "cial-b-u9-ap-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which product is commonly produced by GM bacteria in fermenters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glass" },
              { id: "b", text: "Petrol" },
              { id: "c", text: "Paper" },
              { id: "d", text: "Human insulin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fermentation products",
                statement: "Insulin, antibiotics, enzymes produced by microbes.",
              },
            ],
            steps: [
              { reasoning: "Insulin is produced by GM bacteria.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Human insulin",
            commonErrors: ["Choosing a non-biological product."],
          },
        },
        {
          id: "cial-b-u9-ap-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the benefits and concerns of using monoclonal antibodies in medicine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "mAb evaluation",
                statement: "Specific targeting vs cost/production issues.",
              },
            ],
            steps: [
              { reasoning: "Benefit: highly specific binding to targets.", marks: 1, markCode: "M" },
              { reasoning: "Uses: diagnosis, pregnancy tests, targeted therapy.", marks: 1, markCode: "M" },
              { reasoning: "Concern: expensive to produce.", marks: 1, markCode: "A" },
              { reasoning: "Concern: possible immune reactions / side effects.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "mAbs are specific and useful in diagnosis and therapy, but production is expensive and there may be immune or side-effect concerns.",
            commonErrors: ["Listing only benefits."],
          },
        },
        {
          id: "cial-b-u9-ap-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Discuss how biotechnology can help to meet the needs of a growing human population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biotech for food security",
                statement: "GM crops, fermentation and stem cells address food/health needs.",
              },
            ],
            steps: [
              { reasoning: "GM crops: higher yields and pest resistance.", marks: 1, markCode: "M" },
              { reasoning: "Fermentation: cheap production of food additives/medicine.", marks: 1, markCode: "M" },
              { reasoning: "Stem cells: regenerative medicine treats disease.", marks: 1, markCode: "A" },
              { reasoning: "Consideration of ethical/environmental concerns.", marks: 1, markCode: "A" },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Biotechnology can increase food production and improve health, but benefits must be weighed against ecological and ethical concerns.",
            commonErrors: ["One-sided discussion."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u9-revision",
      title: "Biotechnology — revision notes",
      summary:
        "Genetic engineering, PCR, cloning, fermentation, mAbs, GM debate.",
      sections: [
        {
          heading: "Key processes",
          body: "Genetic engineering: restriction→ligase→transform→select. PCR: denature→anneal→extend ×30. Gel: separates by size.",
        },
        {
          heading: "Applications",
          body: "Fermentation products; tissue culture cloning; SCNT animal cloning; hybridoma mAbs; GM crops pros/cons.",
        },
      ],
    },
  ],
};
