import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olcs-u5-lesson-5-2",
  code: "5-2",
  title: "Digital Currency and Blockchain",
  goal: "I CAN explain digital currency and how blockchain provides a secure distributed ledger.",
  standards: ["2210 5.2.1", "2210 5.2.2"],
  vocabulary: [
    { term: "Digital currency", definition: "Electronic money existing only in digital form — e.g. Bitcoin, central bank digital currencies." },
    { term: "Cryptocurrency", definition: "Digital currency secured by cryptography and a decentralised ledger." },
    { term: "Blockchain", definition: "Distributed ledger of transactions grouped into blocks, linked and secured by cryptography." },
    { term: "Decentralised", definition: "No single controlling authority — many copies of the ledger across computers." },
    { term: "Mining", definition: "Process of validating transactions and adding blocks to a blockchain using computation." },
    { term: "Wallet", definition: "Software holding your digital currency keys and balance." },
  ],
  concepts: [
    {
      id: "olcs-u5-digital-currency",
      title: "Digital currency",
      skill: "Explain digital money, its advantages and risks, and how it differs from physical cash.",
      lesson: {
        sections: [
          { heading: "What it is", body: "Digital currency is money that exists only electronically — no physical notes/coins. Examples: cryptocurrencies (Bitcoin, Ethereum) and central bank digital currencies (CBDCs). Transactions are verified and recorded on a distributed ledger." },
          { heading: "Advantages", body: "- Fast, cheap cross-border transfers.\n- No physical cash handling.\n- Potentially more inclusive (needs only internet).\n- Programmable money (smart contracts)." },
          { heading: "Risks", body: "- **Volatility**: values can swing wildly.\n- **Security**: hacked wallets, lost keys = lost money.\n- **Illegal use**: anonymity can aid crime.\n- **No central protection**: no bank to reverse fraud.\n- **Energy use**: proof-of-work mining is energy-hungry." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why can't a user recover funds if they lose their crypto wallet keys?",
          solution: "There's no central authority — the keys are the only proof of ownership, so losing them means losing access permanently.",
        },
      },
      questions: [
        {
          id: "olcs-u5-dc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Digital currency differs from cash because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exists only electronically" }, { id: "b", text: "Is made of metal" }, { id: "c", text: "Is printed on paper" }, { id: "d", text: "Cannot be spent online" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Digital currency", statement: "Electronic only." }], steps: [{ reasoning: "Digital = electronic only.", working: "\\text{electronic}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Exists electronically" },
        },
        {
          id: "olcs-u5-dc-q2", difficulty: "core", totalMarks: 2,
          stem: "State one advantage and one risk of digital currency.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Crypto trade-offs", statement: "Fast/inclusive vs volatile/insecure." }], steps: [
            { reasoning: "Advantage: fast cheap transfers.", working: "\\text{fast}", marks: 1, markCode: "M" },
            { reasoning: "Risk: volatility/lost keys.", working: "\\text{volatility}", marks: 1, markCode: "A" },
          ], finalAnswer: "Fast transfers vs volatility/security risks." },
        },
        {
          id: "olcs-u5-dc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the volatility of cryptocurrencies is a concern for users.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Volatility", statement: "Value swings → uncertain purchasing power." }], steps: [
            { reasoning: "Prices can change dramatically in short time.", working: "\\text{price swings}", marks: 1, markCode: "M" },
            { reasoning: "Savings could lose value overnight.", working: "\\text{value loss}", marks: 1, markCode: "M" },
            { reasoning: "Hard to use as stable money/pricing.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Wild price swings make value uncertain — risky for saving and pricing goods." },
        },
        {
          id: "olcs-u5-dc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Digital currency review.",
          parts: [
            { label: "a", prompt: "Define digital currency.", marks: 2 },
            { label: "b", prompt: "State two advantages.", marks: 2 },
            { label: "c", prompt: "State two risks.", marks: 2 },
            { label: "d", prompt: "Explain why lost wallet keys are unrecoverable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Digital currency", statement: "Electronic money on distributed ledger." },
          ], steps: [
            { part: "a", reasoning: "Money existing only electronically.", working: "\\text{electronic}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fast/cheap transfers.", working: "\\text{fast}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Inclusive/programmable.", working: "\\text{inclusive}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Volatility.", working: "\\text{volatility}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Security/lost keys.", working: "\\text{security}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Keys prove ownership — no central authority.", working: "\\text{keys=ownership}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "No bank/company can reset them.", working: "\\text{no reset}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Lost keys = permanently lost funds.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) electronic money (b) fast/inclusive (c) volatile/insecure (d) keys are sole proof of ownership" },
        },
      ],
    },
    {
      id: "olcs-u5-blockchain",
      title: "Blockchain",
      skill: "Explain how a blockchain records transactions securely and why it's tamper-resistant.",
      lesson: {
        sections: [
          { heading: "Structure", body: "A **blockchain** is a distributed ledger:\n\n- Transactions are grouped into **blocks**.\n- Each block contains a **hash** (digital fingerprint) of the previous block — forming a chain.\n- Copies of the entire ledger exist on many computers (nodes).\n- New blocks are added by **mining**: nodes compete to solve a computational puzzle, and the winner broadcasts the block for others to verify." },
          { heading: "Why tamper-resistant", body: "- Changing an old transaction would change its block's hash, breaking the chain — detectable.\n- All nodes hold copies; a false version would be rejected by the network.\n- No single authority to corrupt — decentralised consensus decides the truth." },
          { heading: "Uses beyond crypto", body: "Supply-chain tracking, digital identity, smart contracts, voting systems — anywhere a transparent tamper-proof record is valuable." },
        ],
        keyFormulas: [
          { name: "Chain", statement: "Each block stores hash of previous block" },
        ],
        workedExample: {
          problem: "Why is it hard to alter a transaction buried deep in a blockchain?",
          solution: "Changing it alters that block's hash and every subsequent block's link — the mismatch is detected across all nodes.",
        },
      },
      questions: [
        {
          id: "olcs-u5-bc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A blockchain is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A distributed ledger of transactions" }, { id: "b", text: "A type of cable" }, { id: "c", text: "A search engine" }, { id: "d", text: "A single database on one server" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Blockchain", statement: "Distributed transaction ledger." }], steps: [{ reasoning: "Blockchain = distributed ledger.", working: "\\text{ledger}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Distributed ledger" },
        },
        {
          id: "olcs-u5-bc-q2", difficulty: "core", totalMarks: 2,
          stem: "What links each block to the previous one in a blockchain?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Hash link", statement: "Block stores previous block's hash." }], steps: [
            { reasoning: "A cryptographic hash.", working: "\\text{hash}", marks: 1, markCode: "M" },
            { reasoning: "Of the previous block.", marks: 1, markCode: "A" },
          ], finalAnswer: "A hash (fingerprint) of the previous block." },
        },
        {
          id: "olcs-u5-bc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a blockchain is described as tamper-resistant.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Tamper-resistance", statement: "Hash chain + distributed copies." }], steps: [
            { reasoning: "Changing data changes the hash.", working: "\\text{hash change}", marks: 1, markCode: "M" },
            { reasoning: "Breaks the chain — detectable.", working: "\\text{detectable}", marks: 1, markCode: "M" },
            { reasoning: "All nodes hold copies — can't fake consensus.", working: "\\text{distributed}", marks: 1, markCode: "M" },
            { reasoning: "Tampering is effectively prevented.", marks: 1, markCode: "A" },
          ], finalAnswer: "Hash-chaining and distributed copies make any alteration detectable and rejected by the network." },
        },
        {
          id: "olcs-u5-bc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Blockchain review.",
          parts: [
            { label: "a", prompt: "Describe how transactions are grouped in a blockchain.", marks: 2 },
            { label: "b", prompt: "Explain what mining does.", marks: 2 },
            { label: "c", prompt: "Why is a blockchain decentralised?", marks: 2 },
            { label: "d", prompt: "Give one non-cryptocurrency use of blockchain.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Decentralisation", statement: "No single authority controls the ledger." },
          ], steps: [
            { part: "a", reasoning: "Transactions grouped into blocks.", working: "\\text{blocks}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Each block links via hash.", working: "\\text{hash link}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Nodes solve puzzles to validate/add blocks.", working: "\\text{validate}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Winner broadcasts for verification.", working: "\\text{broadcast}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Copies on many nodes — no single owner.", working: "\\text{many copies}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Consensus decides truth.", working: "\\text{consensus}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Supply chain / identity / voting / smart contracts.", working: "\\text{supply chain}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Explains tamper-proof benefit.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid use case.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) blocks+hash (b) validate/add (c) many copies (d) supply chain/identity/voting" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u5-5-2-notes", title: "Digital currency and blockchain — notes", summary: "Electronic money, risks, distributed ledger, mining.",
      sections: [
        { heading: "Digital currency", body: "Electronic-only money; fast transfers but volatile and key-dependent." },
        { heading: "Blockchain", body: "Blocks linked by hashes on many nodes; mining validates; tamper-evident and decentralised." },
      ] },
  ],
};
