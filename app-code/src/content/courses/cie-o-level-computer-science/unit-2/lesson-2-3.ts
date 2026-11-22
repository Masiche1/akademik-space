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
            { id: "a", text: "Slow internet" },
            { id: "b", text: "Hard disk failure" },
            { id: "c", text: "Power cuts" },
            { id: "d", text: "Unauthorised reading of data" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u2-we-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Encryption primarily protects the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Colour of the screen" },
            { id: "b", text: "Speed of transfer" },
            { id: "c", text: "Confidentiality of data" },
            { id: "d", text: "Size of files" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Confidentiality", statement: "Only authorised parties can read." }], steps: [{ reasoning: "Encryption = confidentiality.", working: "\\text{confidentiality}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Confidentiality" },
        },
        {
          id: "olcs-u2-we-q6", difficulty: "core", totalMarks: 2,
          stem: "A 128-bit encryption key is how many bytes long?",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 16 }] },
          markscheme: { principles: [{ kind: "formula", name: "Key size", statement: "$128/8=16$ bytes." }], steps: [
            { reasoning: "$128\\div8=16$ bytes.", working: "16", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "16", marks: 1, markCode: "A" },
          ], finalAnswer: "16 bytes" },
        },
        {
          id: "olcs-u2-we-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Ciphertext is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The encrypted, unreadable form of data" },
            { id: "b", text: "A type of key" },
            { id: "c", text: "The original readable message" },
            { id: "d", text: "A network cable" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Ciphertext", statement: "Encrypted output." }], steps: [{ reasoning: "Ciphertext = scrambled data.", working: "\\text{ciphertext}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Encrypted form" },
        },
        {
          id: "olcs-u2-we-q8", difficulty: "core", totalMarks: 2,
          stem: "A 256-bit encryption key is how many bytes long?",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 32 }] },
          markscheme: { principles: [{ kind: "formula", name: "Key size", statement: "$256/8=32$ bytes." }], steps: [
            { reasoning: "$256\\div8=32$ bytes.", working: "32", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "32", marks: 1, markCode: "A" },
          ], finalAnswer: "32 bytes" },
        },
        {
          id: "olcs-u2-we-q9", difficulty: "core", totalMarks: 2,
          stem: "State one thing encryption does NOT protect against.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Encryption limits", statement: "No identity proof, no malware protection." }], steps: [
            { reasoning: "Does not prove who sent the message.", working: "\\text{identity}", marks: 1, markCode: "M" },
            { reasoning: "Does not stop malware on the device.", working: "\\text{malware}", marks: 1, markCode: "A" },
          ], finalAnswer: "It does not prove the sender's identity (needs authentication) or stop malware on endpoints." },
        },
        {
          id: "olcs-u2-we-q10", difficulty: "core", totalMarks: 1,
          stem: "A man-in-the-middle attack involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two users chatting normally" },
            { id: "b", text: "A router forwarding packets" },
            { id: "c", text: "An attacker secretly relaying messages between two parties" },
            { id: "d", text: "A backup server" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "MITM", statement: "Attacker relays/alters communication." }], steps: [{ reasoning: "MITM sits between sender and receiver.", working: "\\text{MITM}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Secretly relaying messages" },
        },
        {
          id: "olcs-u2-we-q11", difficulty: "core", totalMarks: 2,
          stem: "An attacker intercepts a 1000-byte encrypted message but has no key. How many bytes of readable plaintext can they recover?",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 0 }] },
          markscheme: { principles: [{ kind: "principle", name: "Ciphertext", statement: "Without the key, ciphertext is meaningless." }], steps: [
            { reasoning: "No key → no decryption.", working: "\\text{no key}", marks: 1, markCode: "M" },
            { reasoning: "Readable bytes recovered = 0.", working: "0", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "olcs-u2-we-q12", difficulty: "core", totalMarks: 2,
          stem: "What usually happens to encrypted data if the decryption key is permanently lost?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is backed up" },
            { id: "b", text: "It decrypts automatically" },
            { id: "c", text: "The data becomes unrecoverable" },
            { id: "d", text: "It converts to plaintext" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Key loss", statement: "Key secrecy = data secrecy." }], steps: [{ reasoning: "Without key, ciphertext stays unreadable.", working: "\\text{unrecoverable}", marks: 1, markCode: "M" }, { reasoning: "Key management is critical.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Unrecoverable" },
        },
        {
          id: "olcs-u2-we-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between confidentiality and authentication in the context of secure communication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Confidentiality vs authentication", statement: "Encryption hides content; authentication proves identity." }], steps: [
            { reasoning: "Confidentiality: only intended reader can read.", working: "\\text{secrecy}", marks: 1, markCode: "M" },
            { reasoning: "Provided by encryption.", working: "\\text{encryption}", marks: 1, markCode: "M" },
            { reasoning: "Authentication: proves who sent/received.", working: "\\text{identity}", marks: 1, markCode: "M" },
            { reasoning: "Needs signatures/certificates, not just encryption.", marks: 1, markCode: "A" },
          ], finalAnswer: "Encryption gives confidentiality (content hidden); authentication (proving identity) requires separate mechanisms like digital signatures." },
        },
        {
          id: "olcs-u2-we-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Plaintext is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The original readable data before encryption" },
            { id: "b", text: "A checksum" },
            { id: "c", text: "The encrypted form" },
            { id: "d", text: "A secret key" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Plaintext", statement: "Original readable data." }], steps: [{ reasoning: "Plaintext = unencrypted data.", working: "\\text{plaintext}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Original readable data" },
        },
        {
          id: "olcs-u2-we-q15", difficulty: "challenge", totalMarks: 3,
          stem: "An RSA key is 2048 bits long. How many bytes is this, and why does a longer key improve security?",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 256 }] },
          markscheme: { principles: [{ kind: "formula", name: "Key size", statement: "$\\text{bits}/8=$ bytes; more bits = harder to brute-force." }], steps: [
            { reasoning: "$2048/8=256$ bytes.", working: "256", marks: 1, markCode: "M" },
            { reasoning: "Longer key → vastly more possible keys → harder attack.", working: "\\text{harder}", marks: 1, markCode: "M" },
            { reasoning: "Correct byte value.", working: "256", marks: 1, markCode: "A" },
          ], finalAnswer: "256 bytes; longer keys mean exponentially more possibilities to guess." },
        },
        {
          id: "olcs-u2-we-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Encryption converts…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bytes into bits" },
            { id: "b", text: "Ciphertext into plaintext" },
            { id: "c", text: "Plaintext into ciphertext" },
            { id: "d", text: "Files into folders" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Encryption", statement: "Plaintext → ciphertext." }], steps: [{ reasoning: "Encryption scrambles readable data.", working: "\\text{P→C}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Plaintext to ciphertext" },
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
            { id: "a", text: "Decrypt only" },
            { id: "b", text: "Encrypt and decrypt" },
            { id: "c", text: "Encrypt only" },
            { id: "d", text: "Sign documents" },
          ], correctChoiceId: "b" },
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
        {
          id: "olcs-u2-sa-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In symmetric encryption, the same key is used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encryption only" },
            { id: "b", text: "Decryption only" },
            { id: "c", text: "Both encryption and decryption" },
            { id: "d", text: "Key exchange only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Symmetric", statement: "One shared key both ways." }], steps: [{ reasoning: "Same key encrypts and decrypts.", working: "\\text{same key}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Both ways" },
        },
        {
          id: "olcs-u2-sa-q6", difficulty: "core", totalMarks: 2,
          stem: "An AES-128 key is how many bytes long?",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 16 }] },
          markscheme: { principles: [{ kind: "formula", name: "Key size", statement: "$128/8=16$ bytes." }], steps: [
            { reasoning: "$128\\div8=16$.", working: "16", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "16", marks: 1, markCode: "A" },
          ], finalAnswer: "16 bytes" },
        },
        {
          id: "olcs-u2-sa-q7", difficulty: "foundation", totalMarks: 1,
          stem: "In asymmetric encryption, the public key is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt messages" },
            { id: "b", text: "Compress data" },
            { id: "c", text: "Sign the sender's identity only" },
            { id: "d", text: "Decrypt messages" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Public key", statement: "Encrypts; private key decrypts." }], steps: [{ reasoning: "Public key encrypts.", working: "\\text{encrypt}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Encrypt" },
        },
        {
          id: "olcs-u2-sa-q8", difficulty: "core", totalMarks: 2,
          stem: "Symmetric encryption processes data at 100 MB/s and asymmetric at 1 MB/s. How long does each take to process 50 MB?",
          response: { type: "numeric", parts: [
            { label: "Symmetric (s)", answer: 0.5 },
            { label: "Asymmetric (s)", answer: 50 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$t=\\text{size}/\\text{rate}$." }], steps: [
            { reasoning: "Symmetric: $50/100=0.5$ s.", working: "0.5", marks: 1, markCode: "M" },
            { reasoning: "Asymmetric: $50/1=50$ s.", working: "50", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5 s symmetric; 50 s asymmetric" },
        },
        {
          id: "olcs-u2-sa-q9", difficulty: "core", totalMarks: 2,
          stem: "Why is asymmetric encryption rarely used to encrypt large files directly?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Asymmetric speed", statement: "Much slower than symmetric." }], steps: [
            { reasoning: "Asymmetric operations are computationally heavy.", working: "\\text{slow}", marks: 1, markCode: "M" },
            { reasoning: "Large files would take too long.", marks: 1, markCode: "A" },
          ], finalAnswer: "It is far slower than symmetric encryption, so encrypting bulk data directly would be impractical." },
        },
        {
          id: "olcs-u2-sa-q10", difficulty: "core", totalMarks: 1,
          stem: "Hybrid encryption typically combines…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No encryption at all" },
            { id: "b", text: "Two asymmetric ciphers only" },
            { id: "c", text: "Asymmetric key exchange with symmetric bulk encryption" },
            { id: "d", text: "Two symmetric ciphers only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Hybrid", statement: "Asymmetric exchange + symmetric data." }], steps: [{ reasoning: "Best of both combined.", working: "\\text{hybrid}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Asymmetric + symmetric" },
        },
        {
          id: "olcs-u2-sa-q11", difficulty: "core", totalMarks: 2,
          stem: "A symmetric cipher encrypts 200 MB of data in 2 seconds. What is its processing rate in MB/s?",
          response: { type: "numeric", parts: [{ label: "MB/s", answer: 100 }] },
          markscheme: { principles: [{ kind: "formula", name: "Rate", statement: "rate = size $\\div$ time." }], steps: [
            { reasoning: "$200/2=100$ MB/s.", working: "100", marks: 1, markCode: "M" },
            { reasoning: "Correct rate.", working: "100", marks: 1, markCode: "A" },
          ], finalAnswer: "100 MB/s" },
        },
        {
          id: "olcs-u2-sa-q12", difficulty: "core", totalMarks: 2,
          stem: "In asymmetric encryption, the private key is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt messages for anyone" },
            { id: "b", text: "Replace the public key" },
            { id: "c", text: "Decrypt messages and must stay secret" },
            { id: "d", text: "Compress files" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Private key", statement: "Secret decrypting key." }], steps: [{ reasoning: "Private key decrypts.", working: "\\text{decrypt}", marks: 1, markCode: "M" }, { reasoning: "Must never be shared.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Decrypt; kept secret" },
        },
        {
          id: "olcs-u2-sa-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the steps of hybrid encryption when Alice sends a large file to Bob.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hybrid encryption", statement: "Asymmetric exchange + symmetric bulk." }], steps: [
            { reasoning: "Alice generates a random symmetric session key.", working: "\\text{session key}", marks: 1, markCode: "M" },
            { reasoning: "She encrypts it with Bob's public key and sends it.", working: "\\text{public key}", marks: 1, markCode: "M" },
            { reasoning: "The file is encrypted with the symmetric key (fast).", working: "\\text{symmetric}", marks: 1, markCode: "M" },
            { reasoning: "Bob decrypts the session key with his private key, then the file.", marks: 1, markCode: "A" },
          ], finalAnswer: "Alice encrypts a session key with Bob's public key, sends it, then encrypts the file symmetrically; Bob uses his private key to recover the session key." },
        },
        {
          id: "olcs-u2-sa-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The 'key distribution problem' refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Losing the public key" },
            { id: "b", text: "How to share a symmetric key securely before communicating" },
            { id: "c", text: "Choosing a file name" },
            { id: "d", text: "Speeding up encryption" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Key distribution", statement: "Sharing a secret securely is hard." }], steps: [{ reasoning: "Symmetric needs a pre-shared secret.", working: "\\text{shared secret}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sharing the key securely" },
        },
        {
          id: "olcs-u2-sa-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A file is encrypted symmetrically at 25 MB/s and takes 4 seconds. What is the file size in MB?",
          response: { type: "numeric", parts: [{ label: "MB", answer: 100 }] },
          markscheme: { principles: [{ kind: "formula", name: "Size", statement: "size = rate × time." }], steps: [
            { reasoning: "$25\\times4=100$ MB.", working: "100", marks: 1, markCode: "M" },
            { reasoning: "Correct size.", working: "100", marks: 1, markCode: "M" },
            { reasoning: "Units in MB.", working: "MB", marks: 1, markCode: "A" },
          ], finalAnswer: "100 MB" },
        },
        {
          id: "olcs-u2-sa-q16", difficulty: "foundation", totalMarks: 1,
          stem: "AES is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Asymmetric encryption" },
            { id: "b", text: "Symmetric encryption" },
            { id: "c", text: "Error detection" },
            { id: "d", text: "Compression" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "AES", statement: "Symmetric block cipher." }], steps: [{ reasoning: "AES uses one shared key.", working: "\\text{AES}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Symmetric encryption" },
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
