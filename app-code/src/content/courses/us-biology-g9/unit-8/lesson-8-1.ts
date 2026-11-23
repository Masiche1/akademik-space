import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "bio9-u8-lesson-8-1",
  code: "8-1",
  title: "DNA Replication",
  goal: "I CAN describe semi-conservative DNA replication, the roles of enzymes, and how errors create mutations.",
  standards: [
    "HS-LS1-2",
    "HS-LS3-1",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Semi-conservative replication",
      definition:
        "Each new DNA molecule has one original strand and one new strand.",
    },
    {
      term: "Helicase",
      definition:
        "Enzyme that unwinds the double helix by breaking hydrogen bonds.",
    },
    {
      term: "DNA polymerase",
      definition: "Enzyme that adds nucleotides to build new DNA strands.",
    },
    {
      term: "Primase",
      definition:
        "Enzyme that synthesizes short RNA primers for DNA polymerase to extend.",
    },
    {
      term: "Leading/lagging strand",
      definition:
        "Leading synthesized continuously; lagging in Okazaki fragments.",
    },
    {
      term: "Okazaki fragment",
      definition: "Short DNA segment on lagging strand.",
    },
    {
      term: "DNA ligase",
      definition: "Enzyme that joins Okazaki fragments together.",
    },
    { term: "Mutation", definition: "Permanent change in DNA sequence." },
  ],
  concepts: [
    {
      id: "bio9-u8-replication-mechanism",
      title: "Replication mechanism",
      skill: "Describe the steps of semi-conservative DNA replication.",
      lesson: {
        sections: [
          {
            heading: "Replication steps",
            body: "DNA replication is **semi-conservative** — each daughter molecule keeps one parental strand:\n\n1. **Helicase** unwinds the double helix, breaking H-bonds.\n2. **Primase** lays down RNA primers.\n3. **DNA polymerase** adds nucleotides 5'→3' on both strands.\n4. Leading strand synthesized continuously; lagging strand in **Okazaki fragments**.\n5. **DNA ligase** joins fragments; **proofreading** by polymerase fixes errors.",
          },
          {
            heading: "Why semi-conservative",
            body: "Each strand serves as a template for a complementary strand. This ensures genetic fidelity — errors are rare (~1 per billion bases) due to proofreading and repair mechanisms.",
          },
        ],
        keyFormulas: [
          {
            name: "Semi-conservative",
            statement: "Each daughter DNA = 1 old + 1 new strand.",
          },
          {
            name: "5'→3' synthesis",
            statement:
              "DNA polymerase only adds nucleotides in 5'→3' direction.",
          },
          {
            name: "Okazaki fragments",
            statement: "Lagging strand synthesized discontinuously.",
          },
        ],
        workedExample: {
          problem:
            "If original DNA has 20% adenine, what % adenine in each daughter strand?",
          solution:
            "20% — semi-conservative replication preserves base composition.",
        },
      },
      questions: [
        {
          id: "bio9-u8-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does semi-conservative replication mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA is destroyed and rebuilt" },
              { id: "b", text: "Each daughter has one old and one new strand" },
              { id: "c", text: "Only half the DNA is copied" },
              { id: "d", text: "RNA is copied instead" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-conservative",
                statement: "Each daughter molecule keeps one parental strand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each new DNA has one original template strand + one newly synthesized strand.",
                evidence: "one+one",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Each daughter has one old and one new strand.",
            commonErrors: ["Choosing (c): all DNA is copied."],
          },
        },
        {
          id: "bio9-u8-rep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the enzymes involved in DNA replication and their roles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Replication enzymes",
                statement:
                  "Helicase unwinds; primase primes; polymerase elongates; ligase joins.",
              },
            ],
            steps: [
              {
                reasoning: "Helicase unwinds double helix.",
                evidence: "helicase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Primase adds RNA primers; DNA polymerase extends.",
                evidence: "primase+polymerase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "DNA ligase joins Okazaki fragments.",
                evidence: "ligase",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Helicase, primase, DNA polymerase, ligase.",
            commonErrors: ["Missing ligase or primase."],
          },
        },
        {
          id: "bio9-u8-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the lagging strand synthesized in fragments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lagging strand",
                statement:
                  "Antiparallel strands require discontinuous synthesis.",
              },
            ],
            steps: [
              {
                reasoning: "DNA strands are antiparallel (5'→3' and 3'→5').",
                evidence: "antiparallel",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Polymerase only synthesizes 5'→3'.",
                evidence: "5'→3'",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Lagging strand template runs 3'→5', requiring fragments synthesized away from fork.",
                evidence: "fragments",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ligase later joins fragments into continuous strand.",
                evidence: "ligase",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Antiparallel strands + 5'→3' synthesis → discontinuous Okazaki fragments.",
            commonErrors: ["Not explaining directionality."],
          },
        },
        {
          id: "bio9-u8-rep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the Meselson-Stahl experiment proving semi-conservative replication.",
          parts: [
            { label: "a", prompt: "What did they do?", marks: 2 },
            { label: "b", prompt: "What did they observe?", marks: 3 },
            { label: "c", prompt: "What did it prove?", marks: 2 },
            { label: "d", prompt: "Why was this significant?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Meselson-Stahl",
                statement:
                  "¹⁵N/¹⁴N density gradient proved semi-conservative replication.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Grew bacteria in ¹⁵N (heavy) then shifted to ¹⁴N (light).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "After 1 generation: all hybrid (intermediate density). After 2: half hybrid, half light.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Proved each daughter has one old + one new strand.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Confirmed semi-conservative model vs conservative/dispersive.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) ¹⁵N→¹⁴N shift (b) Hybrid then half/half (c) Semi-conservative (d) Confirmed model.",
            commonErrors: ["Not describing density gradient."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-mutations",
      title: "Mutations and DNA Repair",
      skill:
        "Classify mutations, describe DNA repair mechanisms, and explain mutation effects.",
      lesson: {
        sections: [
          {
            heading: "Mutation types",
            body: "- **Point mutations**: substitution, insertion, deletion of single bases.\n- **Frameshift**: insertion/deletion not divisible by 3 → shifts reading frame.\n- **Chromosomal**: large-scale changes (deletions, duplications, inversions, translocations).\n- **Silent/missense/nonsense**: depending on effect on amino acid.",
          },
          {
            heading: "DNA repair",
            body: "Cells repair DNA damage via:\n- **Proofreading**: polymerase checks and fixes errors during replication.\n- **Mismatch repair**: fixes errors after replication.\n- **Nucleotide excision repair**: removes damaged segments (e.g., UV damage).\n- **Base excision repair**: fixes single-base damage.\n\nUnrepaired mutations can cause cancer or genetic disorders.",
          },
        ],
        keyFormulas: [
          {
            name: "Point mutations",
            statement: "Substitution, insertion, deletion.",
          },
          {
            name: "Frameshift",
            statement: "Indel not divisible by 3 shifts codon reading.",
          },
          {
            name: "Repair",
            statement: "Proofreading + mismatch + excision repair.",
          },
        ],
        workedExample: {
          problem: "A deletion of 3 bases occurs. Is it a frameshift?",
          solution:
            "No — 3 bases = 1 codon; reading frame preserved (though one amino acid lost).",
        },
      },
      questions: [
        {
          id: "bio9-u8-mut-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a frameshift mutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Substitution of one base" },
              { id: "b", text: "Insertion/deletion shifting codon reading" },
              { id: "c", text: "Large chromosome deletion" },
              { id: "d", text: "Silent mutation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frameshift",
                statement: "Indel not divisible by 3 shifts reading frame.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frameshift = insertion/deletion changing codon grouping downstream.",
                evidence: "frame shift",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Insertion/deletion shifting codon reading.",
            commonErrors: ["Choosing (a): that's a point mutation."],
          },
        },
        {
          id: "bio9-u8-mut-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between silent, missense and nonsense mutations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutation effects",
                statement:
                  "Silent = no change; missense = different AA; nonsense = stop codon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Silent: codon change but same amino acid (degenerate code).",
                evidence: "silent",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Missense: different amino acid inserted.",
                evidence: "missense",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nonsense: creates stop codon → truncated protein.",
                evidence: "nonsense",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Silent = same AA; missense = different AA; nonsense = stop.",
            commonErrors: ["Confusing missense and nonsense."],
          },
        },
        {
          id: "bio9-u8-mut-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA repair mechanisms prevent cancer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "DNA repair",
                statement:
                  "Repair mechanisms fix mutations before they cause cancer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proofreading during replication catches most errors.",
                evidence: "proofreading",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mismatch repair fixes remaining replication errors.",
                evidence: "mismatch",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Excision repair removes UV/chemical damage.",
                evidence: "excision",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Failure → mutations accumulate → cancer.",
                evidence: "cancer",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Repair mechanisms fix DNA damage; failure → cancer.",
            commonErrors: ["Not linking repair to cancer prevention."],
          },
        },
        {
          id: "bio9-u8-mut-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A gene has sequence ATG-CCT-GAA-TAA. A substitution changes CCT to CAT.",
          parts: [
            { label: "a", prompt: "Original amino acids?", marks: 2 },
            { label: "b", prompt: "New amino acids?", marks: 2 },
            { label: "c", prompt: "Mutation type?", marks: 2 },
            { label: "d", prompt: "Likely effect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Missense mutation",
                statement: "CCT→CAT changes Pro→His.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "ATG=Met, CCT=Pro, GAA=Glu, TAA=Stop.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "ATG=Met, CAT=His, GAA=Glu, TAA=Stop.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Missense mutation (Pro→His).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "May alter protein function depending on position/importance.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Met-Pro-Glu-Stop (b) Met-His-Glu-Stop (c) Missense (d) Possible function change.",
            commonErrors: ["Not identifying missense."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-gene-expression",
      title: "Gene Expression",
      skill: "Describe transcription, translation, and gene regulation.",
      lesson: {
        sections: [
          {
            heading: "Transcription",
            body: "**Transcription**: DNA → mRNA (in nucleus).\n- RNA polymerase binds promoter.\n- mRNA synthesized complementary to template strand.\n- mRNA processed (5' cap, poly-A tail, splicing introns).\n- mRNA exported to cytoplasm.",
          },
          {
            heading: "Translation",
            body: "**Translation**: mRNA → protein (at ribosome).\n- mRNA codons read by tRNA anticodons.\n- Amino acids joined by peptide bonds.\n- Starts at start codon (AUG = Met), ends at stop codon.",
          },
        ],
        keyFormulas: [
          { name: "Transcription", statement: "DNA → mRNA in nucleus." },
          { name: "Translation", statement: "mRNA → protein at ribosome." },
          { name: "Codon", statement: "3 mRNA bases code for 1 amino acid." },
          {
            name: "Start/stop",
            statement: "AUG = start (Met); UAA/UAG/UGA = stop.",
          },
        ],
        workedExample: {
          problem: "A mRNA sequence is AUG-GGU-CCA. What amino acids?",
          solution: "Met-Gly-Pro.",
        },
      },
      questions: [
        {
          id: "bio9-u8-expression-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does transcription occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytoplasm" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Ribosome" },
              { id: "d", text: "Mitochondria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transcription location",
                statement: "DNA → mRNA in nucleus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transcription occurs in nucleus where DNA is located.",
                evidence: "nucleus",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Nucleus.",
            commonErrors: ["Choosing (a): translation occurs in cytoplasm."],
          },
        },
        {
          id: "bio9-u8-expression-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Translate the mRNA sequence: AUG-GGU-UAC.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Codon table",
                statement: "AUG=Met, GGU=Gly, UAC=Tyr.",
              },
            ],
            steps: [
              {
                reasoning: "AUG = methionine (start).",
                evidence: "AUG",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "GGU = glycine.",
                evidence: "GGU",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "UAC = tyrosine.",
                evidence: "UAC",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Met-Gly-Tyr.",
            commonErrors: ["Using DNA bases instead of RNA."],
          },
        },
        {
          id: "bio9-u8-expression-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a single gene can produce different proteins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Alternative splicing",
                statement: "Exons can be rearranged → multiple proteins.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pre-mRNA contains exons (coding) and introns (non-coding).",
                evidence: "exons/introns",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Introns removed by splicing.",
                evidence: "splicing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Different exon combinations → different mRNA → different proteins.",
                evidence: "alternatives",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "One gene → multiple protein isoforms.",
                evidence: "isoforms",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Alternative splicing produces multiple proteins from one gene.",
            commonErrors: ["Saying one gene = one protein always."],
          },
        },
        {
          id: "bio9-u8-expression-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the flow of genetic information from DNA to protein.",
          parts: [
            { label: "a", prompt: "Transcription steps?", marks: 2 },
            { label: "b", prompt: "mRNA processing?", marks: 2 },
            { label: "c", prompt: "Translation steps?", marks: 2 },
            {
              label: "d",
              prompt: "Why is the genetic code universal?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Central dogma",
                statement: "DNA → RNA → protein.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "RNA polymerase transcribes DNA → mRNA.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "5' cap, poly-A tail, intron removal (splicing).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Ribosome reads codons; tRNA delivers amino acids.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Same codon-amino acid mapping across organisms → shared ancestry.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) RNA pol transcribes (b) Cap/tail/splice (c) Ribosome+tRNA (d) Shared ancestry.",
            commonErrors: ["Skipping mRNA processing."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-gene-regulation",
      title: "Gene Regulation",
      skill:
        "Explain how cells control gene expression through operons and epigenetics.",
      lesson: {
        sections: [
          {
            heading: "Prokaryotic regulation",
            body: "**Operons**: groups of genes controlled together by one promoter/operator.\n\n- **Lac operon**: lactose metabolism; repressed when lactose absent, induced when present.\n- **Trp operon**: tryptophan synthesis; repressed when tryptophan abundant.",
          },
          {
            heading: "Eukaryotic regulation",
            body: "Eukaryotic gene regulation is more complex:\n\n- **Transcription factors** bind enhancers/silencers.\n- **Epigenetic marks** (methylation, histone modification) control access.\n- **Alternative splicing** produces multiple proteins.\n- **Post-translational modification** regulates protein activity.",
          },
        ],
        keyFormulas: [
          {
            name: "Operon",
            statement: "Prokaryotic gene group controlled by one promoter.",
          },
          {
            name: "Lac operon",
            statement: "Induced by lactose; repressed without.",
          },
          {
            name: "Epigenetics",
            statement:
              "Chemical marks control gene access without changing DNA.",
          },
        ],
        workedExample: {
          problem: "Why is the lac operon off when lactose is absent?",
          solution:
            "Repressor protein binds operator → blocks RNA polymerase → no transcription.",
        },
      },
      questions: [
        {
          id: "bio9-u8-regulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an operon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single gene" },
              { id: "b", text: "Group of genes controlled together" },
              { id: "c", text: "Type of RNA" },
              { id: "d", text: "Protein complex" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operon",
                statement: "Gene cluster controlled by one promoter/operator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Operon = multiple genes transcribed together under one control region.",
                evidence: "cluster",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Group of genes controlled together.",
            commonErrors: ["Choosing (a): operon has multiple genes."],
          },
        },
        {
          id: "bio9-u8-regulation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the lac operon is regulated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lac operon",
                statement: "Repressed without lactose, induced with.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No lactose: repressor binds operator → no transcription.",
                evidence: "repressed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Lactose present: allolactose binds repressor → releases operator.",
                evidence: "induced",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "RNA polymerase transcribes lac genes → lactose metabolism.",
                evidence: "transcription",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Lactose absent → repressed; lactose present → induced.",
            commonErrors: ["Reversing the regulation."],
          },
        },
        {
          id: "bio9-u8-regulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does DNA methylation affect gene expression?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "DNA methylation",
                statement: "Methyl groups on cytosine typically silence genes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Methyl groups added to cytosine bases (CpG islands).",
                evidence: "CpG",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Methylated DNA → condensed chromatin → inaccessible.",
                evidence: "condensed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "RNA polymerase can't bind → gene silenced.",
                evidence: "silenced",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Important in development, X-inactivation, cancer.",
                evidence: "examples",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Methylation → condensed chromatin → gene silencing.",
            commonErrors: ["Saying methylation activates genes."],
          },
        },
        {
          id: "bio9-u8-regulation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare prokaryotic and eukaryotic gene regulation.",
          parts: [
            { label: "a", prompt: "Prokaryotic mechanism?", marks: 2 },
            { label: "b", prompt: "Eukaryotic mechanisms?", marks: 3 },
            { label: "c", prompt: "Key difference?", marks: 2 },
            {
              label: "d",
              prompt: "Why is eukaryotic regulation more complex?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gene regulation comparison",
                statement: "Operons vs complex multi-level control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Operons — groups of genes controlled by repressor/activator.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Transcription factors, enhancers, epigenetics, splicing, miRNA.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Prokaryotes: simple operons; eukaryotes: multi-level regulation.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Larger genomes, compartmentalization, development complexity.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Operons (b) TFs+epigenetics+splicing (c) Simple vs complex (d) Genome size + development.",
            commonErrors: ["Not listing eukaryotic mechanisms."],
          },
        },
      ],
    },
  ],
};
