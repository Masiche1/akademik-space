import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "biosl-u6-lesson-6-2",
  code: "6-2",
  title: "Biotechnology: Genetic Engineering and Industrial Applications",
  goal: "I CAN describe recombinant DNA technology and its applications, and explain how enzymes, fermentation and tissue culture are used industrially.",
  standards: ["Topic D.1", "Topic D.2", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Recombinant DNA", definition: "DNA formed by joining fragments from different sources, e.g. a human gene inserted into a bacterial plasmid." },
    { term: "Restriction enzyme", definition: "An enzyme that cuts DNA at specific recognition sequences, producing sticky or blunt ends for joining." },
    { term: "Plasmid", definition: "A small circular DNA molecule in bacteria, widely used as a vector to carry foreign genes." },
    { term: "Fermentation", definition: "The large-scale culture of microorganisms to produce useful products such as antibiotics, enzymes or biofuels." },
    { term: "Immobilised enzyme", definition: "An enzyme attached to an inert support so it can be reused in continuous industrial processes." },
    { term: "Tissue culture", definition: "Growing plant cells or tissues in sterile nutrient medium to produce clones (micropropagation)." },
  ],
  concepts: [
    {
      id: "biosl-u6-genetic-engineering",
      title: "Recombinant DNA and genetic engineering",
      skill: "Describe how recombinant DNA is made and evaluate applications including GM crops, insulin production and gene therapy.",
      lesson: {
        sections: [
          {
            heading: "Making recombinant DNA",
            body: "A **restriction enzyme** cuts DNA at specific sequences, and **ligase** joins fragments. To make human insulin in bacteria: cut the human insulin gene and a bacterial **plasmid** with the same enzyme (producing matching sticky ends), ligate the gene into the plasmid, and transform bacteria. Bacteria carrying the plasmid are selected with antibiotics; they then transcribe and translate the human gene to produce insulin.",
          },
          {
            heading: "Applications",
            body: "Genetic engineering produces **human proteins** (insulin, growth hormone, vaccines) in fermenters, creates **GM crops** with traits such as pest resistance or herbicide tolerance, and enables **gene therapy** — inserting functional genes to treat disorders. **Cloning** by nuclear transfer or embryo splitting produces genetically identical organisms.",
          },
          {
            heading: "Ethical and safety considerations",
            body: "Concerns include gene flow from GM crops to wild relatives, allergenicity of novel proteins, antibiotic-resistance marker genes, animal welfare in cloning, and unequal access to biotechnology. Regulation (risk assessment, labelling, containment) balances benefits against risks.",
          },
        ],
        keyFormulas: [
          { name: "Recombinant DNA steps", statement: "Cut gene + plasmid with same restriction enzyme → ligate → transform bacteria → select → express protein" },
          { name: "Vector", statement: "Plasmid carries the foreign gene into the host cell" },
          { name: "Applications", statement: "Human proteins, GM crops, vaccines, gene therapy, cloning" },
        ],
        workedExample: {
          problem: "Outline how bacteria are engineered to produce human insulin.",
          solution: "Extract the human insulin gene; cut it and a plasmid with the same restriction enzyme; ligate the gene into the plasmid; transform bacteria and select those carrying the plasmid with an antibiotic; the bacteria express the gene and secrete insulin, which is harvested from the fermenter.",
        },
      },
      questions: [
        {
          id: "biosl-u6-genetic-engineering-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is the role of a plasmid in genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cuts DNA at specific sequences" },
              { id: "b", text: "It carries the foreign gene into the host cell as a vector" },
              { id: "c", text: "It joins DNA fragments together" },
              { id: "d", text: "It kills bacteria that do not take up the gene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plasmid/vector", statement: "A small circular DNA molecule used to carry a foreign gene into a host cell." },
            ],
            steps: [
              { reasoning: "The plasmid is the vector; restriction enzymes cut and ligase joins.", working: "plasmid = vector", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It carries the foreign gene into the host cell",
            commonErrors: ["Confusing plasmid (vector) with restriction enzyme (cutter) or ligase (joiner)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why must the same restriction enzyme be used to cut both the human insulin gene and the plasmid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "So that both fragments have matching sticky ends that can be joined by ligase" },
              { id: "b", text: "So that the bacteria can digest the DNA" },
              { id: "c", text: "So that the insulin gene is copied" },
              { id: "d", text: "So that the plasmid becomes circular again" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sticky ends", statement: "The same restriction enzyme produces complementary overhangs that ligase can join." },
            ],
            steps: [
              { reasoning: "Using the same enzyme gives both DNA pieces identical sticky ends.", working: "same enzyme → same ends", marks: 1, markCode: "M" },
              { reasoning: "Complementary overhangs allow ligase to seal the gene into the plasmid.", working: "complementary ends → ligation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To produce matching sticky ends for ligation",
            commonErrors: ["Thinking different enzymes would work — incompatible ends cannot be joined."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A GM crop is engineered to produce a bacterial toxin that kills insect pests. Which is the most significant ecological risk of growing this crop widely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The toxin will make the soil permanently sterile" },
              { id: "b", text: "Pest populations may evolve resistance, and the toxin could affect non-target insects" },
              { id: "c", text: "The crop will stop photosynthesising" },
              { id: "d", text: "Birds will refuse to eat the seeds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "GM crop risks", statement: "Selection can produce resistant pests; broad-spectrum toxins may harm beneficial non-target species." },
            ],
            steps: [
              { reasoning: "Constant exposure to the toxin selects for resistant pest genotypes — the same evolutionary logic as antibiotics.", working: "selection → resistance", marks: 1, markCode: "M" },
              { reasoning: "The toxin is not species-specific, so beneficial insects (pollinators, predators) may also be harmed.", working: "non-target effects", marks: 1, markCode: "M" },
              { reasoning: "These ecological consequences must be weighed against reduced pesticide use in a risk assessment.", working: "risk-benefit balance", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pest resistance evolution and harm to non-target insects",
            commonErrors: ["Focusing only on human health and ignoring ecological effects."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Scientists want to use bacteria to produce a human enzyme used to treat a rare disease. They have the human gene, a plasmid vector, a restriction enzyme and ligase available.",
          parts: [
            { label: "a", prompt: "Outline the steps needed to produce the enzyme in bacteria.", marks: 2 },
            { label: "b", prompt: "Explain how bacteria carrying the recombinant plasmid can be identified.", marks: 2 },
            { label: "c", prompt: "Suggest two advantages of producing human proteins in bacteria rather than extracting them from human donors.", marks: 2 },
            { label: "d", prompt: "Evaluate one ethical or safety concern about using genetically modified bacteria in this way.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recombinant DNA", statement: "Foreign gene inserted into a vector (plasmid) and expressed by a host cell." },
            ],
            steps: [
              { part: "a", reasoning: "Cut the gene and plasmid with the same restriction enzyme, ligate the gene into the plasmid, and transform bacteria.", working: "cut → ligate → transform", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Select transformed bacteria (e.g. antibiotic resistance marker) and grow them in a fermenter to produce the enzyme.", working: "select + ferment", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Include a selectable marker (e.g. antibiotic resistance) on the plasmid and grow bacteria on the antibiotic.", working: "antibiotic selection", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only bacteria carrying the plasmid survive; they can then be screened for enzyme production.", working: "survivors = transformants", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantages: unlimited supply, no risk of human pathogens, consistent quality, lower cost at scale.", working: "supply + safety + cost", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid advantages identified.", working: "two advantages", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Concern: containment — engineered bacteria could escape and transfer genes; or marker genes could spread resistance.", working: "escape / gene transfer", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluation: risk is managed by containment, kill-switch genes and removal of marker genes; benefit to patients must be weighed against residual risk.", working: "risk managed vs benefit", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cut gene + plasmid, ligate, transform, select, ferment. (b) Selectable marker such as antibiotic resistance. (c) Unlimited supply, pathogen-free, consistent quality, cheaper. (d) Escape/transfer risk — managed by containment and monitoring.",
            commonErrors: ["Using different restriction enzymes for gene and plasmid — ends won't match.", "Claiming bacteria with the plasmid can be identified by size alone."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept alternative valid concerns in (d).",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the function of DNA ligase in recombinant DNA technology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cuts DNA at specific recognition sequences" },
              { id: "b", text: "It joins DNA fragments by forming phosphodiester bonds" },
              { id: "c", text: "It copies DNA during replication" },
              { id: "d", text: "It protects bacteria from antibiotics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNA ligase", statement: "Enzyme that seals nicks and joins DNA fragments, sealing the foreign gene into the vector." },
            ],
            steps: [
              { reasoning: "Restriction enzymes cut; ligase is the enzyme that joins fragments.", working: "ligase = joiner", marks: 1, markCode: "M" },
              { reasoning: "It forms phosphodiester bonds between the sticky ends of the gene and plasmid.", working: "phosphodiester bonds", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It joins DNA fragments",
            commonErrors: ["Confusing ligase with restriction enzymes or polymerases."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why are bacteria grown on a medium containing an antibiotic after transformation with a recombinant plasmid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To kill all bacteria so only the plasmid remains" },
              { id: "b", text: "To select only bacteria that took up the plasmid carrying antibiotic resistance" },
              { id: "c", text: "To make the bacteria produce insulin faster" },
              { id: "d", text: "To cut the plasmid DNA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selectable markers", statement: "A marker gene (e.g. antibiotic resistance) on the plasmid lets transformed cells be identified and isolated." },
            ],
            steps: [
              { reasoning: "The plasmid carries a resistance gene; only bacteria that took it up survive on the antibiotic.", working: "resistance marker", marks: 1, markCode: "M" },
              { reasoning: "This selects transformants from the vast majority of untransformed cells.", working: "selection of transformants", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To select bacteria carrying the plasmid",
            commonErrors: ["Thinking the antibiotic kills the target bacteria — it kills non-transformants."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is a restriction enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An enzyme that restricts bacterial growth" },
              { id: "b", text: "An enzyme that cuts DNA at specific recognition sequences" },
              { id: "c", text: "An enzyme that joins DNA fragments" },
              { id: "d", text: "An enzyme that proofreads DNA during replication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Restriction enzyme", statement: "Bacterial enzyme that recognises and cuts DNA at specific base sequences, producing sticky or blunt ends." },
            ],
            steps: [
              { reasoning: "Restriction enzymes recognise specific short DNA sequences.", working: "specific recognition sites", marks: 1, markCode: "M" },
              { reasoning: "They cut the DNA, generating ends used for recombinant DNA construction.", working: "cuts DNA", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cuts DNA at specific sequences",
            commonErrors: ["Confusing restriction enzymes with ligase."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A fermenter produces 80 g of insulin per litre of culture. After optimisation, the yield rises to 120 g per litre. Calculate: (a) the absolute increase in yield per litre; (b) the percentage increase in yield.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Increase in g/L", answer: 40 },
              { label: "(b) Percentage increase", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase = (new − old) / old × 100." },
            ],
            steps: [
              { reasoning: "Absolute increase = 120 − 80 = 40 g/L.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "(a) The increase is 40 g per litre.", working: "40 g/L", marks: 1, markCode: "A" },
              { reasoning: "(b) Percentage increase = 40 / 80 × 100 = 50%.", working: "50%", marks: 1, markCode: "M" },
              { reasoning: "The percentage increase is 50%.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 g/L; (b) 50%",
            commonErrors: ["Dividing by the new value (40/120) instead of the original (40/80)."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A culture of engineered bacteria starts with 1000 cells. The population doubles every hour. Calculate: (a) the number of cells after 5 hours; (b) the number of cells after 10 hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cells after 5 h", answer: 32000 },
              { label: "(b) Cells after 10 h", answer: 1024000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential growth", statement: "Population after n doublings = initial × 2^n." },
            ],
            steps: [
              { reasoning: "After n hours the population is 1000 × 2^n.", working: "1000 × 2^n", marks: 1, markCode: "M" },
              { reasoning: "(a) 1000 × 2^5 = 1000 × 32 = 32 000 cells.", working: "32000", marks: 1, markCode: "A" },
              { reasoning: "(b) 1000 × 2^10 = 1000 × 1024 = 1 024 000 cells.", working: "1024000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 32 000; (b) 1 024 000",
            commonErrors: ["Adding a fixed number each hour instead of multiplying by 2."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Gene therapy aims to treat genetic disorders by inserting a functional gene into a patient's cells. Severe combined immunodeficiency (SCID) has been treated by inserting a normal gene into blood stem cells.",
          parts: [
            { label: "a", prompt: "Outline how a functional gene could be delivered into a patient's cells.", marks: 2 },
            { label: "b", prompt: "Evaluate one benefit and one risk of gene therapy for SCID.", marks: 2 },
            { label: "c", prompt: "Discuss why germline gene therapy (editing embryos) is more controversial than somatic gene therapy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gene therapy", statement: "Insertion of a functional gene into cells to compensate for a defective allele." },
            ],
            steps: [
              { part: "a", reasoning: "A vector (e.g. modified virus or plasmid) carrying the normal gene is introduced into the target cells.", working: "vector delivers gene", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The cells then express the functional protein, restoring the missing function.", working: "gene expressed", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Benefit: treats the underlying cause rather than symptoms — SCID patients can produce functional immune cells.", working: "treats cause", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk: insertion may disrupt other genes (insertional mutagenesis) or trigger immune responses; some trials caused leukaemia.", working: "insertional mutagenesis risk", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Germline edits are inherited by all descendants and cannot be undone, raising consent and designer-baby concerns.", working: "heritable, irreversible", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Somatic therapy affects only the patient and is more widely accepted; germline changes affect future generations and the gene pool.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Vector (virus/plasmid) delivers the normal gene; cells express it. (b) Benefit: cures underlying defect; risk: insertional mutagenesis/immune response. (c) Germline changes are heritable and irreversible — greater ethical concern.",
            commonErrors: ["Describing gene therapy as adding a protein rather than a gene.", "Ignoring that germline changes are passed to offspring."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 R1 (c).",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is an advantage of growing GM crops that produce their own insecticide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They always have higher nutritional value" },
              { id: "b", text: "They can reduce the need for sprayed pesticides, lowering costs and chemical exposure" },
              { id: "c", text: "They cannot be affected by pests" },
              { id: "d", text: "They grow faster in all environments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "GM crop benefits", statement: "Engineered pest resistance can reduce pesticide spraying while maintaining yield." },
            ],
            steps: [
              { reasoning: "The crop produces its own toxin, so farmers spray less pesticide.", working: "less spraying", marks: 1, markCode: "M" },
              { reasoning: "This cuts costs, reduces chemical exposure and can benefit non-target organisms.", working: "cost + environment", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reduced pesticide use",
            commonErrors: ["Claiming GM crops are immune to all pests — resistance can evolve."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two methods of cloning mammals are nuclear transfer (somatic cell nuclear transfer) and embryo splitting (twinning).",
          parts: [
            { label: "a", prompt: "Describe how each method produces genetically identical offspring.", marks: 2 },
            { label: "b", prompt: "State one advantage and one disadvantage of each method.", marks: 2 },
            { label: "c", prompt: "Evaluate the use of animal cloning for conserving endangered species.", marks: 2 },
            { label: "d", prompt: "Discuss one ethical concern raised by mammalian cloning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cloning", statement: "Producing genetically identical individuals — by nuclear transfer or embryo splitting." },
            ],
            steps: [
              { part: "a", reasoning: "Nuclear transfer: nucleus of a donor somatic cell is transferred into an enucleated egg, which is stimulated to divide and implanted.", working: "donor nucleus → enucleated egg", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Embryo splitting: an early embryo is divided into two or more parts, each developing into an identical individual.", working: "embryo divided", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Advantage of nuclear transfer: can clone an adult with a known desirable genotype; disadvantage: very inefficient with many failures.", working: "adult genotype vs inefficiency", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Advantage of embryo splitting: simpler and more efficient; disadvantage: only clones the embryo's existing genotype.", working: "simpler vs limited", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefit: could multiply rare species from limited genetic material; drawback: low success rates, health problems in clones, and it does not solve habitat loss.", working: "backup vs low success", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: cloning is a supplementary tool — habitat protection remains essential.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Concerns: animal welfare (high failure/morbidity rates), identity of the clone, and potential for human reproductive cloning.", working: "welfare + identity", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Weighing benefit against suffering and ethical boundaries — regulation is required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Nuclear transfer uses a donor nucleus in an enucleated egg; embryo splitting divides an early embryo. (b) NT clones known adult genotypes but is inefficient; splitting is simpler but limited to embryo genotypes. (c) Supplementary tool — low success and does not fix habitat loss. (d) Welfare and identity concerns require regulation.",
            commonErrors: ["Claiming clones are always healthy — many cloned animals have defects.", "Confusing the two methods."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d).",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Outline how recombinant bacteria are used to produce human insulin for diabetic patients.",
          parts: [
            { label: "a", prompt: "Describe the steps from obtaining the human insulin gene to harvesting insulin.", marks: 4 },
            { label: "b", prompt: "Suggest two reasons why this method is preferred to extracting insulin from animal pancreases.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recombinant insulin production", statement: "Human insulin gene inserted into a bacterial plasmid; bacteria ferment and secrete insulin." },
            ],
            steps: [
              { part: "a", reasoning: "The human insulin gene is cut from DNA and a plasmid is cut with the same restriction enzyme.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ligase joins the gene into the plasmid, which is used to transform bacteria.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Transformants are selected (e.g. antibiotic resistance) and grown in fermenters.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Bacteria express the gene and insulin is extracted and purified from the culture.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two valid reasons: unlimited consistent supply, no animal pathogens (e.g. no prion risk), lower cost at scale, identical human sequence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two distinct advantages identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cut gene and plasmid with same enzyme → ligate → transform → select → ferment → purify insulin. (b) Unlimited safe supply; consistent quality; cheaper; human-identical protein.",
            commonErrors: ["Omitting the selection step or the purification step.", "Using different enzymes for gene and plasmid."],
            examinerNote: "M1 M1 M1 A1 (a); M1 A1 (b).",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "An immobilised enzyme is used in a continuous reactor. Each unit of enzyme catalyses 4 reactions per minute. Calculate: (a) the number of reactions catalysed in 90 minutes by one unit; (b) the number of units needed to catalyse 720 reactions in 90 minutes.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Reactions in 90 min", answer: 360 },
              { label: "(b) Units needed", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate calculation", statement: "Total = rate × time; units needed = total / (rate × time)." },
            ],
            steps: [
              { reasoning: "One unit catalyses 4 × 90 = 360 reactions in 90 minutes.", working: "4 × 90 = 360", marks: 1, markCode: "M" },
              { reasoning: "(a) 360 reactions.", working: "360", marks: 1, markCode: "A" },
              { reasoning: "(b) 720 / 360 = 2 units.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 360; (b) 2",
            commonErrors: ["Dividing by rate only and forgetting the time factor."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which term describes the DNA molecule used to carry a foreign gene into a host cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Restriction enzyme" },
              { id: "b", text: "Ligase" },
              { id: "c", text: "Vector" },
              { id: "d", text: "Antibiotic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vector", statement: "A DNA molecule (e.g. plasmid) used to deliver a foreign gene into a host cell." },
            ],
            steps: [
              { reasoning: "Vectors carry the insert; plasmids are the common bacterial vector.", working: "vector = carrier", marks: 1, markCode: "M" },
              { reasoning: "Restriction enzymes cut, ligase joins, antibiotics select — none is the vector itself.", working: "exclude others", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Vector",
            commonErrors: ["Confusing vector with the enzymes used to build the construct."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-genetic-engineering-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "In a genetic engineering experiment, 200 bacteria are transformed with a plasmid carrying both the human insulin gene and an ampicillin-resistance gene. After plating on ampicillin medium, 30 colonies grow. Each colony is then tested for insulin production and 12 test positive. Calculate: (a) the transformation efficiency as a percentage; (b) the percentage of transformed bacteria that produce insulin.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Transformation efficiency (%)", answer: 15 },
              { label: "(b) Insulin-positive (%)", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage calculation", statement: "Percentage = part / whole × 100." },
            ],
            steps: [
              { reasoning: "Transformation efficiency uses all bacteria plated as the denominator.", working: "30 / 200", marks: 1, markCode: "M" },
              { reasoning: "(a) 30 / 200 × 100 = 15%.", working: "15", marks: 1, markCode: "A" },
              { reasoning: "(b) Of the 30 transformants, 12 produce insulin: 12 / 30 × 100 = 40%.", working: "12 / 30 = 40", marks: 1, markCode: "M" },
              { reasoning: "The percentage is 40%.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15%; (b) 40%",
            commonErrors: ["Using the wrong denominator for part (b) — it should be the 30 transformants, not the original 200."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "biosl-u6-industrial-biotech",
      title: "Enzymes, fermentation and tissue culture",
      skill: "Explain how enzymes, fermentation and micropropagation are used in industry and evaluate their advantages.",
      lesson: {
        sections: [
          {
            heading: "Industrial enzymes",
            body: "Enzymes catalyse reactions at low temperatures with high specificity. In industry, **immobilised enzymes** are attached to inert supports so they are not consumed and can be reused continuously — used in lactose-free milk, biological washing powders, antibiotic production and biofuel processing. Advantages: high specificity, mild conditions, easy separation of product.",
          },
          {
            heading: "Fermentation",
            body: "**Fermentation** cultures microorganisms (bacteria, fungi, yeast) in large fermenters with controlled temperature, pH, oxygen and nutrients. Products include penicillin, insulin, citric acid, single-cell protein and **biofuels** such as ethanol. After growth, the product is extracted and purified; conditions are optimised for maximum yield.",
          },
          {
            heading: "Tissue culture and cloning",
            body: "**Micropropagation** grows plant cells/tissues on sterile nutrient agar to produce many identical plantlets quickly — used for disease-free stock and rare species. **Animal cloning** by nuclear transfer produces genetically identical animals; embryo splitting is a simpler method. Uses include preserving endangered species and producing consistent livestock, but raises welfare and biodiversity concerns.",
          },
        ],
        keyFormulas: [
          { name: "Immobilised enzyme", statement: "Enzyme bound to support → reusable, easily separated, continuous process" },
          { name: "Fermentation controls", statement: "Temperature, pH, oxygen, nutrients and sterility must be controlled for max yield" },
          { name: "Micropropagation", statement: "Sterile tissue culture → many identical, disease-free plantlets" },
        ],
        workedExample: {
          problem: "Why are enzymes in washing powders often immobilised or engineered to work at lower temperatures?",
          solution: "Immobilised enzymes can be reused and separated from the wash water; engineered enzymes remain active at cooler temperatures, saving energy while still breaking down stains.",
        },
      },
      questions: [
        {
          id: "biosl-u6-industrial-biotech-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is an immobilised enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An enzyme that has been frozen for storage" },
              { id: "b", text: "An enzyme attached to an inert support so it can be reused" },
              { id: "c", text: "An enzyme that only works in animals" },
              { id: "d", text: "An enzyme that cannot be denatured" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Immobilised enzyme", statement: "Enzyme bound to an inert support, allowing reuse and easy separation in industry." },
            ],
            steps: [
              { reasoning: "Immobilisation attaches the enzyme to a support so it is not consumed with the reaction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Enzyme attached to a support for reuse",
            commonErrors: ["Thinking immobilised means inactive or frozen."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which factors must be controlled in a fermenter to maximise microbial yield?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the colour of the vessel" },
              { id: "b", text: "Temperature, pH, oxygen supply and nutrient concentration" },
              { id: "c", text: "Only the size of the vessel" },
              { id: "d", text: "Light intensity only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fermentation conditions", statement: "Microbial growth and product formation depend on temperature, pH, oxygen, nutrients and sterility." },
            ],
            steps: [
              { reasoning: "Each factor affects enzyme activity and microbial metabolism; all must be optimised.", working: "temperature, pH, O2, nutrients", marks: 1, markCode: "M" },
              { reasoning: "Sterility prevents contamination by other organisms.", working: "sterility", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Temperature, pH, oxygen and nutrients",
            commonErrors: ["Listing only one factor — all growth conditions matter."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A company wants to produce a protein drug using yeast in a fermenter. The yield is low. Which change is most likely to increase yield?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase the temperature to 80 °C to speed up reactions" },
              { id: "b", text: "Optimise temperature, pH, oxygen and nutrient supply for the yeast strain" },
              { id: "c", text: "Remove all nutrients so the yeast works harder" },
              { id: "d", text: "Expose the fermenter to bright light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimising fermentation", statement: "Yield is maximised by matching conditions to the organism's optimum and providing adequate nutrients and oxygen." },
            ],
            steps: [
              { reasoning: "Each organism has an optimum temperature and pH; 80 °C would denature yeast enzymes.", working: "optimum conditions needed", marks: 1, markCode: "M" },
              { reasoning: "Adequate oxygen and nutrients support growth; removing nutrients would kill the culture.", working: "resources needed", marks: 1, markCode: "M" },
              { reasoning: "Systematic optimisation of all conditions is the correct approach to raise yield.", working: "optimise all factors", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Optimise temperature, pH, oxygen and nutrients",
            commonErrors: ["Thinking harsher conditions increase yield — they usually kill the culture."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A pharmaceutical company produces human insulin by fermenting genetically modified bacteria. Batch yields vary between 40 and 90 units per litre.",
          parts: [
            { label: "a", prompt: "State three variables that could be controlled to reduce yield variation.", marks: 2 },
            { label: "b", prompt: "Explain how an immobilised enzyme might be used to purify the insulin product.", marks: 2 },
            { label: "c", prompt: "Describe one advantage of producing insulin in bacteria rather than extracting it from animals.", marks: 2 },
            { label: "d", prompt: "Evaluate the use of tissue culture to produce disease-free plant stock for insulin-producing crops (e.g. safflower).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fermentation control", statement: "Yield consistency requires controlled temperature, pH, oxygen, nutrients and sterile conditions." },
            ],
            steps: [
              { part: "a", reasoning: "Any three valid controlled variables: temperature, pH, dissolved oxygen, nutrient concentration, inoculum size, sterility.", working: "e.g. temp, pH, O2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three distinct variables correctly identified.", working: "three controls", marks: 1, markCode: "A" },
              { part: "b", reasoning: "An immobilised affinity enzyme (e.g. antibody or protease) bound to a column can bind insulin specifically and be reused.", working: "affinity capture", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This separates insulin from other proteins efficiently and the enzyme column can be reused continuously.", working: "reusable separation", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bacterial production gives a consistent, pathogen-free supply at low cost without relying on animal donors.", working: "consistent + safe + cheap", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At least one clear advantage stated.", working: "one advantage", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: tissue culture produces many identical, disease-free plants quickly, ideal for uniform crops.", working: "disease-free clones at scale", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Limitations: requires sterile conditions and skilled labour; genetic uniformity reduces resilience to new pests or climate change.", working: "cost + uniformity risk", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Temperature, pH, oxygen/nutrients, sterility. (b) Immobilised affinity enzyme captures insulin specifically and is reusable. (c) Consistent, safe, cheap supply. (d) Useful for disease-free uniform stock but costly and reduces genetic diversity.",
            commonErrors: ["Listing variables that cannot realistically be controlled.", "Forgetting that tissue culture produces clones, reducing diversity."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept alternative valid purification methods in (b).",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why are enzymes preferred over chemical catalysts in many industrial processes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They work at very high temperatures" },
              { id: "b", text: "They are highly specific and work under mild conditions" },
              { id: "c", text: "They are consumed in the reaction" },
              { id: "d", text: "They produce toxic by-products" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enzyme advantages", statement: "Enzymes are specific, efficient and operate at low temperatures and near-neutral pH, saving energy." },
            ],
            steps: [
              { reasoning: "Enzymes catalyse specific reactions under mild conditions, unlike harsh chemical catalysts.", working: "specific + mild", marks: 1, markCode: "M" },
              { reasoning: "They are reusable and not consumed, unlike many chemical catalysts.", working: "not consumed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Specific and work under mild conditions",
            commonErrors: ["Thinking enzymes need high temperatures — heat denatures them."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main industrial advantage of immobilising an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enzyme becomes more specific" },
              { id: "b", text: "The enzyme can be reused and easily separated from the product" },
              { id: "c", text: "The enzyme works at higher temperatures" },
              { id: "d", text: "The enzyme is no longer a protein" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Immobilised enzymes", statement: "Binding to a support allows continuous reuse and easy product separation." },
            ],
            steps: [
              { reasoning: "Immobilisation prevents the enzyme being washed away with the product.", working: "reusable", marks: 1, markCode: "M" },
              { reasoning: "The product can flow past the fixed enzyme and be collected separately.", working: "easy separation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reusable and easily separated",
            commonErrors: ["Claiming immobilisation changes the enzyme's specificity — it only changes its physical handling."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is micropropagation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing plant cells or tissues in sterile nutrient medium to produce clones" },
              { id: "b", text: "Propagating plants by seed only" },
              { id: "c", text: "Cloning animals in laboratories" },
              { id: "d", text: "Breeding plants for larger fruits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Micropropagation", statement: "Sterile tissue culture producing many genetically identical plantlets." },
            ],
            steps: [
              { reasoning: "Micropropagation uses tissue culture on sterile agar with nutrients and hormones.", working: "sterile tissue culture", marks: 1, markCode: "M" },
              { reasoning: "The product is many identical, disease-free clones quickly.", working: "clones at scale", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Growing plant tissue in sterile medium to produce clones",
            commonErrors: ["Confusing micropropagation with seed propagation or animal cloning."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A fermenter initially produces 40 g/L of a product. After changing the medium composition, the yield rises to 70 g/L. Calculate: (a) the percentage increase in yield; (b) the yield in kg from a 500 L fermenter at the improved rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percentage increase (%)", answer: 75 },
              { label: "(b) Total kg from 500 L", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase = (new − old) / old × 100; total = concentration × volume." },
            ],
            steps: [
              { reasoning: "Increase = 70 − 40 = 30 g/L; percentage = 30 / 40 × 100 = 75%.", working: "30/40 = 0.75", marks: 1, markCode: "M" },
              { reasoning: "(a) 75%.", working: "75", marks: 1, markCode: "A" },
              { reasoning: "(b) 70 g/L × 500 L = 35 000 g = 35 kg.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "The total yield is 35 kg.", working: "35 kg", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 75%; (b) 35 kg",
            commonErrors: ["Forgetting to convert grams to kilograms, or dividing by the new yield."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "An enzyme's activity is measured at different temperatures: 30% at 20 °C, 100% at 37 °C and 10% at 60 °C. Calculate: (a) the activity at 20 °C as a fraction of maximum; (b) the percentage of maximum activity lost when temperature rises from 37 °C to 60 °C.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Fraction of max at 20 °C", answer: 0.3 },
              { label: "(b) Percentage lost", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature and enzymes", statement: "Activity rises to an optimum then falls sharply as the enzyme denatures." },
            ],
            steps: [
              { reasoning: "30% activity corresponds to a fraction of 0.3 of the maximum.", working: "0.3", marks: 1, markCode: "M" },
              { reasoning: "(a) 0.3.", working: "0.3", marks: 1, markCode: "A" },
              { reasoning: "(b) Activity falls from 100% to 10%, a loss of 90%.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.3; (b) 90%",
            commonErrors: ["Reporting 10% as the loss instead of the 90% drop from maximum."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Yeast can be used to ferment sugars into ethanol for use as a biofuel. A bioreactor contains 10 000 L of culture.",
          parts: [
            { label: "a", prompt: "Explain why ethanol production by fermentation is considered renewable compared with fossil fuels.", marks: 2 },
            { label: "b", prompt: "Discuss two environmental concerns associated with large-scale biofuel production.", marks: 2 },
            { label: "c", prompt: "Evaluate whether biofuels should replace fossil fuels for transport.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biofuels", statement: "Fermentation of plant sugars gives ethanol — renewable because the carbon originates from recently grown biomass." },
            ],
            steps: [
              { part: "a", reasoning: "Plants absorb CO2 while growing, so burning the ethanol releases carbon that was recently fixed — a short carbon cycle.", working: "short carbon cycle", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fossil fuels release carbon stored for millions of years, increasing atmospheric CO2.", working: "vs fossil carbon", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two valid concerns: land use change/deforestation for feedstock, water use, fertiliser pollution, food vs fuel competition, net energy balance.", working: "e.g. land use + water", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two distinct concerns identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Biofuels reduce net CO2 but cannot fully replace fossil fuels due to land, water and energy constraints.", working: "partial replacement", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A balanced evaluation weighing benefits against environmental costs is required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Carbon recently fixed by plants — short cycle, lower net CO2. (b) Land-use change, water/fertiliser use, food competition. (c) Useful supplement but cannot fully replace fossil fuels.",
            commonErrors: ["Claiming biofuels release no CO2 — they release CO2, but it was recently absorbed.", "Ignoring land and water costs."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A plant nursery wants to produce 10 000 identical, disease-free banana plantlets from a single disease-resistant parent plant.",
          parts: [
            { label: "a", prompt: "Describe how tissue culture (micropropagation) could be used to achieve this.", marks: 2 },
            { label: "b", prompt: "Explain why the resulting plants would be disease-free and genetically identical.", marks: 2 },
            { label: "c", prompt: "Suggest two practical challenges of micropropagation at this scale.", marks: 2 },
            { label: "d", prompt: "Evaluate whether micropropagation is appropriate for reintroducing a rare wild orchid to the wild.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Micropropagation", statement: "Sterile culture of plant tissue producing genetically identical plantlets." },
            ],
            steps: [
              { part: "a", reasoning: "Sterile explants from the parent are placed on nutrient agar with growth hormones.", working: "explant on agar", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The tissue multiplies (callus/shoots) and plantlets are transferred to soil once rooted.", working: "propagate + harden off", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sterile conditions exclude pathogens; all plantlets descend from one cell line, so they are clones.", working: "sterile + clonal", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Genetic identity and disease-free status are the key advantages over seed propagation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any two valid challenges: cost of sterile facilities and skilled labour, slow multiplication rate, contamination risk, energy use, genetic uniformity.", working: "e.g. cost + contamination", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two distinct challenges identified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: can produce many plants for reintroduction quickly; drawback: clones have low genetic diversity, and lab-grown plants may not survive wild conditions without acclimatisation.", working: "numbers vs diversity", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Appropriate as a supplement with habitat protection and genetic diversity management, not alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sterile explants on hormone agar multiply into plantlets, then transferred to soil. (b) Sterility excludes pathogens; all are clones of one genotype. (c) Cost/labour, contamination, low diversity. (d) Useful supplement but low diversity and hardening-off needed.",
            commonErrors: ["Forgetting the aseptic (sterile) requirement.", "Claiming micropropagated plants have genetic diversity."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 A1 (d).",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A dairy company wants to produce lactose-free milk. Lactase enzyme is used to break down lactose. The enzyme is expensive and cannot be reused if added directly to the milk.",
          parts: [
            { label: "a", prompt: "Explain how immobilising the lactase enzyme would solve the cost problem.", marks: 2 },
            { label: "b", prompt: "Suggest a suitable support material for the enzyme and explain why.", marks: 2 },
            { label: "c", prompt: "State two other industrial applications of immobilised enzymes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Immobilised enzymes", statement: "Enzyme bound to inert support → reusable, easily separated, continuous process." },
            ],
            steps: [
              { part: "a", reasoning: "Immobilised lactase stays in the reactor while milk flows through, so one batch of enzyme treats many batches of milk.", working: "reusable in reactor", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The enzyme is not consumed or lost with the product, drastically reducing enzyme cost per litre.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any suitable inert support: alginate beads, silica, cellulose membrane, porous glass.", working: "e.g. alginate beads", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It must be inert, stable and allow substrate/product to diffuse through while retaining the enzyme.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any two valid applications: biological washing powders, antibiotic production, biofuel processing, glucose isomerase for HFCS, industrial proteases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two distinct applications identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reusable enzyme column — enzyme not consumed per batch. (b) Inert porous support (alginate, silica) allowing diffusion. (c) e.g. washing powders, antibiotic or biofuel production.",
            commonErrors: ["Suggesting the enzyme is destroyed after use — immobilisation prevents this.", "Choosing a support that would react with the enzyme."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "An immobilised enzyme reactor uses 50 units of enzyme. Each unit produces 2 g of product per hour and the reactor runs continuously. Calculate: (a) the hourly output of the reactor; (b) the output after 72 hours; (c) the number of units needed for an output of 400 g per hour.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) g/hour", answer: 100 },
              { label: "(b) g after 72 h", answer: 7200 },
              { label: "(c) Units needed", answer: 200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate × time", statement: "Output = rate × time; units = required output / output per unit." },
            ],
            steps: [
              { reasoning: "50 units × 2 g/hour = 100 g/hour.", working: "100 g/h", marks: 1, markCode: "M" },
              { reasoning: "(a) 100 g per hour.", working: "100", marks: 1, markCode: "A" },
              { reasoning: "(b) 100 × 72 = 7200 g.", working: "7200", marks: 1, markCode: "A" },
              { reasoning: "(c) 400 / 2 = 200 units.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "200 units are needed.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100 g/hour; (b) 7200 g; (c) 200 units",
            commonErrors: ["Multiplying by 50 again in part (c) — the requirement is per unit."],
            examinerNote: "M1 A1 A1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a product typically made by fermentation of microorganisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crude oil" },
              { id: "b", text: "Penicillin" },
              { id: "c", text: "Granite" },
              { id: "d", text: "Steel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fermentation products", statement: "Antibiotics, insulin, citric acid, single-cell protein and biofuels are made by fermenting microbes." },
            ],
            steps: [
              { reasoning: "Penicillin is produced by fermenting the fungus Penicillium.", working: "Penicillium → penicillin", marks: 1, markCode: "M" },
              { reasoning: "The other options are mined or manufactured, not fermented.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Penicillin",
            commonErrors: ["Choosing crude oil — biofuels are fermented, fossil fuels are not."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why is sterility essential in a fermentation vessel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To prevent contamination by other microorganisms that would compete for nutrients or spoil the product" },
              { id: "b", text: "To make the vessel airtight" },
              { id: "c", text: "To increase the temperature of the culture" },
              { id: "d", text: "To supply oxygen to the culture" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aseptic fermentation", statement: "Only the desired organism should grow; contaminants compete for nutrients and may produce toxins." },
            ],
            steps: [
              { reasoning: "Contaminating microbes would consume nutrients and may produce unwanted products or toxins.", working: "contamination risk", marks: 1, markCode: "M" },
              { reasoning: "Sterility ensures only the production strain grows, giving consistent yield.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To prevent contamination",
            commonErrors: ["Confusing sterility with oxygen supply or temperature control."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-industrial-biotech-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A fermenter batch yields 500 g of product. Optimisation raises the yield by 20%. The company runs 4 batches per week. Calculate: (a) the yield of one optimised batch; (b) the total weekly output after optimisation.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Yield per optimised batch (g)", answer: 600 },
              { label: "(b) Weekly output (g)", answer: 2400 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "New value = old × (1 + percentage/100); total = per-batch × batches." },
            ],
            steps: [
              { reasoning: "Increase = 500 × 0.20 = 100 g; new yield = 600 g per batch.", working: "500 × 1.2 = 600", marks: 1, markCode: "M" },
              { reasoning: "(a) 600 g.", working: "600", marks: 1, markCode: "A" },
              { reasoning: "(b) 600 × 4 = 2400 g per week.", working: "2400", marks: 1, markCode: "M" },
              { reasoning: "Weekly output is 2400 g (2.4 kg).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 600 g; (b) 2400 g",
            commonErrors: ["Adding 20 g instead of 20% (100 g), or multiplying weekly output by the wrong batch count."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
      ],
    },
  ],
};
