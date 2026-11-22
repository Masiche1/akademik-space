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
            { id: "a", text: "Cannot be spent online" },
            { id: "b", text: "Is printed on paper" },
            { id: "c", text: "Exists only electronically" },
            { id: "d", text: "Is made of metal" },
          ], correctChoiceId: "c" },
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
        {
          id: "olcs-u5-dc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Digital currency is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Paper banknotes" },
            { id: "b", text: "Money that exists only electronically" },
            { id: "c", text: "Metal coins" },
            { id: "d", text: "A type of cheque" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Digital currency", statement: "Electronic-only money." }], steps: [{ reasoning: "Exists only electronically.", working: "\\text{electronic}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Electronic-only money" },
        },
        {
          id: "olcs-u5-dc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many advantages of digital currency are listed: fast transfers, no cash handling, inclusivity, programmability?",
          response: { type: "numeric", parts: [{ label: "Number of advantages", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Advantages", statement: "Fast, cashless, inclusive, programmable." }], steps: [
            { reasoning: "Four advantages listed.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-dc-q7", difficulty: "core", totalMarks: 1,
          stem: "If a user loses their crypto wallet keys, their funds are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Automatically regenerated" },
            { id: "b", text: "Refunded by a bank" },
            { id: "c", text: "Recovered by an exchange" },
            { id: "d", text: "Permanently lost" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Key ownership", statement: "Keys are the only proof of ownership." }], steps: [{ reasoning: "No central authority can reset keys.", working: "\\text{no reset}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Permanently lost" },
        },
        {
          id: "olcs-u5-dc-q8", difficulty: "core", totalMarks: 1,
          stem: "How many of these are risks of digital currency: volatility, fast transfers, lost keys, programmability?",
          response: { type: "numeric", parts: [{ label: "Number of risks", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Risks", statement: "Volatility and security risks." }], steps: [
            { reasoning: "Volatility and lost keys are risks; fast transfers and programmability are advantages.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u5-dc-q9", difficulty: "core", totalMarks: 1,
          stem: "Which is NOT an advantage of digital currency?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fast cross-border transfers" },
            { id: "b", text: "No physical cash handling" },
            { id: "c", text: "Guaranteed stable value" },
            { id: "d", text: "Programmable money" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Volatility", statement: "Value is not stable." }], steps: [{ reasoning: "Cryptocurrency value swings — not guaranteed stable.", working: "\\text{volatile}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Guaranteed stable value" },
        },
        {
          id: "olcs-u5-dc-q10", difficulty: "core", totalMarks: 2,
          stem: "Why is digital currency risky for saving money?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Volatility", statement: "Value can fall sharply." }], steps: [
            { reasoning: "Prices can drop dramatically.", working: "\\text{price drop}", marks: 1, markCode: "M" },
            { reasoning: "Savings could lose value quickly.", working: "\\text{value loss}", marks: 1, markCode: "A" },
          ], finalAnswer: "Wild price swings mean savings can lose value quickly." },
        },
        {
          id: "olcs-u5-dc-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A CBDC (central bank digital currency) differs from Bitcoin mainly because it is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Made of metal" },
            { id: "b", text: "Printed on paper" },
            { id: "c", text: "Not digital" },
            { id: "d", text: "Issued by a central bank" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "CBDC", statement: "Central bank digital currency." }], steps: [{ reasoning: "Issued by a central bank.", working: "\\text{central bank}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Issued by a central bank" },
        },
        {
          id: "olcs-u5-dc-q12", difficulty: "core", totalMarks: 1,
          stem: "How many keys does a user need to access their digital currency wallet?",
          response: { type: "numeric", parts: [{ label: "Number of keys", answer: 1 }] },
          markscheme: { principles: [{ kind: "definition", name: "Wallet key", statement: "Private key proves ownership." }], steps: [
            { reasoning: "One private key controls the wallet.", working: "1", marks: 1, markCode: "B" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u5-dc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why digital currency offers no central protection for users.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Decentralisation", statement: "No central authority to appeal to." }], steps: [
            { reasoning: "No bank or company controls the funds.", working: "\\text{no authority}", marks: 1, markCode: "M" },
            { reasoning: "Fraudulent transactions can't be reversed.", working: "\\text{no reversal}", marks: 1, markCode: "M" },
            { reasoning: "Users bear full responsibility for keys/security.", working: "\\text{self-custody}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "No central authority means no fraud reversal or recourse — users must protect their own keys." },
        },
        {
          id: "olcs-u5-dc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A 'smart contract' on a blockchain is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A paper contract" },
            { id: "b", text: "A self-executing agreement enforced by code" },
            { id: "c", text: "An email agreement" },
            { id: "d", text: "A bank loan" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Smart contract", statement: "Code that executes agreement terms." }], steps: [{ reasoning: "Self-executing agreement on the ledger.", working: "\\text{code}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Self-executing agreement" },
        },
        {
          id: "olcs-u5-dc-q15", difficulty: "core", totalMarks: 2,
          stem: "Count the advantages and risks of digital currency described in this lesson.",
          response: { type: "numeric", parts: [
            { label: "Advantages", answer: 4 },
            { label: "Risks", answer: 5 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Trade-offs", statement: "4 advantages, 5 risks listed." }], steps: [
            { reasoning: "Advantages: fast, cashless, inclusive, programmable.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Risks: volatility, security, illegal use, no protection, energy.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "4 advantages; 5 risks" },
        },
        {
          id: "olcs-u5-dc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Digital currency review.",
          parts: [
            { label: "a", prompt: "Define digital currency.", marks: 2 },
            { label: "b", prompt: "State two advantages.", marks: 2 },
            { label: "c", prompt: "State two risks.", marks: 2 },
            { label: "d", prompt: "Explain why volatility is a concern.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Digital currency", statement: "Electronic money on a distributed ledger." },
          ], steps: [
            { part: "a", reasoning: "Money existing only electronically.", working: "\\text{electronic}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fast/cheap transfers.", working: "\\text{fast}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Inclusive/programmable.", working: "\\text{inclusive}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Volatility.", working: "\\text{volatility}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Security/lost keys.", working: "\\text{security}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Prices can change dramatically in short time.", working: "\\text{swings}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Savings could lose value overnight.", working: "\\text{value loss}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Hard to use as stable money.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) electronic money (b) fast/inclusive (c) volatile/insecure (d) uncertain value" },
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
            { id: "a", text: "A search engine" },
            { id: "b", text: "A type of cable" },
            { id: "c", text: "A single database on one server" },
            { id: "d", text: "A distributed ledger of transactions" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u5-bc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Mining on a blockchain is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Validate transactions and add blocks" },
            { id: "b", text: "Store photographs" },
            { id: "c", text: "Print banknotes" },
            { id: "d", text: "Speed up the internet" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Mining", statement: "Validates transactions, adds blocks." }], steps: [{ reasoning: "Mining validates and adds blocks.", working: "\\text{validate}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Validate transactions and add blocks" },
        },
        {
          id: "olcs-u5-bc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Each block stores a hash of the previous block. In a chain of 5 blocks, how many hash links connect them?",
          response: { type: "numeric", parts: [{ label: "Hash links", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Hash chain", statement: "Each block links to the previous one." }], steps: [
            { reasoning: "5 blocks have 4 links between them.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-bc-q7", difficulty: "core", totalMarks: 1,
          stem: "A hash in a blockchain is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A password" },
            { id: "b", text: "A type of coin" },
            { id: "c", text: "A network cable" },
            { id: "d", text: "A digital fingerprint of data" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Hash", statement: "Digital fingerprint of data." }], steps: [{ reasoning: "Hash uniquely represents the block's data.", working: "\\text{fingerprint}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Digital fingerprint" },
        },
        {
          id: "olcs-u5-bc-q8", difficulty: "core", totalMarks: 1,
          stem: "If each block stores one hash of the previous block, how many hashes does a chain of 10 blocks contain?",
          response: { type: "numeric", parts: [{ label: "Number of hashes", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Hash chain", statement: "One hash per block." }], steps: [
            { reasoning: "Each of the 10 blocks stores one hash.", working: "10", marks: 1, markCode: "B" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u5-bc-q9", difficulty: "core", totalMarks: 1,
          stem: "A blockchain is tamper-resistant mainly because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hash-chaining plus distributed copies" },
            { id: "b", text: "It is stored offline" },
            { id: "c", text: "It uses no electricity" },
            { id: "d", text: "It is very small" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Tamper-resistance", statement: "Hash chain + many copies." }], steps: [{ reasoning: "Hash chain detects changes; copies prevent fakes.", working: "\\text{hash+copies}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Hash-chaining plus distributed copies" },
        },
        {
          id: "olcs-u5-bc-q10", difficulty: "core", totalMarks: 2,
          stem: "State two non-cryptocurrency uses of blockchain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Blockchain uses", statement: "Supply chain, identity, voting, contracts." }], steps: [
            { reasoning: "Any valid use: supply chain tracking, digital identity, voting.", working: "\\text{supply chain}", marks: 1, markCode: "M" },
            { reasoning: "Second valid use: smart contracts, identity, voting.", marks: 1, markCode: "A" },
          ], finalAnswer: "Supply-chain tracking, digital identity, voting, smart contracts (any two)." },
        },
        {
          id: "olcs-u5-bc-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Changing an old transaction buried in a blockchain is detected because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The chain becomes faster" },
            { id: "b", text: "Blocks are deleted automatically" },
            { id: "c", text: "It changes the block's hash and breaks the chain" },
            { id: "d", text: "Miners stop working" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Tamper-evidence", statement: "Alteration breaks hash links." }], steps: [{ reasoning: "Changed data → changed hash → broken chain.", working: "\\text{hash change}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** It changes the hash and breaks the chain" },
        },
        {
          id: "olcs-u5-bc-q12", difficulty: "core", totalMarks: 1,
          stem: "A blockchain network has 500 nodes, each holding a copy of the ledger. How many copies of the ledger exist?",
          response: { type: "numeric", parts: [{ label: "Number of copies", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Distributed ledger", statement: "One copy per node." }], steps: [
            { reasoning: "Each of the 500 nodes holds a copy.", working: "500", marks: 1, markCode: "B" },
          ], finalAnswer: "500" },
        },
        {
          id: "olcs-u5-bc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a decentralised ledger is harder to corrupt than a single database.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Decentralisation", statement: "No single point of control." }], steps: [
            { reasoning: "No single authority to attack or bribe.", working: "\\text{no single point}", marks: 1, markCode: "M" },
            { reasoning: "Many copies must agree for a change to count.", working: "\\text{consensus}", marks: 1, markCode: "M" },
            { reasoning: "Alterations are detected via the hash chain.", working: "\\text{hash chain}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "With no single authority and many copies checked by consensus, corrupting the record is far harder." },
        },
        {
          id: "olcs-u5-bc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The node that wins the mining puzzle…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stops the network" },
            { id: "b", text: "Becomes the owner of the chain" },
            { id: "c", text: "Broadcasts the new block for others to verify" },
            { id: "d", text: "Deletes old blocks" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Mining", statement: "Winner adds the block." }], steps: [{ reasoning: "Winner broadcasts the block for verification.", working: "\\text{broadcast}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Broadcasts the new block for verification" },
        },
        {
          id: "olcs-u5-bc-q15", difficulty: "core", totalMarks: 2,
          stem: "A blockchain has 8 blocks. How many blocks are there and how many hash links connect them?",
          response: { type: "numeric", parts: [
            { label: "Number of blocks", answer: 8 },
            { label: "Hash links", answer: 7 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Hash chain", statement: "n blocks have n-1 links." }], steps: [
            { reasoning: "8 blocks.", working: "8", marks: 1, markCode: "M" },
            { reasoning: "8-1 = 7 links.", working: "7", marks: 1, markCode: "A" },
          ], finalAnswer: "8 blocks; 7 links" },
        },
        {
          id: "olcs-u5-bc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Blockchain review.",
          parts: [
            { label: "a", prompt: "Define a blockchain.", marks: 2 },
            { label: "b", prompt: "Explain how blocks are linked.", marks: 2 },
            { label: "c", prompt: "What does mining do?", marks: 2 },
            { label: "d", prompt: "Explain tamper-resistance and give one non-crypto use.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Blockchain", statement: "Distributed ledger of hashed blocks." },
          ], steps: [
            { part: "a", reasoning: "Distributed ledger of transactions in blocks.", working: "\\text{ledger}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Each block stores previous block's hash.", working: "\\text{hash}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Forms a chain.", working: "\\text{chain}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Nodes solve puzzles to validate/add blocks.", working: "\\text{validate}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Winner broadcasts for verification.", working: "\\text{broadcast}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Hash chain + copies make changes detectable.", working: "\\text{detectable}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "One use: supply chain/identity/voting.", working: "\\text{supply chain}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) distributed ledger (b) hash links (c) validate/add blocks (d) detectable + supply chain" },
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
