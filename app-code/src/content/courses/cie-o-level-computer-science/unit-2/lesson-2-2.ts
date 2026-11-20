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
            { id: "a", text: "Detect transmission errors" }, { id: "b", text: "Encrypt the data" }, { id: "c", text: "Compress the file" }, { id: "d", text: "Speed up transfer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Parity", statement: "Redundant bit for error detection." }], steps: [{ reasoning: "Parity detects errors.", working: "\\text{detect}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Detect errors" },
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
            { id: "a", text: "Sends the data back for comparison" }, { id: "b", text: "Deletes bad packets silently" }, { id: "c", text: "Encrypts the data" }, { id: "d", text: "Compresses the data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Echo check", statement: "Data echoed back and compared." }], steps: [{ reasoning: "Echo = send back.", working: "\\text{echo back}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sends data back" },
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
