import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "biohl-u1-lesson-1-2",
  code: "1-2",
  title: "Transcription and Translation in Detail",
  goal: "I CAN explain the mechanisms of transcription — promoter recognition, RNA polymerase, capping, splicing and polyadenylation — and of translation — ribosome sites, tRNA anticodons, codon reading, termination and post-translational modification.",
  standards: ["Paper 1", "Paper 2", "AHL D.1", "AHL D.2"],
  vocabulary: [
    { term: "Promoter", definition: "A specific DNA sequence upstream of a gene where RNA polymerase and transcription factors bind to initiate transcription." },
    { term: "Primary transcript", definition: "The initial RNA molecule copied from a gene, containing both exons and introns before processing." },
    { term: "Intron", definition: "A non-coding sequence within a eukaryotic gene that is removed from the primary transcript during splicing." },
    { term: "Exon", definition: "A coding sequence of a eukaryotic gene that is retained in the mature mRNA and translated into protein." },
    { term: "Anticodon", definition: "The three-nucleotide sequence on a tRNA molecule that base-pairs with the complementary codon on mRNA." },
    { term: "Post-translational modification", definition: "Chemical changes made to a polypeptide after translation, such as folding, disulfide bond formation, cleavage or glycosylation." },
  ],
  concepts: [
    {
      id: "biohl-u1-transcription",
      title: "Transcription: promoters, splicing and mRNA processing",
      skill: "Describe how RNA polymerase II initiates transcription at a promoter and how the primary transcript is processed into mature mRNA.",
      lesson: {
        sections: [
          {
            heading: "Initiation and elongation",
            body: "In eukaryotes, transcription factors bind to the promoter region upstream of a gene, recruiting RNA polymerase II, which then unwinds the DNA and synthesises a complementary RNA strand in the $5' \\to 3'$ direction using ribonucleoside triphosphates. Unlike prokaryotes, eukaryotic RNA is processed before it can be translated.",
          },
          {
            heading: "Processing: cap, tail and splicing",
            body: "The primary transcript receives a $5'$ cap (a modified guanine nucleotide) and a poly-A tail of adenine nucleotides, both of which protect the mRNA and aid export from the nucleus and translation. The spliceosome — a complex of snRNPs — removes introns and joins exons. Because different exon combinations can be spliced, one gene can produce several different proteins by alternative splicing.",
          },
          {
            heading: "From nucleus to cytoplasm",
            body: "Only fully processed mRNA is exported through nuclear pore complexes to the cytoplasm, where ribosomes translate it. The $5'$ cap is recognised by initiation factors that recruit the small ribosomal subunit, and the poly-A tail promotes efficient translation and protects the message from degradation. Unspliced or improperly processed transcripts are retained or degraded in the nucleus.",
          },
        ],
        keyFormulas: [
          { name: "Codon count", statement: "$4^3 = 64$ possible codons encode $20$ amino acids plus the stop signals $UAA$, $UAG$ and $UGA$." },
          { name: "Reading frame", statement: "The mRNA is read in non-overlapping triplets starting at the start codon $AUG$, proceeding $5' \\to 3'$." },
          { name: "Coding sequence length", statement: "A polypeptide of $n$ amino acids requires at least $n+1$ codons (including the stop codon), i.e. $3(n+1)$ nucleotides." },
        ],
        workedExample: {
          problem: "A mature mRNA coding region specifies a polypeptide of 250 amino acids. How many codons and how many nucleotides does the coding sequence contain?",
          solution: "The coding sequence contains $250 + 1 = 251$ codons (the extra codon is the stop codon), which is $251 \\times 3 = 753$ nucleotides.",
        },
      },
      questions: [
        {
          id: "biohl-u1-transcription-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During the processing of a eukaryotic primary transcript, which sequences are removed from the RNA before it becomes mature mRNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The $5'$ cap" },
              { id: "b", text: "Introns" },
              { id: "c", text: "The poly-A tail" },
              { id: "d", text: "Exons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Splicing", statement: "Removal of introns and joining of exons by the spliceosome to produce mature mRNA." },
            ],
            steps: [
              { reasoning: "Introns are the non-coding sequences excised during splicing.", marks: 1, markCode: "M" },
              { reasoning: "Exons, the cap and the poly-A tail are retained in the mature mRNA.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Introns",
            commonErrors: ["Reversing introns and exons — exons are retained, introns are removed."],
          },
        },
        {
          id: "biohl-u1-transcription-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A polypeptide contains 180 amino acids. The coding region of its mRNA includes one stop codon. Calculate the number of codons in the coding region, and the number of nucleotides it contains.",
          response: { type: "numeric", parts: [{ label: "Number of codons", answer: 181 }, { label: "Number of nucleotides", answer: 543 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Codon–amino acid correspondence", statement: "Each amino acid is specified by one codon, and termination requires an additional stop codon." },
            ],
            steps: [
              { reasoning: "Add one codon for the stop signal to the 180 amino-acid codons.", working: "180 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the codon count.", working: "181", marks: 1, markCode: "A" },
              { reasoning: "Each codon is three nucleotides.", working: "181 \\times 3 = 543", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$181$ codons; $543$ nucleotides",
            commonErrors: ["Forgetting the stop codon, giving 180 codons and 540 nucleotides."],
          },
        },
        {
          id: "biohl-u1-transcription-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a eukaryotic primary transcript must be processed before it can be translated, and state the three main processing steps involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuclear–cytoplasmic separation", statement: "In eukaryotes transcription occurs in the nucleus but translation in the cytoplasm, so the mRNA must be exported and stabilised." },
              { kind: "principle", name: "mRNA processing", statement: "Capping, tailing and splicing convert the primary transcript into mature mRNA." },
            ],
            steps: [
              { reasoning: "The primary transcript contains introns that would disrupt the reading frame if translated directly.", marks: 1, markCode: "R" },
              { reasoning: "A $5'$ cap protects the mRNA from degradation and helps ribosome binding.", marks: 1, markCode: "A" },
              { reasoning: "A poly-A tail protects the $3'$ end and aids nuclear export and translation efficiency.", marks: 1, markCode: "A" },
              { reasoning: "Splicing by the spliceosome removes introns and joins exons to produce the mature coding sequence.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Processing (cap, poly-A tail, splicing) removes introns, stabilises the mRNA and prepares it for export and translation.",
            commonErrors: ["Claiming splicing occurs in the cytoplasm — it happens in the nucleus before export.", "Listing only one processing step."],
          },
        },
        {
          id: "biohl-u1-transcription-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A eukaryotic gene contains 6 exons separated by introns. In different tissues, different combinations of these exons are retained in the mature mRNA.",
          parts: [
            { label: "a", prompt: "State the function of the promoter region and of RNA polymerase II in transcription.", marks: 2 },
            { label: "b", prompt: "Distinguish between an intron and an exon.", marks: 2 },
            { label: "c", prompt: "If all 6 exons are included in one mRNA, calculate how many introns must have been removed.", marks: 2 },
            { label: "d", prompt: "Explain how alternative splicing allows one gene to produce several different proteins.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Promoter", statement: "The DNA sequence upstream of a gene where transcription factors and RNA polymerase II bind to initiate transcription." },
              { kind: "principle", name: "Alternative splicing", statement: "Different exon combinations in the mature mRNA yield different polypeptide sequences from the same gene." },
            ],
            steps: [
              { part: "a", reasoning: "The promoter is the binding site for transcription factors and RNA polymerase II.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "It positions the polymerase at the correct start point of the gene.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exons are coding sequences retained in the mature mRNA.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Introns are non-coding sequences spliced out during processing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Six exons are separated by introns lying between them.", working: "6 - 1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: five introns lie between six consecutive exons.", working: "5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The spliceosome can include or skip particular exons in different cells.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Different mRNAs therefore encode polypeptides with different amino-acid sequences and functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Promoter = binding site; pol II = synthesises RNA. (b) Exons retained, introns removed. (c) $5$ introns. (d) Different exon combinations give different proteins.",
            commonErrors: ["In (c), answering 6 — the number of introns between 6 exons is 5.", "In (d), claiming alternative splicing changes the DNA sequence — it only changes the mRNA."],
          },
        },
        {
          id: "biohl-u1-transcription-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In eukaryotes, the main role of the promoter region is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provide the template for the poly-A tail" },
              { id: "b", text: "Be removed during splicing" },
              { id: "c", text: "Code for the amino acids of the polypeptide" },
              { id: "d", text: "Serve as the binding site for transcription factors and RNA polymerase II" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Promoter", statement: "A DNA sequence upstream of a gene where transcription factors and RNA polymerase II assemble to initiate transcription." },
            ],
            steps: [
              { reasoning: "The promoter is a regulatory DNA sequence, not the coding template.", marks: 1, markCode: "M" },
              { reasoning: "It recruits the transcription machinery, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Binding site for transcription factors and RNA polymerase II",
            commonErrors: ["Confusing the promoter with the coding region of the gene."],
          },
        },
        {
          id: "biohl-u1-transcription-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which part of a eukaryotic gene is removed from the primary transcript during splicing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exons" },
              { id: "b", text: "Introns" },
              { id: "c", text: "The $5'$ cap" },
              { id: "d", text: "The start codon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Splicing", statement: "Removal of introns and joining of exons by the spliceosome." },
            ],
            steps: [
              { reasoning: "Introns are non-coding sequences within the primary transcript.", marks: 1, markCode: "M" },
              { reasoning: "They are excised while exons are retained, so (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Introns",
            commonErrors: ["Reversing exons and introns."],
          },
        },
        {
          id: "biohl-u1-transcription-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The $5'$ cap on a eukaryotic mRNA primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removes introns from the transcript" },
              { id: "b", text: "Pairs with the anticodon of tRNA" },
              { id: "c", text: "Protects the mRNA and helps ribosome initiation" },
              { id: "d", text: "Adds a template for translation of the last codon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "5' cap", statement: "A modified guanine added to the $5'$ end of mRNA that protects it and supports translation initiation." },
            ],
            steps: [
              { reasoning: "The cap stabilises the transcript and is recognised by initiation factors.", marks: 1, markCode: "M" },
              { reasoning: "It does not code for protein or pair with tRNA, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Protects the mRNA and aids ribosome initiation",
            commonErrors: ["Describing the cap as a coding sequence rather than a protective modification."],
          },
        },
        {
          id: "biohl-u1-transcription-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main function of the poly-A tail added to a eukaryotic mRNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It codes for a stretch of lysine amino acids" },
              { id: "b", text: "It base-pairs with the DNA template strand" },
              { id: "c", text: "It protects the $3'$ end and promotes nuclear export and translation" },
              { id: "d", text: "It removes the introns during splicing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poly-A tail", statement: "A stretch of adenine nucleotides added to the $3'$ end of mRNA that stabilises it and aids export and translation." },
            ],
            steps: [
              { reasoning: "The tail is non-coding and protects the $3'$ end from degradation.", marks: 1, markCode: "M" },
              { reasoning: "It also supports export and efficient translation, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Protects the $3'$ end and promotes export and translation",
            commonErrors: ["Thinking the poly-A tail is translated into polylysine."],
          },
        },
        {
          id: "biohl-u1-transcription-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The spliceosome is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enzyme that adds the $5'$ cap" },
              { id: "b", text: "The protein that seals nicks in DNA" },
              { id: "c", text: "A ribozyme complex of snRNPs that removes introns" },
              { id: "d", text: "The polymerase that transcribes DNA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spliceosome", statement: "A complex of snRNPs that catalyses removal of introns and joining of exons." },
            ],
            steps: [
              { reasoning: "The spliceosome is assembled from small nuclear ribonucleoproteins.", marks: 1, markCode: "M" },
              { reasoning: "Its function is splicing, so choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** An snRNP complex that removes introns",
            commonErrors: ["Confusing the spliceosome with RNA polymerase or capping enzymes."],
          },
        },
        {
          id: "biohl-u1-transcription-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A polypeptide contains 240 amino acids. Its coding mRNA region includes one stop codon. Calculate the number of codons in the coding region and the number of nucleotides it spans.",
          response: { type: "numeric", parts: [{ label: "Number of codons", answer: 241 }, { label: "Number of nucleotides", answer: 723 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stop codon", statement: "A polypeptide of $n$ amino acids requires $n+1$ codons because termination needs a stop codon." },
            ],
            steps: [
              { reasoning: "Add one stop codon to the 240 sense codons.", working: "240 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the codon count.", working: "241", marks: 1, markCode: "A" },
              { reasoning: "Each codon has three nucleotides.", working: "241 * 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the nucleotide count.", working: "723", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$241$ codons and $723$ nucleotides",
            commonErrors: ["Forgetting the stop codon and giving 240 codons."],
          },
        },
        {
          id: "biohl-u1-transcription-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A primary transcript is 12 000 nucleotides long. Introns account for 4 500 nucleotides of the transcript. Calculate (i) the length of the mature mRNA after splicing, assuming the cap and poly-A tail are not included in the count, and (ii) the percentage of the primary transcript removed as introns.",
          response: { type: "numeric", parts: [{ label: "Mature mRNA length (nt)", answer: 7500 }, { label: "Percentage removed as introns", answer: 37.5, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Spliced length", statement: "Mature length $= L_{primary} - L_{introns}$; intron percentage $= 100L_{introns}/L_{primary}$." },
            ],
            steps: [
              { reasoning: "Subtract intron length from the primary transcript.", working: "12000 - 4500", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the mature length.", working: "7500", marks: 1, markCode: "A" },
              { reasoning: "Divide introns by the primary length and multiply by 100.", working: "4500 / 12000 * 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the percentage.", working: "37.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7500$ nt mature mRNA; $37.5\\%$ of the primary transcript is intronic",
            commonErrors: ["Reporting 62.5% remaining instead of 37.5% removed."],
          },
        },
        {
          id: "biohl-u1-transcription-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A eukaryotic gene has 9 exons and all are included in the mature mRNA. The introns between consecutive exons each average 600 nucleotides. Calculate (i) the number of introns removed and (ii) the total number of intronic nucleotides removed.",
          response: { type: "numeric", parts: [{ label: "Number of introns removed", answer: 8 }, { label: "Total intronic nucleotides", answer: 4800 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exon–intron arrangement", statement: "For $n$ consecutive exons there are $n-1$ introns between them." },
            ],
            steps: [
              { reasoning: "Nine exons have eight gaps between them.", working: "9 - 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the intron count.", working: "8", marks: 1, markCode: "A" },
              { reasoning: "Multiply the number of introns by the mean intron length.", working: "8 * 600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total intronic nucleotides.", working: "4800", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ introns removed; $4800$ intronic nucleotides removed",
            commonErrors: ["Answering 9 introns — there are only 8 intervals between 9 exons."],
          },
        },
        {
          id: "biohl-u1-transcription-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A mature mRNA has 180 nucleotides of untranslated regions and a coding region specifying a polypeptide of 95 amino acids plus one stop codon. Calculate (i) the number of nucleotides in the coding region and (ii) the total length of the mature mRNA.",
          response: { type: "numeric", parts: [{ label: "Coding nucleotides", answer: 288 }, { label: "Total mature mRNA nucleotides", answer: 468 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Coding length", statement: "Coding nucleotides $= 3(n+1)$ for $n$ amino acids plus a stop codon." },
            ],
            steps: [
              { reasoning: "The coding region has $95 + 1 = 96$ codons.", working: "95 + 1", marks: 1, markCode: "M" },
              { reasoning: "Multiply by three nucleotides per codon.", working: "96 * 3", marks: 1, markCode: "A" },
              { reasoning: "Add the 180 untranslated nucleotides to the coding region.", working: "288 + 180", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total mRNA length.", working: "468", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$288$ coding nucleotides; $468$ total mature mRNA nucleotides",
            commonErrors: ["Using 95 codons and forgetting the stop codon."],
          },
        },
        {
          id: "biohl-u1-transcription-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Leucine is specified by 6 codons, arginine by 6 codons and serine by 6 codons. Calculate the total number of codons that specify these three amino acids.",
          response: { type: "numeric", parts: [{ label: "Total codons", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Degenerate code", statement: "Most amino acids are encoded by more than one codon." },
            ],
            steps: [
              { reasoning: "Add the codon counts for leucine, arginine and serine.", working: "6 + 6 + 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the total.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$ codons",
            commonErrors: ["Counting only one codon per amino acid."],
          },
        },
        {
          id: "biohl-u1-transcription-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Describe the processing of a eukaryotic primary transcript into mature mRNA, including the role of the spliceosome and the functions of the $5'$ cap and poly-A tail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "mRNA processing", statement: "Capping, splicing and polyadenylation convert the primary transcript into a stable, export-competent mRNA." },
            ],
            steps: [
              { reasoning: "A modified guanine is added to the $5'$ end as the cap.", marks: 1, markCode: "M" },
              { reasoning: "Adenine nucleotides are added to the $3'$ end to form the poly-A tail.", marks: 1, markCode: "M" },
              { reasoning: "The spliceosome, made of snRNPs, recognises splice sites and removes introns.", marks: 1, markCode: "M" },
              { reasoning: "Exons are ligated together to form the continuous coding sequence.", marks: 1, markCode: "A" },
              { reasoning: "The cap and tail protect the mRNA and help it exit through nuclear pores.", marks: 1, markCode: "A" },
              { reasoning: "Only the processed mRNA is translated efficiently in the cytoplasm.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The primary transcript is capped, tailed and spliced so introns are removed and the mature mRNA is stabilised for export and translation.",
            commonErrors: ["Saying processing occurs after export to the cytoplasm."],
          },
        },
        {
          id: "biohl-u1-transcription-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A gene has 8 exons. In one tissue all exons are included; in another tissue exon 4 is skipped.",
          parts: [
            { label: "a", prompt: "State the role of RNA polymerase II in transcription.", marks: 2 },
            { label: "b", prompt: "Explain how the spliceosome distinguishes exons from introns.", marks: 2 },
            { label: "c", prompt: "Calculate the number of introns removed when all 8 exons are included.", marks: 2 },
            { label: "d", prompt: "Explain how skipping exon 4 could produce a different protein from the same gene.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "RNA polymerase II", statement: "The eukaryotic polymerase that transcribes protein-coding genes into pre-mRNA." },
              { kind: "principle", name: "Alternative splicing", statement: "Different exon combinations produce different mRNAs and polypeptides from one gene." },
            ],
            steps: [
              { part: "a", reasoning: "RNA polymerase II binds at the promoter with general transcription factors.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It synthesises the primary RNA transcript in the $5' \\to 3'$ direction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Splice sites at exon–intron boundaries are recognised by snRNPs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The spliceosome excises introns and ligates the selected exons.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Eight exons have seven intervals between them.", working: "8 - 1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the intron count.", working: "7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Skipping exon 4 changes the codons in the mature mRNA.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The altered amino-acid sequence can change protein structure or function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Pol II makes pre-mRNA. (b) Splice sites guide snRNP removal. (c) $7$ introns. (d) Exon skipping changes the polypeptide sequence.",
            commonErrors: ["In (c), answering 8 introns instead of the 7 between-exon introns."],
          },
        },
      ],
    },
    {
      id: "biohl-u1-translation",
      title: "Translation: ribosomes, tRNA and protein maturation",
      skill: "Describe the roles of the ribosome A, P and E sites, tRNA anticodon pairing, start and stop codons, and post-translational modifications.",
      lesson: {
        sections: [
          {
            heading: "The ribosome and tRNA",
            body: "Translation occurs on ribosomes, which have three tRNA binding sites: the A (aminoacyl) site accepts the incoming charged tRNA, the P (peptidyl) site holds the tRNA carrying the growing chain, and the E (exit) site releases the deacylated tRNA. Each tRNA carries a specific amino acid at one end and an anticodon at the other; the anticodon base-pairs antiparallel with the mRNA codon. Initiation begins at the start codon $AUG$, which also codes for methionine; termination occurs when a stop codon ($UAA$, $UAG$ or $UGA$) is reached and a release factor enters instead of a tRNA.",
          },
          {
            heading: "Post-translational modification",
            body: "The polypeptide released from the ribosome is not yet functional. It must fold into its three-dimensional shape — often stabilised by disulfide bonds between cysteine residues — and may be chemically modified: phosphate groups added (phosphorylation), carbohydrate chains attached (glycosylation), or the chain cleaved to remove signal or propeptides. Misfolded proteins are usually degraded by the cell.",
          },
          {
            heading: "The degeneracy of the code",
            body: "The genetic code is degenerate: most amino acids are specified by more than one codon, often differing only in the third position. This is possible because of wobble pairing, in which the first base of the anticodon can pair with more than one base in the third codon position. As a result, fewer than 61 different tRNA molecules are needed to read all 61 sense codons. The code is also nearly universal across organisms.",
          },
        ],
        keyFormulas: [
          { name: "Codon–anticodon pairing", statement: "Each tRNA anticodon pairs antiparallel and complementary with its mRNA codon." },
          { name: "Start and stop", statement: "Translation initiates at $AUG$ (methionine) and terminates at $UAA$, $UAG$ or $UGA$, which are not translated into amino acids." },
          { name: "Energy cost", statement: "Each peptide-bond formation consumes GTP via elongation factors, so a protein of $n$ amino acids uses on the order of $2n$ GTP during elongation." },
        ],
        workedExample: {
          problem: "Translate the mRNA sequence $5'-AUG\\ CCU\\ GGU\\ UAA-3'$ and state the product.",
          solution: "The ribosome starts at $AUG$ (methionine), adds $CCU$ (proline) and $GGU$ (glycine), then stops at $UAA$. The product is the tripeptide Met-Pro-Gly; the stop codon contributes no amino acid.",
        },
      },
      questions: [
        {
          id: "biohl-u1-translation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During translation, into which site of the ribosome does the incoming aminoacyl-tRNA first bind?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The A (aminoacyl) site" },
              { id: "b", text: "The anticodon loop" },
              { id: "c", text: "The E (exit) site" },
              { id: "d", text: "The P (peptidyl) site" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ribosome sites", statement: "A site accepts incoming aminoacyl-tRNA, P site holds the peptidyl-tRNA, E site releases deacylated tRNA." },
            ],
            steps: [
              { reasoning: "The incoming charged tRNA enters the A site before peptide-bond formation.", marks: 1, markCode: "M" },
              { reasoning: "The P site holds the chain and the E site releases spent tRNA.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The A site",
            commonErrors: ["Confusing the P site (holds the growing chain) with the A site (accepts the next tRNA)."],
          },
        },
        {
          id: "biohl-u1-translation-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A polypeptide contains 220 amino acids. Its coding mRNA region includes one stop codon and begins with a start codon. Calculate the number of codons in the coding region, and the number of nucleotides it spans.",
          response: { type: "numeric", parts: [{ label: "Number of codons", answer: 221 }, { label: "Number of nucleotides", answer: 663 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Codon count", statement: "A polypeptide of $n$ amino acids requires $n+1$ codons including the stop codon." },
            ],
            steps: [
              { reasoning: "Add one codon for termination to the 220 amino-acid codons.", working: "220 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the codon count.", working: "221", marks: 1, markCode: "A" },
              { reasoning: "Multiply by three nucleotides per codon.", working: "221 \\times 3 = 663", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$221$ codons; $663$ nucleotides",
            commonErrors: ["Counting only sense codons and forgetting the stop codon."],
          },
        },
        {
          id: "biohl-u1-translation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the polypeptide released from a ribosome is usually not yet functional, and describe three types of post-translational modification that can occur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Protein folding", statement: "A linear polypeptide must fold into a specific three-dimensional conformation to be functional; incorrect folding usually leads to degradation." },
              { kind: "principle", name: "Post-translational modification", statement: "Chemical alterations after translation — cleavage, phosphorylation, glycosylation — regulate activity and targeting." },
            ],
            steps: [
              { reasoning: "The nascent chain is unfolded and lacks the correct tertiary structure required for function.", marks: 1, markCode: "R" },
              { reasoning: "Folding, often assisted by chaperones and stabilised by disulfide bonds, produces the active conformation.", marks: 1, markCode: "M" },
              { reasoning: "Proteolytic cleavage removes signal peptides or propeptides to activate or target the protein.", marks: 1, markCode: "A" },
              { reasoning: "Phosphorylation and glycosylation modify the protein to regulate its activity, localisation or recognition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The released polypeptide must fold and be chemically modified (cleavage, phosphorylation, glycosylation) before it is functional.",
            commonErrors: ["Claiming translation produces the final active protein directly.", "Listing modifications without explaining why folding is needed."],
          },
        },
        {
          id: "biohl-u1-translation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An mRNA strand has the sequence 5'-AUG-CCU-GGU-UAA-3' written as codons separated by hyphens.",
          parts: [
            { label: "a", prompt: "Identify the start codon in this sequence and name the amino acid it codes for.", marks: 2 },
            { label: "b", prompt: "Translate the sense codons between the start and stop codons.", marks: 2 },
            { label: "c", prompt: "State how many amino acids the polypeptide contains and explain why the stop codon is not counted.", marks: 2 },
            { label: "d", prompt: "Explain what would happen to translation if the stop codon UAA were mutated to AAA.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genetic code", statement: "$AUG$ is the start codon coding for methionine; $UAA$, $UAG$ and $UGA$ are stop codons." },
              { kind: "principle", name: "Reading frame", statement: "The ribosome reads non-overlapping triplets from the start codon until a stop codon." },
            ],
            steps: [
              { part: "a", reasoning: "The start codon is $AUG$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "It codes for methionine (and also initiates translation).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$CCU$ codes for proline and $GGU$ codes for glycine.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So the sense codons give Pro-Gly in order.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The polypeptide contains three amino acids: Met-Pro-Gly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Stop codons recruit release factors rather than tRNAs, so no amino acid is incorporated.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "AAA codes for lysine, so translation would not terminate at that position.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The ribosome would continue to the next stop codon, producing a longer (run-on) polypeptide.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $AUG$, methionine. (b) Pro, Gly. (c) Three amino acids — stop codons add none. (d) Translation continues past the site to the next stop codon.",
            commonErrors: ["Counting the stop codon as a fourth amino acid.", "In (d), claiming translation simply fails — it read-throughs to the next stop codon."],
          },
        },
        {
          id: "biohl-u1-translation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During elongation, the tRNA carrying the growing polypeptide chain is normally located in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "E site" },
              { id: "b", text: "P site" },
              { id: "c", text: "A site" },
              { id: "d", text: "Anticodon loop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ribosome P site", statement: "The peptidyl site holds the tRNA attached to the growing polypeptide chain." },
            ],
            steps: [
              { reasoning: "The chain-bearing tRNA occupies the P site during peptide-bond formation.", marks: 1, markCode: "M" },
              { reasoning: "A accepts incoming tRNA and E releases spent tRNA, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** P site",
            commonErrors: ["Confusing the P site with the A site that accepts the next aminoacyl-tRNA."],
          },
        },
        {
          id: "biohl-u1-translation-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "After peptide-bond formation and translocation, the deacylated tRNA is released from the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Promoter" },
              { id: "b", text: "E site" },
              { id: "c", text: "A site" },
              { id: "d", text: "P site" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "E site", statement: "The exit site releases the deacylated tRNA after it has passed through the ribosome." },
            ],
            steps: [
              { reasoning: "Spent tRNA moves from A to P to E during translocation.", marks: 1, markCode: "M" },
              { reasoning: "The E site is the exit site, so choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** E site",
            commonErrors: ["Thinking deacylated tRNA leaves directly from the P site."],
          },
        },
        {
          id: "biohl-u1-translation-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A tRNA anticodon pairs with an mRNA codon in which orientation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallel and identical" },
              { id: "b", text: "Antiparallel and complementary" },
              { id: "c", text: "Parallel and complementary" },
              { id: "d", text: "Antiparallel and identical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Codon–anticodon pairing", statement: "The anticodon base-pairs antiparallel and complementary with the mRNA codon." },
            ],
            steps: [
              { reasoning: "Nucleic-acid strands pair antiparallel, $5' \\to 3'$ opposite $3' \\to 5'$.", marks: 1, markCode: "M" },
              { reasoning: "Bases must be complementary, so choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Antiparallel and complementary",
            commonErrors: ["Writing the anticodon in the same $5' \\to 3'$ direction as the codon."],
          },
        },
        {
          id: "biohl-u1-translation-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Wobble pairing explains why:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fewer than 61 tRNA molecules can read all sense codons" },
              { id: "b", text: "Stop codons are translated into amino acids" },
              { id: "c", text: "Every codon requires a different amino acid" },
              { id: "d", text: "mRNA is synthesised in the nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wobble", statement: "The first anticodon base can pair with more than one third-position codon base, reducing the number of tRNAs needed." },
            ],
            steps: [
              { reasoning: "Wobble occurs at the third codon position.", marks: 1, markCode: "M" },
              { reasoning: "One tRNA can therefore recognise several codons, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Fewer than 61 tRNAs can read all sense codons",
            commonErrors: ["Confusing wobble with degeneracy of the code itself."],
          },
        },
        {
          id: "biohl-u1-translation-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When the ribosome reaches a stop codon, translation ends because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The stop codon codes for methionine" },
              { id: "b", text: "A release factor enters the A site instead of an aminoacyl-tRNA" },
              { id: "c", text: "The mRNA is immediately degraded" },
              { id: "d", text: "Helicase unwinds the ribosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Termination", statement: "Stop codons are recognised by release factors, not by tRNAs carrying amino acids." },
            ],
            steps: [
              { reasoning: "No tRNA has an anticodon for a stop codon.", marks: 1, markCode: "M" },
              { reasoning: "A release factor binds and frees the polypeptide, so (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A release factor enters the A site",
            commonErrors: ["Claiming stop codons code for an amino acid."],
          },
        },
        {
          id: "biohl-u1-translation-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An mRNA coding region is written as codons: $5'-AUG\\ UUU\\ CCC\\ GGG\\ UAA-3'$. Calculate (i) the number of amino acids in the polypeptide and (ii) the number of nucleotides in the coding region including the stop codon.",
          response: { type: "numeric", parts: [{ label: "Number of amino acids", answer: 4 }, { label: "Coding nucleotides including stop", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading frame", statement: "The ribosome reads non-overlapping codons from $AUG$ until a stop codon; the stop codon adds no amino acid." },
            ],
            steps: [
              { reasoning: "The sense codons before $UAA$ are $AUG$, $UUU$, $CCC$ and $GGG$.", marks: 1, markCode: "M" },
              { reasoning: "Count the four amino-acid codons before $UAA$.", working: "4", marks: 1, markCode: "A" },
              { reasoning: "There are five codons in total including the stop codon.", working: "5 * 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the nucleotide count.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ amino acids; $15$ nucleotides including the stop codon",
            commonErrors: ["Counting $UAA$ as a fifth amino acid."],
          },
        },
        {
          id: "biohl-u1-translation-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A polypeptide contains 64 amino acids. Its coding mRNA includes one start codon and one stop codon. Calculate (i) the number of codons in the coding region and (ii) the number of nucleotides it spans.",
          response: { type: "numeric", parts: [{ label: "Number of codons", answer: 65 }, { label: "Number of nucleotides", answer: 195 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Codon count", statement: "Coding codons $= n + 1$ for $n$ amino acids when the stop codon is additional to the start codon." },
            ],
            steps: [
              { reasoning: "The start codon is one of the 64 amino-acid codons; add only the stop codon.", working: "64 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the codon count.", working: "65", marks: 1, markCode: "A" },
              { reasoning: "Multiply by three nucleotides per codon.", working: "65 * 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the nucleotide count.", working: "195", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65$ codons; $195$ nucleotides",
            commonErrors: ["Adding two extra codons for both start and stop when the start already codes for methionine."],
          },
        },
        {
          id: "biohl-u1-translation-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "The genetic code has 64 codons: 61 sense codons and 3 stop codons. These sense codons specify 20 amino acids. Calculate the mean number of codons per amino acid.",
          response: { type: "numeric", parts: [{ label: "Mean codons per amino acid", answer: 3.05, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean codons", statement: "Mean codons per amino acid $= 61 / 20 = 3.05$." },
            ],
            steps: [
              { reasoning: "Use only the 61 sense codons because stop codons do not specify amino acids.", marks: 1, markCode: "M" },
              { reasoning: "Divide 61 by 20.", working: "61 / 20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3.05", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.05$ codons per amino acid on average",
            commonErrors: ["Dividing 64 by 20 and including stop codons."],
          },
        },
        {
          id: "biohl-u1-translation-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "During elongation, translation uses approximately 2 GTP molecules per amino acid added. Estimate the number of GTP molecules used to synthesise a polypeptide of 150 amino acids.",
          response: { type: "numeric", parts: [{ label: "Estimated GTP molecules", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy cost", statement: "Elongation costs roughly $2n$ GTP for a polypeptide of $n$ amino acids." },
            ],
            steps: [
              { reasoning: "Multiply the amino-acid count by 2 GTP per addition.", working: "150 * 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the estimate.", working: "300", marks: 1, markCode: "A" },
              { reasoning: "State that initiation and termination add further GTP-dependent steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "About $300$ GTP molecules",
            commonErrors: ["Using ATP rather than GTP as the energy currency of translation."],
          },
        },
        {
          id: "biohl-u1-translation-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A coding mRNA region contains 90 nucleotides, including one start codon and one stop codon. Calculate (i) the number of codons and (ii) the number of amino acids in the polypeptide.",
          response: { type: "numeric", parts: [{ label: "Number of codons", answer: 30 }, { label: "Number of amino acids", answer: 29 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Codons from length", statement: "Codon number $= $ mRNA length $/ 3$; amino acids $=$ codons $- 1$ for the stop codon." },
            ],
            steps: [
              { reasoning: "Divide the nucleotide length by three.", working: "90 / 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the codon count.", working: "30", marks: 1, markCode: "A" },
              { reasoning: "Subtract only the stop codon because the start codon also codes for methionine.", working: "30 - 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the amino-acid count.", working: "29", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ codons; $29$ amino acids",
            commonErrors: ["Subtracting both start and stop codons; the start codon codes for methionine."],
          },
        },
        {
          id: "biohl-u1-translation-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Describe the cycle of events by which one amino acid is added to a growing polypeptide chain during translation elongation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elongation cycle", statement: "Each elongation step involves delivery of aminoacyl-tRNA, peptide-bond formation, translocation and ejection of spent tRNA." },
            ],
            steps: [
              { reasoning: "A charged tRNA carrying the next amino acid enters the A site.", marks: 1, markCode: "M" },
              { reasoning: "Its anticodon pairs with the mRNA codon in the A site.", marks: 1, markCode: "A" },
              { reasoning: "A peptidyl transferase activity transfers the growing chain to the new amino acid.", marks: 1, markCode: "M" },
              { reasoning: "GTP-dependent elongation factors then translocate the ribosome one codon.", marks: 1, markCode: "M" },
              { reasoning: "The spent tRNA moves through the E site and is released.", marks: 1, markCode: "A" },
              { reasoning: "The cycle repeats until a stop codon is reached.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Aminoacyl-tRNA enters the A site, peptide bond forms, translocation occurs, and the deacylated tRNA exits.",
            commonErrors: ["Omitting translocation or confusing the P and A sites."],
          },
        },
        {
          id: "biohl-u1-translation-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A gene is mutated so that the mRNA sequence changes from $5'-AUG\\ AAA\\ CCC\\ GGG\\ UAA-3'$ to $5'-AUG\\ AAC\\ CCC\\ GGG\\ UAA-3'$.",
          parts: [
            { label: "a", prompt: "State the amino acid coded by $AUG$ and the amino acids coded by $AAA$ and $AAC$.", marks: 2 },
            { label: "b", prompt: "Translate the original and mutated mRNA sequences.", marks: 2 },
            { label: "c", prompt: "Explain why the mutation does not change the length of the polypeptide.", marks: 2 },
            { label: "d", prompt: "Suggest one possible consequence if the changed amino acid alters protein folding.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point mutation", statement: "A single-base change can alter one codon and therefore one amino acid without changing codon number." },
            ],
            steps: [
              { part: "a", reasoning: "$AUG$ codes for methionine.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$AAA$ codes for lysine and $AAC$ codes for asparagine.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Original: Met-Lys-Pro-Gly; mutated: Met-Asn-Pro-Gly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both stop at $UAA$, giving four amino acids.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only one base changes and the reading frame is unchanged.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The number of codons and amino acids therefore remains the same.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "If the substituted residue is critical, the polypeptide may fold incorrectly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Misfolding can reduce function or target the protein for degradation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Met; Lys and Asn. (b) Met-Lys-Pro-Gly changes to Met-Asn-Pro-Gly. (c) Frame and length are unchanged. (d) Altered folding may impair function.",
            commonErrors: ["Claiming a single-base substitution changes the reading frame or polypeptide length."],
          },
        },
      ],
    },
  ],
};
