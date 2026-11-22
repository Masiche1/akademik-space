import type { Lesson } from "../../../types.ts";

export const lesson125: Lesson = {
  id: "ciealc-u1-lesson-1-5",
  code: "1-5",
  title: "Encryption and Data Security",
  goal: "I CAN explain encryption methods and their role in data security.",
  standards: [
    "Cambridge A Level Computer Science 9618: data security",
    "9618: encryption",
  ],

  vocabulary: [
    {
      term: "Encryption",
      definition: "Scrambling data so only authorised parties read it.",
    },
    { term: "Cipher", definition: "Algorithm for encrypting/decrypting data." },
    {
      term: "Symmetric encryption",
      definition: "Same key encrypts and decrypts.",
    },
    {
      term: "Asymmetric encryption",
      definition: "Public key encrypts, private key decrypts.",
    },
    { term: "Public key", definition: "Key shared openly for encryption." },
    { term: "Private key", definition: "Secret key for decryption." },
  ],
  concepts: [
    {
      id: "ciealc-u1-s5-enc",
      title: "Encryption",
      skill: "Explain symmetric vs asymmetric encryption at A Level.",
      lesson: {
        sections: [
          {
            heading: "Symmetric encryption",
            body: "Same key encrypts and decrypts — fast but key distribution problem: how to share key securely? Used for bulk data encryption.",
          },
          {
            heading: "Asymmetric encryption",
            body: "Public key encrypts, private key decrypts — solves key distribution. Slower but secure. Used for key exchange, digital signatures, HTTPS.",
          },
        ],
        keyFormulas: [
          { name: "Symmetric", statement: "same key both ways" },
          {
            name: "Asymmetric",
            statement: "public encrypts, private decrypts",
          },
        ],
        workedExample: {
          problem:
            "Why does HTTPS use both symmetric and asymmetric encryption?",
          solution:
            "Asymmetric establishes secure connection (key exchange); symmetric encrypts bulk data (faster).",
        },
      },
      questions: [
        {
          id: "ciealc-u1-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is encryption?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A network cable",
              },
              {
                id: "b",
                text: "Scrambling data so only authorised parties read it",
              },
              {
                id: "c",
                text: "Deleting files",
              },
              {
                id: "d",
                text: "A type of virus",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement: "Data scrambling.",
              },
            ],
            steps: [
              {
                reasoning: "Encryption protects data confidentiality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Data scrambling",
          },
        },
        {
          id: "ciealc-u1-en-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between symmetric and asymmetric encryption?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetric vs asymmetric",
                statement: "Same vs different keys.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Symmetric=same key; asymmetric=public/private pair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Symmetric faster; asymmetric solves key distribution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Same key vs key pair",
          },
        },
        {
          id: "ciealc-u1-en-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does HTTPS use both symmetric and asymmetric encryption?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "HTTPS",
                statement: "Hybrid encryption.",
              },
            ],
            steps: [
              {
                reasoning: "Asymmetric for secure key exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Symmetric for fast bulk data encryption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combines security and speed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Asymmetric=key exchange; symmetric=data",
          },
        },
        {
          id: "ciealc-u1-en-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define encryption, cipher, symmetric, asymmetric, public key, private key. (b) What is symmetric encryption? (c) What is asymmetric encryption? (d) What is the key distribution problem? (e) How does asymmetric solve it? (f) Why is asymmetric slower? (g) What is a digital signature? (h) Explain how HTTPS establishes a secure connection.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Encryption",
                statement: "Symmetric vs asymmetric.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Same key encrypts/decrypts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Public encrypts, private decrypts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Sharing symmetric key securely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Public key can be shared openly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Complex math operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Encrypted hash proving authenticity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Asymmetric handshake→symmetric session.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Encryption methods and security.",
          },
        },
        {
          id: "ciealc-u1-en-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of encryption uses a public key and a private key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Run-length encoding" },
              { id: "b", text: "Symmetric encryption" },
              { id: "c", text: "Huffman coding" },
              { id: "d", text: "Asymmetric encryption" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asymmetric encryption",
                statement: "Public key encrypts, private key decrypts.",
              },
            ],
            steps: [
              {
                reasoning: "Asymmetric encryption uses a key pair.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Asymmetric encryption",
          },
        },
        {
          id: "ciealc-u1-en-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a Caesar cipher with a shift of 3, the plaintext letter C (the 3rd letter of the alphabet) is encrypted. What is the position number of the ciphertext letter? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Caesar cipher",
                statement: "Shift each letter forward by the key value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 + 3 = 6, so C encrypts to the 6th letter, F.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciealc-u1-en-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What problem does asymmetric encryption solve that symmetric encryption cannot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing the need for any keys" },
              {
                id: "b",
                text: "Secure key distribution over an insecure channel",
              },
              { id: "c", text: "Making encryption faster for bulk data" },
              { id: "d", text: "Compressing files to a smaller size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Key distribution",
                statement: "Public keys can be shared openly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The public key can be sent openly; only the private key must stay secret.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Secure key distribution",
          },
        },
        {
          id: "ciealc-u1-en-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a Caesar cipher with a shift of 5, the plaintext letter M (the 13th letter of the alphabet) is encrypted. What is the position number of the ciphertext letter? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Caesar cipher",
                statement: "Shift each letter forward by the key value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "13 + 5 = 18, so M encrypts to the 18th letter, R.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "18",
          },
        },
        {
          id: "ciealc-u1-en-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by the 'key distribution problem' in symmetric encryption.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key distribution problem",
                statement: "Sharing the secret key securely.",
              },
            ],
            steps: [
              {
                reasoning: "The same secret key must reach both parties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sending it over an insecure channel risks interception, defeating the encryption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sharing the symmetric key securely is difficult",
          },
        },
        {
          id: "ciealc-u1-en-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In asymmetric encryption, which key is used to decrypt a message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sender's public key" },
              { id: "b", text: "The recipient's private key" },
              { id: "c", text: "A shared symmetric key" },
              { id: "d", text: "The recipient's public key" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asymmetric encryption",
                statement: "Public encrypts, private decrypts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The message is encrypted with the recipient's public key and decrypted with their private key.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Recipient's private key",
          },
        },
        {
          id: "ciealc-u1-en-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a Caesar cipher with a shift of 1, what is the position number of the ciphertext letter when the plaintext letter is Z (the 26th letter)? The alphabet wraps around after Z. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Caesar cipher wrap",
                statement: "Shift wraps from Z back to A.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "26 + 1 wraps around to position 1, letter A.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciealc-u1-en-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is asymmetric encryption slower than symmetric encryption for encrypting large amounts of data?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Asymmetric cost",
                statement: "Complex mathematics makes it slower.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Asymmetric encryption uses complex mathematical operations on large numbers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These operations take far more processing time than symmetric ciphers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Complex mathematical operations are slower",
          },
        },
        {
          id: "ciealc-u1-en-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of a digital signature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To delete the message after reading" },
              { id: "b", text: "To compress the message to a smaller size" },
              {
                id: "c",
                text: "To translate the message into another language",
              },
              {
                id: "d",
                text: "To prove the sender's identity and that the message was not altered",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital signature",
                statement: "Proves authenticity and integrity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A digital signature verifies who sent the data and that it is unchanged.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Authenticity and integrity",
          },
        },
        {
          id: "ciealc-u1-en-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how HTTPS establishes a secure connection between a browser and a web server, naming the encryption types used at each stage.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "HTTPS handshake",
                statement: "Asymmetric exchange, then symmetric session.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Asymmetric encryption is used to exchange a session key securely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both parties then switch to faster symmetric encryption for the session.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This combines the security of asymmetric with the speed of symmetric encryption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Asymmetric key exchange, then symmetric session encryption",
          },
        },
        {
          id: "ciealc-u1-en-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In symmetric encryption, how many keys are used to encrypt and decrypt a single message? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetric encryption",
                statement: "The same key encrypts and decrypts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "One shared key is used for both encryption and decryption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciealc-u1-en-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a cipher?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An algorithm used to encrypt and decrypt data",
              },
              { id: "b", text: "A programming language" },
              { id: "c", text: "A type of network cable" },
              { id: "d", text: "A file compression method" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cipher",
                statement: "Algorithm for encrypting and decrypting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A cipher is the algorithm that transforms plaintext to ciphertext and back.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Encryption/decryption algorithm",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-en-notes",
      title: "Encryption — notes",
      summary:
        "Symmetric=fast same key; asymmetric=secure key pair. HTTPS uses both for speed+security.",
      sections: [
        {
          heading: "Key idea",
          body: "Asymmetric solves key distribution; symmetric handles bulk data.",
        },
        {
          heading: "HTTPS",
          body: "Asymmetric handshake → symmetric session encryption.",
        },
      ],
    },
  ],
};
