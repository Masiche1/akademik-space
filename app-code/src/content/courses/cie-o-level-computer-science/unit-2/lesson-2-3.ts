import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olcs-u2-lesson-2-3",
  code: "2-3",
  title: "Encryption",
  goal: "I CAN explain why encryption is needed and distinguish symmetric from asymmetric encryption.",
  standards: ["2210 2.3.1", "2210 2.3.2"],
  vocabulary: [
    { term: "Encryption", definition: "Converting data into an unreadable form using a key so only authorised parties can read it." },
    { term: "Ciphertext", definition: "The encrypted, scrambled form of the data." },
    { term: "Plaintext", definition: "The original, readable data before encryption." },
    { term: "Symmetric encryption", definition: "Same key encrypts and decrypts; fast but key must be shared securely." },
    { term: "Asymmetric encryption", definition: "Public key encrypts, private key decrypts; slower but no shared secret needed." },
    { term: "Public/private key pair", definition: "Two linked keys: the public key is shared openly, the private key stays secret." },
  ],
  concepts: [
    {
      id: "olcs-u2-why-encrypt",
      title: "Why encrypt data",
      skill: "Explain the threats encryption protects against and what it does not solve.",
      lesson: {
        sections: [
          { heading: "Threats", body: "Data travels over shared networks where it can be intercepted. Threats include:\n\n- **Eavesdropping**: reading messages in transit.\n- **Data theft**: stealing stored files.\n- **Man-in-the-middle**: an attacker secretly relays/alters communication between two parties.\n\nEncryption makes intercepted data useless without the key." },
          { heading: "What encryption does and doesn't do", body: "Encryption protects **confidentiality** — it does not stop interception, does not prove the sender's identity (that's authentication/digital signatures), and does not stop malware on the endpoints." },
          { heading: "Keys", body: "A **key** is the secret value that scrambles/unscrambles data. Whoever holds the key can decrypt — so key management is critical. Losing the key usually means losing the data." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A message is intercepted but was encrypted. What can the attacker read?",
          solution: "Only ciphertext — meaningless without the decryption key. Confidentiality is preserved.",
        },
      },
      questions: [
        {
          id: "olcs-u2-we-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Encryption protects mainly against…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unauthorised reading of data" }, { id: "b", text: "Hard disk failure" }, { id: "c", text: "Slow internet" }, { id: "d", text: "Power cuts" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Encryption", statement: "Confidentiality via keys." }], steps: [{ reasoning: "Encryption = confidentiality.", working: "\\text{confidentiality}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Unauthorised reading" },
        },
        {
          id: "olcs-u2-we-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the scrambled form of data produced by encryption.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Ciphertext", statement: "Encrypted output." }], steps: [
            { reasoning: "Ciphertext.", working: "\\text{ciphertext}", marks: 1, markCode: "M" },
            { reasoning: "Readable original = plaintext.", marks: 1, markCode: "A" },
          ], finalAnswer: "Ciphertext" },
        },
        {
          id: "olcs-u2-we-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why encryption alone does not stop a man-in-the-middle attack from succeeding.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "MITM", statement: "Encryption ≠ authentication." }], steps: [
            { reasoning: "Attacker can relay messages between parties.", working: "\\text{relay}", marks: 1, markCode: "M" },
            { reasoning: "Each side may think they're talking to the other.", working: "\\text{impersonation}", marks: 1, markCode: "M" },
            { reasoning: "Encryption hides content but not identity.", marks: 1, markCode: "M" },
            { reasoning: "Need authentication (certificates/signatures) too.", marks: 1, markCode: "A" },
          ], finalAnswer: "Encryption hides content but not who's sending; authentication is also needed." },
        },
        {
          id: "olcs-u2-we-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Encryption concepts review.",
          parts: [
            { label: "a", prompt: "Define encryption.", marks: 2 },
            { label: "b", prompt: "State two threats encryption protects against.", marks: 2 },
            { label: "c", prompt: "State one thing encryption does NOT protect against.", marks: 2 },
            { label: "d", prompt: "Explain why the decryption key must be kept secret.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Encryption", statement: "Scramble data with a key for confidentiality." },
          ], steps: [
            { part: "a", reasoning: "Convert data to unreadable ciphertext using a key.", working: "\\text{scramble+key}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Only key holders can decrypt.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Eavesdropping / data theft.", working: "\\text{eavesdrop}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second threat: interception/MITM content.", working: "\\text{interception}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Doesn't prove sender identity / stop malware.", working: "\\text{identity}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct limitation.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Key decrypts the ciphertext.", working: "\\text{decrypts}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Leaked key → all data readable.", working: "\\text{all exposed}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Therefore key secrecy = data secrecy.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) scramble with key (b) eavesdropping/theft (c) identity/malware (d) key compromise exposes everything" },
        },
      ],
    },
    {
      id: "olcs-u2-symmetric",
      title: "Symmetric and asymmetric encryption",
      skill: "Compare symmetric and asymmetric encryption and describe key exchange.",
      lesson: {
        sections: [
          { heading: "Symmetric", body: "**One secret key** encrypts and decrypts (e.g. AES). Fast — used for bulk data. Problem: both parties must already share the key securely; sending the key itself needs protection." },
          { heading: "Asymmetric", body: "Uses a **key pair**:\n\n- **Public key**: anyone can have it; used to ENCRYPT.\n- **Private key**: kept secret; used to DECRYPT.\n\nYou publish your public key; anyone can send you encrypted messages only you can read. Slower, so often used to exchange a symmetric session key, which then encrypts the bulk data (hybrid encryption)." },
          { heading: "Comparison", body: "Symmetric: fast, one shared secret key, key distribution problem. Asymmetric: slower, no shared secret needed, enables digital signatures and secure key exchange." },
        ],
        keyFormulas: [
          { name: "Symmetric", statement: "Same key encrypts and decrypts" },
          { name: "Asymmetric", statement: "Public encrypts, private decrypts" },
        ],
        workedExample: {
          problem: "Alice wants to send Bob a large file securely. Which encryption should she use and why?",
          solution: "Hybrid: use asymmetric encryption to share a symmetric session key, then symmetric encryption for the bulk file — fast and secure.",
        },
      },
      questions: [
        {
          id: "olcs-u2-sa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In symmetric encryption, the same key is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt and decrypt" }, { id: "b", text: "Encrypt only" }, { id: "c", text: "Decrypt only" }, { id: "d", text: "Sign documents" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Symmetric", statement: "One key both ways." }], steps: [{ reasoning: "Symmetric = same key.", working: "\\text{same key}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Encrypt and decrypt" },
        },
        {
          id: "olcs-u2-sa-q2", difficulty: "core", totalMarks: 2,
          stem: "Which key in asymmetric encryption is kept secret?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Private key", statement: "Secret decrypting key." }], steps: [
            { reasoning: "Private key stays secret.", working: "\\text{private}", marks: 1, markCode: "M" },
            { reasoning: "Public key is shared openly.", marks: 1, markCode: "A" },
          ], finalAnswer: "The private key" },
        },
        {
          id: "olcs-u2-sa-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the key distribution problem with symmetric encryption and how asymmetric encryption solves it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Key exchange", statement: "Asymmetric enables secure key sharing." }], steps: [
            { reasoning: "Symmetric needs a shared secret sent first — insecure.", working: "\\text{chicken-and-egg}", marks: 1, markCode: "M" },
            { reasoning: "Asymmetric uses public/private pair — no secret sent.", working: "\\text{key pair}", marks: 1, markCode: "M" },
            { reasoning: "Public key encrypts a session key for the receiver.", working: "\\text{session key}", marks: 1, markCode: "M" },
            { reasoning: "Hybrid: asymmetric exchange + symmetric bulk.", marks: 1, markCode: "A" },
          ], finalAnswer: "Asymmetric keys remove the need to share a secret; hybrid systems exchange a symmetric key securely." },
        },
        {
          id: "olcs-u2-sa-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Encryption types review.",
          parts: [
            { label: "a", prompt: "State one advantage of symmetric encryption.", marks: 2 },
            { label: "b", prompt: "State one advantage of asymmetric encryption.", marks: 2 },
            { label: "c", prompt: "Which key encrypts a message in asymmetric encryption?", marks: 1 },
            { label: "d", prompt: "Explain why real systems often combine both methods.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Hybrid encryption", statement: "Asymmetric for key exchange, symmetric for speed." },
          ], steps: [
            { part: "a", reasoning: "Fast / efficient for bulk data.", working: "\\text{fast}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "No shared secret needed / public key distribution.", working: "\\text{no secret}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "The recipient's public key.", working: "\\text{public}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Symmetric is fast but key exchange is hard.", working: "\\text{speed vs exchange}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Asymmetric solves exchange but is slow.", working: "\\text{slow}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Use asymmetric to send a symmetric session key.", working: "\\text{session key}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Then symmetric encrypts bulk data quickly.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) fast (b) no shared secret (c) public key (d) hybrid: asymmetric key exchange + symmetric bulk" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u2-2-3-notes", title: "Encryption — notes", summary: "Why encrypt, symmetric vs asymmetric, hybrid systems.",
      sections: [
        { heading: "Symmetric vs asymmetric", body: "Symmetric: one shared key, fast. Asymmetric: public encrypts/private decrypts, no shared secret, slower." },
        { heading: "Hybrid", body: "Asymmetric exchanges a symmetric session key; symmetric encrypts the data — best of both." },
      ] },
  ],
};
