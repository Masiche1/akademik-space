import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olcs-u2-lesson-2-2",
  code: "2-2",
  title: "Error Detection",
  goal: "I CAN explain parity, checksum, check digits and ARQ as methods of detecting transmission errors.",
  standards: ["2210 2.2.2", "2210 2.2.3", "2210 2.2.4"],
  vocabulary: [
    { term: "Parity bit", definition: "Extra bit added to make the total number of 1-bits odd or even, for error detection." },
    { term: "Checksum", definition: "Value calculated from the data and sent with it; receiver recalculates to verify." },
    { term: "Check digit", definition: "Extra digit appended to a code (e.g. ISBN, bank card) that validates the whole number." },
    { term: "Echo check", definition: "Receiver echoes data back; sender compares to detect errors." },
    { term: "ARQ", definition: "Automatic Repeat Query — receiver asks sender to resend any corrupted or missing data." },
  ],
  concepts: [
    {
      id: "olcs-u2-error-methods",
      title: "Parity, checksum and check digits",
      skill: "Apply parity, checksum and check-digit methods to detect errors.",
      lesson: {
        sections: [
          { heading: "Why errors happen", body: "Electrical interference, noisy cables and wireless signals can flip bits (0↔1) during transmission. Detection methods add redundant information so the receiver can spot corruption." },
          { heading: "Parity check", body: "An extra **parity bit** is chosen so the total count of 1-bits is always even (even parity) or odd (odd parity). Receiver recounts; a mismatch reveals an error.\n\nExample: data $1011$ has three 1s (odd). For even parity add $1$ → $10111$. If a bit flips, the count becomes even→odd mismatch... actually the receiver checks parity of received bits." },
          { heading: "Checksum", body: "Sender adds/sums the data (or a variant) producing a **checksum** sent alongside. Receiver recomputes and compares — mismatch means corruption. Used in IP/TCP headers." },
          { heading: "Check digits", body: "A digit computed from the other digits by a formula (e.g. ISBN-10 uses weighted sum mod 11). Used on barcodes, bank cards, product codes to catch typing/scanning errors." },
        ],
        keyFormulas: [
          { name: "Even parity", statement: "Total 1-bits must be even" },
          { name: "Detection only", statement: "These methods detect, not correct, errors" },
        ],
        workedExample: {
          problem: "Data $11010$ is sent with even parity. What parity bit is added, and what does the receiver check?",
          solution: "$11010$ has three 1s (odd) → add $1$ to make four. Receiver counts 1-bits in received data+parity; must be even.",
        },
      },
      questions: [
        {
          id: "olcs-u2-em-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A parity bit is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt the data" },
            { id: "b", text: "Detect transmission errors" },
            { id: "c", text: "Compress the file" },
            { id: "d", text: "Speed up transfer" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Parity", statement: "Redundant bit for error detection." }], steps: [{ reasoning: "Parity detects errors.", working: "\\text{detect}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Detect errors" },
        },
        {
          id: "olcs-u2-em-q2", difficulty: "core", totalMarks: 2,
          stem: "Data $10110$ needs even parity. What parity bit should be appended?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Even parity", statement: "Make 1-bit count even." }], steps: [
            { reasoning: "$10110$ has three 1s (odd).", working: "3", marks: 1, markCode: "M" },
            { reasoning: "Append $1$ → four 1s, even.", working: "1", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u2-em-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a check digit catches an error that parity might miss.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Check digits", statement: "Formula-based validation of whole code." }], steps: [
            { reasoning: "Parity only counts bits — two bit flips can cancel out.", working: "\\text{even flips missed}", marks: 1, markCode: "M" },
            { reasoning: "Check digit uses weighted formula over all digits.", working: "\\text{weighted sum}", marks: 1, markCode: "M" },
            { reasoning: "Most single errors change the computed digit.", marks: 1, markCode: "M" },
            { reasoning: "Used on ISBNs/cards/barcodes.", marks: 1, markCode: "A" },
          ], finalAnswer: "Check digits validate the whole code by formula, catching errors parity's bit count can miss." },
        },
        {
          id: "olcs-u2-em-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Error detection review.",
          parts: [
            { label: "a", prompt: "State the parity bit needed for $01101$ with odd parity.", marks: 2 },
            { label: "b", prompt: "Define checksum.", marks: 2 },
            { label: "c", prompt: "Give one example where check digits are used.", marks: 1 },
            { label: "d", prompt: "Explain why error detection methods cannot correct errors, and what ARQ adds.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "ARQ", statement: "Receiver requests retransmission of bad data." },
          ], steps: [
            { part: "a", reasoning: "$01101$ has three 1s (odd already).", working: "odd", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Odd parity needs odd count → append 0.", working: "0", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Value computed from data, sent alongside.", working: "\\text{computed value}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Receiver recalculates to verify.", working: "\\text{verify}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "ISBN / bank card / barcode.", working: "\\text{ISBN}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Detection only flags a problem; data still corrupt.", working: "\\text{flag only}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "ARQ asks sender to resend.", working: "\\text{resend}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Combines detection + correction by retransmission.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reliable delivery achieved.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 0 (b) computed verification value (c) ISBN/card (d) detection flags only; ARQ retransmits" },
        },
        {
          id: "olcs-u2-em-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The main purpose of a parity bit is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Detect single-bit errors" },
            { id: "b", text: "Correct all errors" },
            { id: "c", text: "Encrypt the message" },
            { id: "d", text: "Speed up transmission" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Parity", statement: "Detects (not corrects) errors." }], steps: [{ reasoning: "Parity only detects.", working: "\\text{detect}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Detect single-bit errors" },
        },
        {
          id: "olcs-u2-em-q6", difficulty: "core", totalMarks: 2,
          stem: "Data $11001$ is sent with even parity. What parity bit is appended?",
          response: { type: "numeric", parts: [{ label: "Parity bit", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Even parity", statement: "Total 1-bits must be even." }], steps: [
            { reasoning: "$11001$ has three 1s (odd).", working: "3", marks: 1, markCode: "M" },
            { reasoning: "Append 1 → four 1s, even.", working: "1", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u2-em-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Checksums are commonly used in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only keyboards" },
            { id: "b", text: "Only printers" },
            { id: "c", text: "Only monitors" },
            { id: "d", text: "IP and TCP headers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Checksum use", statement: "Used in network protocol headers." }], steps: [{ reasoning: "Checksums verify header/data integrity.", working: "\\text{IP/TCP}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** IP and TCP headers" },
        },
        {
          id: "olcs-u2-em-q8", difficulty: "core", totalMarks: 2,
          stem: "Data $1010$ needs odd parity. What parity bit is appended?",
          response: { type: "numeric", parts: [{ label: "Parity bit", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Odd parity", statement: "Total 1-bits must be odd." }], steps: [
            { reasoning: "$1010$ has two 1s (even).", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Append 1 → three 1s, odd.", working: "1", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u2-em-q9", difficulty: "core", totalMarks: 2,
          stem: "State one reason check digits are used on bank card numbers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Check digits", statement: "Catch typing/scanning errors." }], steps: [
            { reasoning: "They validate the whole number by formula.", working: "\\text{formula}", marks: 1, markCode: "M" },
            { reasoning: "Most single-digit errors are detected immediately.", marks: 1, markCode: "A" },
          ], finalAnswer: "They catch typing/scanning errors before a transaction is processed." },
        },
        {
          id: "olcs-u2-em-q10", difficulty: "core", totalMarks: 1,
          stem: "With simple parity checking, two bit errors in the same byte are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always detected" },
            { id: "b", text: "Always corrected" },
            { id: "c", text: "Often missed" },
            { id: "d", text: "Impossible" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Parity limit", statement: "Even number of flips can preserve parity." }], steps: [{ reasoning: "Two flips may keep the count valid.", working: "\\text{even flips}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Often missed" },
        },
        {
          id: "olcs-u2-em-q11", difficulty: "core", totalMarks: 2,
          stem: "How many 1-bits are in the data $101101$?",
          response: { type: "numeric", parts: [{ label: "Ones", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Bit count", statement: "Count the 1s for parity." }], steps: [
            { reasoning: "Digits: 1,0,1,1,0,1 → four 1s.", working: "1+0+1+1+0+1=4", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u2-em-q12", difficulty: "core", totalMarks: 2,
          stem: "What does the receiver do with a checksum to verify data?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recalculates it and compares with the received value" },
            { id: "b", text: "Encrypts it again" },
            { id: "c", text: "Sends it back" },
            { id: "d", text: "Deletes the data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Checksum verify", statement: "Recompute and compare." }], steps: [{ reasoning: "Receiver recomputes the checksum.", working: "\\text{recompute}", marks: 1, markCode: "M" }, { reasoning: "Mismatch reveals corruption.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Recalculates and compares" },
        },
        {
          id: "olcs-u2-em-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the limitation of parity checking and how a checksum improves on it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Detection strength", statement: "Parity misses even numbers of flips; checksum uses data values." }], steps: [
            { reasoning: "Parity only counts 1-bits — two flips can cancel.", working: "\\text{misses pairs}", marks: 1, markCode: "M" },
            { reasoning: "Checksum is computed from the actual data values.", working: "\\text{data sum}", marks: 1, markCode: "M" },
            { reasoning: "More bit changes are likely to alter the checksum.", marks: 1, markCode: "M" },
            { reasoning: "Still detection only — not correction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Parity can miss an even number of bit flips; a checksum over the data values detects a wider range of errors." },
        },
        {
          id: "olcs-u2-em-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Parity, checksum and check-digit methods can all…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Detect errors but not correct them" },
            { id: "b", text: "Correct errors automatically" },
            { id: "c", text: "Increase speed" },
            { id: "d", text: "Encrypt data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Detection only", statement: "These methods flag errors; ARQ corrects." }], steps: [{ reasoning: "All three detect only.", working: "\\text{detect only}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Detect but not correct" },
        },
        {
          id: "olcs-u2-em-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Data $1010110$ is sent with even parity. What parity bit is appended?",
          response: { type: "numeric", parts: [{ label: "Parity bit", answer: 0 }] },
          markscheme: { principles: [{ kind: "principle", name: "Even parity", statement: "Total 1-bits must be even." }], steps: [
            { reasoning: "$1010110$ has four 1s (already even).", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Append 0 to keep count even.", working: "0", marks: 1, markCode: "M" },
            { reasoning: "Correct bit.", working: "0", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "olcs-u2-em-q16", difficulty: "foundation", totalMarks: 1,
          stem: "A well-known real-world use of check digits is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "File compression" },
            { id: "b", text: "CPU clock speed" },
            { id: "c", text: "Screen resolution" },
            { id: "d", text: "ISBN book numbers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Check digit use", statement: "ISBNs, bank cards, barcodes." }], steps: [{ reasoning: "ISBN uses a check digit.", working: "\\text{ISBN}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** ISBN book numbers" },
        },
      ],
    },
    {
      id: "olcs-u2-arq",
      title: "Echo check and ARQ",
      skill: "Explain echo checking and automatic repeat query for reliable transmission.",
      lesson: {
        sections: [
          { heading: "Echo check", body: "The receiver immediately sends the received data **back** to the sender (echo). The sender compares the echo with what it sent — any difference reveals an error. Simple but doubles traffic; used on early networks and some terminal systems." },
          { heading: "ARQ", body: "**Automatic Repeat Query** is the general mechanism behind reliable protocols (e.g. TCP):\n\n1. Sender numbers packets.\n2. Receiver checks each packet.\n3. Receiver sends an acknowledgement (ACK) for good packets or a request (NAK) for bad/missing ones.\n4. Sender retransmits only what's needed.\n\nThis gives reliable delivery despite errors." },
          { heading: "Detection vs correction", body: "Parity/checksum/check digits **detect** errors. ARQ **corrects** them by retransmission. True error-correcting codes (e.g. Hamming) can fix errors without retransmission but are beyond this syllabus." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "In ARQ, what does the receiver send when a packet arrives corrupted?",
          solution: "A negative acknowledgement (NAK) or a request for that sequence number, prompting the sender to retransmit.",
        },
      },
      questions: [
        {
          id: "olcs-u2-arq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In an echo check, the receiver…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deletes bad packets silently" },
            { id: "b", text: "Encrypts the data" },
            { id: "c", text: "Compresses the data" },
            { id: "d", text: "Sends the data back for comparison" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Echo check", statement: "Data echoed back and compared." }], steps: [{ reasoning: "Echo = send back.", working: "\\text{echo back}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Sends data back" },
        },
        {
          id: "olcs-u2-arq-q2", difficulty: "core", totalMarks: 2,
          stem: "What does ARQ stand for and what does it do?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ARQ", statement: "Automatic Repeat Query — retransmit bad data." }], steps: [
            { reasoning: "Automatic Repeat Query.", working: "\\text{ARQ}", marks: 1, markCode: "M" },
            { reasoning: "Requests retransmission of corrupted/missing packets.", working: "\\text{retransmit}", marks: 1, markCode: "A" },
          ], finalAnswer: "Automatic Repeat Query — receiver asks sender to resend bad data." },
        },
        {
          id: "olcs-u2-arq-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how ARQ provides reliable data transfer over an unreliable channel.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "ARQ reliability", statement: "Detect + retransmit until correct." }], steps: [
            { reasoning: "Packets are numbered and checked.", working: "\\text{numbered}", marks: 1, markCode: "M" },
            { reasoning: "Receiver ACKs good, NAKs bad/missing.", working: "\\text{ACK/NAK}", marks: 1, markCode: "M" },
            { reasoning: "Sender retransmits only failed packets.", working: "\\text{retransmit}", marks: 1, markCode: "M" },
            { reasoning: "Result: data eventually arrives intact.", marks: 1, markCode: "A" },
          ], finalAnswer: "ARQ detects errors and retransmits until all data arrives correctly." },
        },
        {
          id: "olcs-u2-arq-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Reliable transmission review.",
          parts: [
            { label: "a", prompt: "State one drawback of the echo check.", marks: 2 },
            { label: "b", prompt: "Describe the steps of ARQ.", marks: 3 },
            { label: "c", prompt: "Distinguish error detection from error correction.", marks: 2 },
            { label: "d", prompt: "Why is TCP described as reliable while UDP is not?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "TCP vs UDP", statement: "TCP uses ARQ-style acknowledgement; UDP does not." },
          ], steps: [
            { part: "a", reasoning: "Doubles traffic — every byte sent twice.", working: "\\text{double traffic}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Slow for large transfers.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Sender numbers packets; receiver checks.", working: "\\text{number+check}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Receiver ACKs/NAKs.", working: "\\text{ACK/NAK}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Sender retransmits failures.", working: "\\text{resend}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Detection flags errors; correction fixes them.", working: "\\text{flag vs fix}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "ARQ corrects by retransmission.", working: "\\text{ARQ}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "TCP acknowledges and retransmits.", working: "\\text{ACK}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "UDP sends without guarantees — faster, lossy.", working: "\\text{no guarantee}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) double traffic (b) number/check/ACK/retransmit (c) detect vs fix (d) TCP reliable, UDP not" },
        },
        {
          id: "olcs-u2-arq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "ARQ stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Automatic Repeat Query" },
            { id: "b", text: "Advanced Routing Protocol" },
            { id: "c", text: "Automatic Relay Queue" },
            { id: "d", text: "Array Request Queue" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ARQ", statement: "Automatic Repeat Query." }], steps: [{ reasoning: "ARQ = Automatic Repeat Query.", working: "\\text{ARQ}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Automatic Repeat Query" },
        },
        {
          id: "olcs-u2-arq-q6", difficulty: "core", totalMarks: 2,
          stem: "A sender transmits 10 packets and the receiver finds 2 corrupted. How many packets must be sent in total if only the bad ones are resent?",
          response: { type: "numeric", parts: [{ label: "Packets", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "ARQ", statement: "Resend only failed packets." }], steps: [
            { reasoning: "$10+2=12$ transmissions.", working: "12", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "12", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olcs-u2-arq-q7", difficulty: "foundation", totalMarks: 1,
          stem: "In ARQ, the receiver sends an ACK for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All packets sent" },
            { id: "b", text: "Only the first packet" },
            { id: "c", text: "Encrypted packets" },
            { id: "d", text: "Packets received correctly" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "ACK", statement: "Acknowledges good packets." }], steps: [{ reasoning: "ACK confirms correct receipt.", working: "\\text{ACK}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Correct packets" },
        },
        {
          id: "olcs-u2-arq-q8", difficulty: "core", totalMarks: 2,
          stem: "An echo check sends every message back for comparison. How much total traffic is needed to send a 200 kB message this way?",
          response: { type: "numeric", parts: [{ label: "kB", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Echo traffic", statement: "Data travels twice." }], steps: [
            { reasoning: "$200\\times2=400$ kB.", working: "400", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "400", marks: 1, markCode: "A" },
          ], finalAnswer: "400 kB" },
        },
        {
          id: "olcs-u2-arq-q9", difficulty: "core", totalMarks: 2,
          stem: "What does the receiver send in ARQ when a packet arrives corrupted or is missing?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "NAK", statement: "Negative acknowledgement / resend request." }], steps: [
            { reasoning: "A NAK or request for that packet.", working: "\\text{NAK}", marks: 1, markCode: "M" },
            { reasoning: "Prompts the sender to retransmit.", marks: 1, markCode: "A" },
          ], finalAnswer: "A negative acknowledgement (NAK) asking the sender to resend the packet." },
        },
        {
          id: "olcs-u2-arq-q10", difficulty: "core", totalMarks: 1,
          stem: "The main drawback of the echo check is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It only works for small files" },
            { id: "b", text: "It cannot detect errors" },
            { id: "c", text: "It doubles the amount of traffic" },
            { id: "d", text: "It requires encryption" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Echo cost", statement: "Every byte sent twice." }], steps: [{ reasoning: "Echo = send back = double traffic.", working: "\\text{double}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Doubles traffic" },
        },
        {
          id: "olcs-u2-arq-q11", difficulty: "core", totalMarks: 2,
          stem: "A sender must resend one corrupted packet three times before it arrives correctly. The packet is 500 bytes. How many bytes were retransmitted in total?",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 1500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Retransmission", statement: "Each resend repeats the packet." }], steps: [
            { reasoning: "$3\\times500=1500$ bytes.", working: "1500", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "1500", marks: 1, markCode: "A" },
          ], finalAnswer: "1500 bytes" },
        },
        {
          id: "olcs-u2-arq-q12", difficulty: "core", totalMarks: 2,
          stem: "A NAK in ARQ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of encryption" },
            { id: "b", text: "A compression method" },
            { id: "c", text: "A routing address" },
            { id: "d", text: "A request for the sender to resend data" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "NAK", statement: "Negative acknowledgement → resend." }], steps: [{ reasoning: "NAK asks for retransmission.", working: "\\text{NAK}", marks: 1, markCode: "M" }, { reasoning: "Counterpart of ACK.", marks: 1, markCode: "A" }], finalAnswer: "**(d)** Resend request" },
        },
        {
          id: "olcs-u2-arq-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the steps ARQ follows when a numbered packet is lost during transmission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "ARQ flow", statement: "Number, check, acknowledge, retransmit." }], steps: [
            { reasoning: "Receiver notices a sequence number is missing.", working: "\\text{missing}", marks: 1, markCode: "M" },
            { reasoning: "Receiver sends a NAK or resend request.", working: "\\text{NAK}", marks: 1, markCode: "M" },
            { reasoning: "Sender retransmits only that packet.", working: "\\text{retransmit}", marks: 1, markCode: "M" },
            { reasoning: "Receiver ACKs it; data completes intact.", marks: 1, markCode: "A" },
          ], finalAnswer: "Missing packet detected by sequence number → NAK → sender resends → ACK → complete delivery." },
        },
        {
          id: "olcs-u2-arq-q14", difficulty: "challenge", totalMarks: 1,
          stem: "TCP is considered a reliable protocol because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Uses no headers" },
            { id: "b", text: "Runs faster than UDP" },
            { id: "c", text: "Encrypts all data" },
            { id: "d", text: "Acknowledges and retransmits lost data" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "TCP reliability", statement: "ARQ-style acknowledgement." }], steps: [{ reasoning: "TCP uses ACKs and retransmission.", working: "\\text{ACK/retransmit}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** ACKs and retransmits" },
        },
        {
          id: "olcs-u2-arq-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A sender transmits 100 packets. The receiver NAKs 5 of them, which then arrive correctly. How many packet transmissions occurred in total?",
          response: { type: "numeric", parts: [{ label: "Transmissions", answer: 105 }] },
          markscheme: { principles: [{ kind: "principle", name: "ARQ total", statement: "Original sends + retransmissions." }], steps: [
            { reasoning: "$100+5=105$ transmissions.", working: "105", marks: 1, markCode: "M" },
            { reasoning: "Only the 5 failed packets are resent.", working: "\\text{5 resent}", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "105", marks: 1, markCode: "A" },
          ], finalAnswer: "105" },
        },
        {
          id: "olcs-u2-arq-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Which protocol is unreliable (no retransmission guarantee)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "FTP" },
            { id: "b", text: "UDP" },
            { id: "c", text: "TCP" },
            { id: "d", text: "HTTP over TCP" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "UDP", statement: "No acknowledgement — fast but lossy." }], steps: [{ reasoning: "UDP sends without guarantees.", working: "\\text{UDP}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** UDP" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u2-2-2-notes", title: "Error detection — notes", summary: "Parity, checksum, check digits, echo check, ARQ.",
      sections: [
        { heading: "Detection methods", body: "Parity (bit count), checksum (sum), check digits (formula) — all detect, none correct." },
        { heading: "ARQ", body: "Number packets → check → ACK/NAK → retransmit failures. Basis of reliable TCP." },
      ] },
  ],
};
