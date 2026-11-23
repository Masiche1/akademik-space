module.exports = [
  {
    file: "lesson-11-1.ts", exportName: "lesson111",
    lesson: {
      id: "ecs11-u11-lesson-11-1", code: "11-1",
      title: "How the Internet Works",
      goal: "I CAN explain the client-server model, describe HTTP and HTTPS, and explain the roles of DNS, hosting and browsers.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — The wider world: how the internet works"],
      vocabulary: [
        { term: "Client-server model", definition: "Clients such as browsers send requests; servers process them and send responses." },
        { term: "HTTP", definition: "HyperText Transfer Protocol — the request-response protocol used to transfer web pages." },
        { term: "HTTPS", definition: "HTTP secured with TLS encryption, indicated by a padlock in the browser." },
        { term: "DNS", definition: "Domain Name System — translates domain names into IP addresses." },
        { term: "IP address", definition: "A numerical label identifying a device or server on a network." },
        { term: "Web hosting", definition: "A service that stores web files on a server so they can be accessed over the internet." },
        { term: "Browser", definition: "Client software that requests, receives and renders web pages." },
      ],
      concepts: [
        {
          id: "ecs11-u11-net-foundations", title: "Client-server, DNS and protocols",
          skill: "Describe how data travels across the internet using the client-server model, DNS and HTTP/HTTPS.",
          sections: [
            { heading: "Client-server communication", body: "The internet uses the client-server model: a client (usually a web browser on a user's device) sends a request for a resource, and a server processes the request and sends back a response. Requests and responses travel over the internet through routers and networks.\n\nHTTP (HyperText Transfer Protocol) is the standard protocol for transferring web pages. HTTPS adds TLS encryption so data exchanged cannot be read or tampered with by others — browsers show a padlock for HTTPS sites." },
            { heading: "DNS and addresses", body: "Every server has an IP address — a numerical label such as 93.184.216.34. DNS (Domain Name System) translates human-readable domain names like www.example.com into the IP address of the server hosting the site. Without DNS, users would have to memorise IP addresses.\n\nWhen a user types a URL, the browser first uses DNS to find the server's IP address, then sends an HTTP/HTTPS request to that address." },
          ],
          keyFormulas: [
            { name: "Client-server", statement: "Client sends request → server sends response" },
            { name: "DNS", statement: "Domain name → IP address lookup" },
            { name: "HTTP / HTTPS", statement: "Web request-response protocol; HTTPS adds TLS encryption" },
          ],
          workedExample: {
            problem: "A user types https://www.example.com into a browser. Describe what happens.",
            solution: "DNS resolves www.example.com to the server's IP address; the browser sends an HTTPS GET request; the server returns HTML/CSS files; TLS encrypts the exchange; the browser renders the page.",
          },
          questions: [
            {
              id: "ecs11-u11-net-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does DNS stand for and what does it do?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Domain Name System — translates domain names into IP addresses" },
                { id: "b", text: "Digital Network Service — encrypts web traffic" },
                { id: "c", text: "Data Name Storage — stores web pages" },
                { id: "d", text: "Direct Network Switch — routes packets" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "DNS", statement: "Domain name to IP address resolution." }],
                steps: [{ reasoning: "DNS = Domain Name System; it maps domain names to IP addresses.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Domain Name System — translates domain names to IP addresses",
              },
            },
            {
              id: "ecs11-u11-net-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three differences between HTTP and HTTPS.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "HTTP vs HTTPS", statement: "HTTPS adds TLS encryption." }],
                steps: [
                  { reasoning: "HTTPS encrypts the data exchanged so it cannot be read in transit.", marks: 1, markCode: "AO1" },
                  { reasoning: "HTTPS authenticates the server's identity using certificates.", marks: 1, markCode: "AO1" },
                  { reasoning: "HTTPS prevents tampering with the data during transfer.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "HTTPS = encrypted, authenticated, tamper-proof version of HTTP.",
              },
            },
            {
              id: "ecs11-u11-net-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the client-server model as used when loading a web page.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Client-server", statement: "Request-response communication." }],
                steps: [
                  { reasoning: "The client (browser) sends a request for a resource such as a web page.", marks: 1, markCode: "AO1" },
                  { reasoning: "The server receives the request and processes it.", marks: 1, markCode: "AO1" },
                  { reasoning: "The server sends a response containing the page files, which the browser renders.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Client requests → server responds with the requested resources.",
              },
            },
            {
              id: "ecs11-u11-net-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe the steps that occur from the moment a user types a URL into a browser until the page is displayed.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Web request lifecycle", statement: "DNS → request → response → render." }],
                steps: [
                  { reasoning: "DNS translates the domain name in the URL into the server's IP address.", marks: 1, markCode: "AO1" },
                  { reasoning: "The browser sends an HTTP/HTTPS request to that IP address.", marks: 1, markCode: "AO1" },
                  { reasoning: "The server processes the request and returns a response with the page files.", marks: 1, markCode: "AO1" },
                  { reasoning: "The browser receives the files and renders them as a visible web page.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "DNS lookup → request → response → browser renders.",
              },
            },
            {
              id: "ecs11-u11-net-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A bank's customers complain that the padlock sometimes disappears when they pay online.",
              parts: [
                { label: "a", prompt: "Explain what the padlock indicates and why it matters for payments.", marks: 2 },
                { label: "b", prompt: "Give two possible causes of a missing padlock and how the bank should respond.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "HTTPS trust", statement: "Padlock = encrypted, authenticated connection." }],
                steps: [
                  { part: "a", reasoning: "The padlock shows the connection uses HTTPS — data is encrypted and the server is authenticated.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Without it, card details could be intercepted or the site could be a fake.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "The payment page may load over plain HTTP — a mixed-content problem.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "The certificate may have expired, or a redirect drops HTTPS.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "The bank should fix the page to use HTTPS everywhere and warn customers to check the padlock.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) padlock = HTTPS encryption + authentication (b) mixed content, expired cert; enforce HTTPS site-wide",
              },
            },
            {
              id: "ecs11-u11-net-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An online shop's website sometimes takes a long time to load, and customers worry about entering card details.",
              parts: [
                { label: "a", prompt: "Explain two reasons why HTTPS is essential for an online shop.", marks: 3 },
                { label: "b", prompt: "Describe what DNS does for the shop and what happens if it fails.", marks: 4 },
                { label: "c", prompt: "Distinguish the responsibilities of the client and the server in this scenario.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Web security and roles", statement: "HTTPS protects data; DNS finds servers; client/server split duties." }],
                steps: [
                  { part: "a", reasoning: "HTTPS encrypts card details in transit so they cannot be intercepted.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "It authenticates the server so customers can be sure they reached the real shop.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "It builds customer trust — browsers flag non-HTTPS sites as unsafe.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "DNS translates the shop's domain name into the IP address of its server.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Without it, users could not find the server using the domain name.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "If DNS fails, the site becomes unreachable by name even though the server is still running.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Customers could only reach it by typing the raw IP address.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "The client (browser) sends requests and renders the pages.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "The server stores the site files and product database and sends responses.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Processing power and storage live on the server; display happens on the client.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) encrypts payments, authenticates shop, builds trust (b) DNS maps name to IP; failure blocks access by name (c) client renders/requests, server stores/responds",
              },
            },
          ],
        },
        {
          id: "ecs11-u11-web-access", title: "Hosting, browsers and web addresses",
          skill: "Explain web hosting, browser functions and the relationship between domain names, DNS and IP addresses.",
          sections: [
            { heading: "Hosting and browsers", body: "Web hosting is a service that stores a website's files on a server connected to the internet, so anyone can request them. A web server is a powerful computer running server software that responds to HTTP/HTTPS requests.\n\nA browser is client software that sends requests, receives files and renders them as pages. Browsers also manage features such as bookmarks, tabs, cookies and history." },
            { heading: "Names versus numbers", body: "A URL (Uniform Resource Locator) identifies a web resource, typically written as protocol://domain/path, e.g. https://www.example.com/about. The domain name is the human-friendly part.\n\nIP addresses are numbers that identify machines on a network; domain names exist because numbers are hard to remember. DNS bridges the two, translating names to IP addresses. Many websites share hosting through virtual hosting, where one server hosts many domains." },
          ],
          keyFormulas: [
            { name: "URL", statement: "protocol :// domain / path" },
            { name: "Domain vs IP", statement: "Name for humans, number for machines; DNS links them" },
            { name: "Hosting", statement: "Files stored on a server, delivered on request" },
          ],
          workedExample: {
            problem: "Why does a web address contain both a domain name and, behind the scenes, an IP address?",
            solution: "The domain name is easy for humans to remember and type; the IP address is what the network machinery actually uses to locate the server. DNS translates one into the other.",
          },
          questions: [
            {
              id: "ecs11-u11-web-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a web browser?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Software that stores web pages on a server" },
                { id: "b", text: "Client software that requests, receives and displays web pages" },
                { id: "c", text: "A type of web server" },
                { id: "d", text: "A protocol for transferring files" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Browser", statement: "Client software for viewing the web." }],
                steps: [{ reasoning: "A browser requests resources and renders them as pages.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Client software that requests, receives and displays web pages",
              },
            },
            {
              id: "ecs11-u11-web-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define web hosting and state what it provides for a website.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Web hosting", statement: "Storage and delivery of site files on a server." }],
                steps: [
                  { reasoning: "Web hosting is a service that stores a website's files on an internet-connected server.", marks: 1, markCode: "AO1" },
                  { reasoning: "It keeps the files available so visitors can request them at any time.", marks: 1, markCode: "AO1" },
                  { reasoning: "It delivers the files over the internet in response to browser requests.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Storing and serving website files on a server.",
              },
            },
            {
              id: "ecs11-u11-web-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between an IP address and a domain name.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "IP address vs domain", statement: "Numbers for machines, names for humans." }],
                steps: [
                  { reasoning: "An IP address is a numerical label identifying a machine on a network.", marks: 1, markCode: "AO1" },
                  { reasoning: "A domain name is a human-readable name such as www.example.com.", marks: 1, markCode: "AO1" },
                  { reasoning: "DNS translates between them so users can type names while machines use numbers.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "IP = numeric machine address; domain = readable name resolved by DNS.",
              },
            },
            {
              id: "ecs11-u11-web-q4", difficulty: "core", totalMarks: 4,
              stem: "Break down the URL https://www.museum.org/exhibits and explain each part.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "convention", name: "URL structure", statement: "protocol://domain/path" }],
                steps: [
                  { reasoning: "https is the protocol — the secure version of HTTP.", marks: 1, markCode: "AO1" },
                  { reasoning: "www.museum.org is the domain name identifying the site.", marks: 1, markCode: "AO1" },
                  { reasoning: "/exhibits is the path to a specific resource on the site.", marks: 1, markCode: "AO1" },
                  { reasoning: "Together they tell the browser which secure server and which page to request.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "https = protocol, www.museum.org = domain, /exhibits = path.",
              },
            },
            {
              id: "ecs11-u11-web-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A photographer wants to show her portfolio online to potential clients.",
              parts: [
                { label: "a", prompt: "Explain what web hosting provides for her portfolio site.", marks: 2 },
                { label: "b", prompt: "Describe how a visitor's browser retrieves a photo page from her site.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Publishing a website", statement: "Hosting stores files; browsers retrieve them." }],
                steps: [
                  { part: "a", reasoning: "Hosting stores her HTML, images and CSS files on an always-on server.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "This makes the portfolio reachable by anyone on the internet at any time.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "The visitor's browser uses DNS to find the hosting server's IP address.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "It sends an HTTP/HTTPS request for the portfolio page.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "The server responds with the files, which the browser renders as the page.", marks: 1, markCode: "AO1", part: "b" },
                ],
                finalAnswer: "(a) stores and serves files 24/7 (b) DNS → request → response → render",
              },
            },
            {
              id: "ecs11-u11-web-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A museum wants visitors anywhere in the world to view its online exhibits.",
              parts: [
                { label: "a", prompt: "Explain what a web host must provide for global visitors.", marks: 3 },
                { label: "b", prompt: "Describe three functions a visitor's browser performs when viewing an exhibit page.", marks: 3 },
                { label: "c", prompt: "Explain how the museum's domain name is linked to the server's IP address, and why both are needed.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Global web delivery", statement: "Reliable hosting, capable browsers, DNS bridging names and numbers." }],
                steps: [
                  { part: "a", reasoning: "Reliable always-on servers storing the exhibit files.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Enough bandwidth and uptime so visitors worldwide can connect.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "HTTPS certificates so connections are secure and trusted.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "Sends HTTP/HTTPS requests for the page and its resources.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Receives and interprets the returned HTML, CSS and images.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Renders the result on screen and manages features like cookies and history.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "The domain name (e.g. museum.org) is registered to the museum and easy to remember.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "The server has an IP address used by the network machinery.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "DNS records map the domain name to that IP address.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Both are needed: names for humans, numbers for machines.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) uptime, bandwidth, HTTPS (b) request, receive/render, manage state (c) domain for humans, IP for machines, DNS maps them",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u11-internet-notes", title: "How the Internet Works — notes",
      summary: "Clients request, servers respond; DNS maps names to IPs; HTTPS encrypts; hosting stores the files.",
      sections: [
        { heading: "Key idea", body: "The client-server model underpins the web: browsers request, servers respond." },
        { heading: "Naming", body: "Domain names are human-readable; IP addresses identify machines; DNS translates between them." },
        { heading: "Security", body: "HTTPS adds TLS encryption and server authentication — look for the padlock." },
      ],
    },
  },
  {
    file: "lesson-11-2.ts", exportName: "lesson112",
    lesson: {
      id: "ecs11-u11-lesson-11-2", code: "11-2",
      title: "Online Services and E-Commerce",
      goal: "I CAN describe how search engines, social media, online shopping, cloud storage and streaming services work and evaluate their benefits and risks.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — The wider world: online services and e-commerce"],
      vocabulary: [
        { term: "Search engine", definition: "A service that indexes web pages and returns ranked results for queries." },
        { term: "Crawler", definition: "Software that automatically visits web pages to build a search index." },
        { term: "Social media", definition: "Online platforms where users create profiles and share content." },
        { term: "E-commerce", definition: "Buying and selling goods or services over the internet." },
        { term: "Cloud storage", definition: "Storing files on remote servers accessed over the internet." },
        { term: "Streaming", definition: "Playing media content continuously as it is downloaded, without full download." },
      ],
      concepts: [
        {
          id: "ecs11-u11-online-services", title: "Search engines and social media",
          skill: "Explain how search engines and social media platforms work and evaluate their benefits and risks.",
          sections: [
            { heading: "How search engines work", body: "Search engines use software called crawlers (or spiders) that automatically visit web pages and follow links, building a huge index of page content. When a user enters a query, the engine matches it against the index and ranks results using algorithms that consider relevance, popularity and freshness.\n\nSearch engines personalise results based on location, history and cookies, which can create filter bubbles where users only see confirming views." },
            { heading: "Social media", body: "Social media platforms let users create profiles, post content and interact. Benefits include staying connected, sharing information quickly and building communities. Risks include privacy exposure, cyberbullying, misinformation spread and addiction-like usage patterns.\n\nContent is often targeted using algorithms that maximise engagement, which can amplify extreme or misleading material." },
          ],
          keyFormulas: [
            { name: "Search engine", statement: "Crawl → index → match query → rank results" },
            { name: "Personalisation", statement: "Results shaped by location, history and cookies" },
          ],
          workedExample: {
            problem: "Why might two people searching the same question see different first results?",
            solution: "Personalisation — location, past searches and cookies cause the ranking algorithm to order results differently for each user.",
          },
          questions: [
            {
              id: "ecs11-u11-search-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a search engine?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Software that stores a user's files online" },
                { id: "b", text: "A service that indexes web pages and returns ranked results for queries" },
                { id: "c", text: "A type of social media platform" },
                { id: "d", text: "A protocol for sending emails" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Search engine", statement: "Indexes pages and ranks results." }],
                steps: [{ reasoning: "Search engines index the web and return ranked results for queries.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Service that indexes pages and returns ranked results",
              },
            },
            {
              id: "ecs11-u11-search-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Describe the three main stages a search engine uses to answer a query.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Search engine pipeline", statement: "Crawl, index, rank." }],
                steps: [
                  { reasoning: "Crawlers visit web pages and follow links to collect content.", marks: 1, markCode: "AO1" },
                  { reasoning: "The collected data is stored in a searchable index.", marks: 1, markCode: "AO1" },
                  { reasoning: "When a query is entered, matching pages are ranked and returned.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Crawl → index → rank.",
              },
            },
            {
              id: "ecs11-u11-search-q3", difficulty: "core", totalMarks: 4,
              stem: "Give two benefits and two risks of using social media.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Social media", statement: "Connection vs exposure." }],
                steps: [
                  { reasoning: "Benefit: staying connected with friends, family and communities.", marks: 1, markCode: "AO1" },
                  { reasoning: "Benefit: sharing information and news quickly.", marks: 1, markCode: "AO1" },
                  { reasoning: "Risk: personal information and posts can be exposed or misused.", marks: 1, markCode: "AO2" },
                  { reasoning: "Risk: enables cyberbullying and the spread of misinformation.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Connection and fast sharing vs privacy exposure and harm risks.",
              },
            },
            {
              id: "ecs11-u11-search-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A small bakery wants to attract customers through social media.",
              parts: [
                { label: "a", prompt: "Give two ways social media could help the bakery.", marks: 2 },
                { label: "b", prompt: "Give two risks and a mitigation for each.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Social media for business", statement: "Reach vs reputation risk." }],
                steps: [
                  { part: "a", reasoning: "Post photos of products and daily specials to attract local customers.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Interact with customers and run promotions cheaply.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Risk: negative reviews or complaints go public — respond promptly and professionally.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "b", reasoning: "Risk: account hacking or impersonation — use strong passwords and two-factor authentication.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "b", reasoning: "Risk: sharing too much business information — control what is posted and who can see it.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) promotion, customer interaction (b) reputation, hacking, oversharing — each needs mitigation",
              },
            },
            {
              id: "ecs11-u11-search-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Compare search engines and social media as sources of news.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Information sources", statement: "Search returns indexed pages; social spreads user content." }],
                steps: [
                  { reasoning: "Search engines return ranked pages from a broad index of websites.", marks: 1, markCode: "AO1" },
                  { reasoning: "Users actively choose what to search for, giving some control over sources.", marks: 1, markCode: "AO2" },
                  { reasoning: "Social media delivers content passively through feeds and shares by contacts.", marks: 1, markCode: "AO1" },
                  { reasoning: "Content spreads fast and can be unverified or misleading.", marks: 1, markCode: "AO2" },
                  { reasoning: "Algorithms amplify engaging content, not necessarily accurate content.", marks: 1, markCode: "AO2" },
                  { reasoning: "Search results can also be personalised, creating similar echo-chamber effects.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Search = user-driven indexed pages; social = contact-driven fast spread; both risk bias and misinformation.",
              },
            },
            {
              id: "ecs11-u11-search-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A student group runs a social media page sharing exam tips.",
              parts: [
                { label: "a", prompt: "Explain how a search engine ranks web pages and why results differ between users.", marks: 3 },
                { label: "b", prompt: "Explain what a filter bubble is and one way it could affect the group.", marks: 3 },
                { label: "c", prompt: "Give three checks the group should use before trusting exam advice found online.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Online information quality", statement: "Ranking, personalisation and verification." }],
                steps: [
                  { part: "a", reasoning: "Ranking algorithms weigh relevance to the query, page quality and popularity signals.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "They also use personalisation signals such as location and search history.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "So two users with different histories see differently ordered results.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "A filter bubble is when algorithms show users mainly content matching their existing views.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "It can reinforce wrong exam advice because corrections never reach them.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "The group may become overconfident in unverified tips.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "Check the source — is it an official exam board or qualified educator?", marks: 1, markCode: "AO3", part: "c" },
                  { part: "c", reasoning: "Check the date — outdated advice may not match the current syllabus.", marks: 1, markCode: "AO3", part: "c" },
                  { part: "c", reasoning: "Cross-check claims against at least two independent reliable sources.", marks: 1, markCode: "AO3", part: "c" },
                  { part: "c", reasoning: "Be wary of sensational language, missing citations and unverifiable claims.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) relevance + personalisation signals (b) algorithmic echo chamber reinforces beliefs (c) source, date, corroboration, tone",
              },
            },
          ],
        },
        {
          id: "ecs11-u11-commerce-cloud", title: "E-commerce, cloud storage and streaming",
          skill: "Describe online shopping, cloud storage and streaming, and evaluate their advantages and risks.",
          sections: [
            { heading: "E-commerce and cloud storage", body: "E-commerce lets businesses sell online through websites and apps. A typical transaction: the customer browses, adds items to a basket, enters payment details, and the payment is processed securely (often via HTTPS and payment gateways). Benefits include 24/7 selling, lower overheads and wider reach; risks include fraud, security breaches and disputes over delivery or refunds.\n\nCloud storage keeps files on remote servers accessed over the internet. Advantages: access anywhere, automatic backup, easy sharing, no local hardware needed. Disadvantages: needs internet, monthly costs, and privacy/security concerns if the provider is compromised." },
            { heading: "Streaming", body: "Streaming delivers media (video, music, games) continuously as it is downloaded, so content plays without waiting for a full download. Buffering stores a few seconds of content ahead to smooth out network fluctuations.\n\nBenefits: instant access to huge libraries, no storage needed, works on many devices. Drawbacks: needs reliable fast internet, ongoing subscription costs, and quality drops on slow connections. Unlike downloading, streamed content is usually licensed and cannot be kept permanently." },
          ],
          keyFormulas: [
            { name: "E-commerce flow", statement: "Browse → basket → payment → fulfilment" },
            { name: "Cloud storage", statement: "Files on remote servers, accessed online" },
            { name: "Streaming", statement: "Continuous download + playback; needs bandwidth" },
          ],
          workedExample: {
            problem: "Why does a video stall briefly at the start of a stream but then play smoothly?",
            solution: "Buffering — the player downloads a few seconds ahead so temporary network slowdowns do not interrupt playback.",
          },
          questions: [
            {
              id: "ecs11-u11-shop-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is cloud storage?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Storing files only on your own device" },
                { id: "b", text: "Storing files on remote servers accessed over the internet" },
                { id: "c", text: "A type of web browser" },
                { id: "d", text: "Downloading software updates" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cloud storage", statement: "Remote file storage accessed online." }],
                steps: [{ reasoning: "Cloud storage keeps files on remote servers reached via the internet.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Files on remote servers accessed over the internet",
              },
            },
            {
              id: "ecs11-u11-shop-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Describe the main steps in an online purchase.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "E-commerce transaction", statement: "Browse → pay → fulfil." }],
                steps: [
                  { reasoning: "The customer browses products and adds items to a basket or cart.", marks: 1, markCode: "AO1" },
                  { reasoning: "They enter delivery and payment details at checkout.", marks: 1, markCode: "AO1" },
                  { reasoning: "Payment is processed and the order is confirmed and fulfilled.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Browse → basket → checkout/payment → confirmation and delivery.",
              },
            },
            {
              id: "ecs11-u11-shop-q3", difficulty: "core", totalMarks: 4,
              stem: "Give two advantages and two disadvantages of cloud storage.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Cloud storage", statement: "Access vs dependence." }],
                steps: [
                  { reasoning: "Advantage: files can be accessed from any internet-connected device.", marks: 1, markCode: "AO1" },
                  { reasoning: "Advantage: easy sharing and automatic backup.", marks: 1, markCode: "AO1" },
                  { reasoning: "Disadvantage: requires a reliable internet connection to reach files.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage: privacy and security depend on the provider; ongoing subscription cost.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Anywhere access + backup vs internet dependence + provider trust/cost.",
              },
            },
            {
              id: "ecs11-u11-shop-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A bakery considers moving from a market stall to selling online.",
              parts: [
                { label: "a", prompt: "Give two benefits of e-commerce for the bakery.", marks: 2 },
                { label: "b", prompt: "Give two risks for customers buying food online and how the bakery can reduce them.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "E-commerce trade-offs", statement: "Reach and convenience vs trust and quality risk." }],
                steps: [
                  { part: "a", reasoning: "Sells 24/7 to customers beyond the local area.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Lower overheads than a physical shop for some products.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Risk: customers cannot inspect freshness — show clear photos and dates.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Risk: payment fraud — use a reputable payment gateway over HTTPS.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Risk: delivery damage or disputes — use reliable delivery and clear refund policy.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) reach, lower costs (b) quality trust, payment security, delivery disputes",
              },
            },
            {
              id: "ecs11-u11-shop-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Compare streaming a film with downloading it first.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Streaming vs downloading", statement: "Continuous vs stored playback." }],
                steps: [
                  { reasoning: "Streaming plays content as it downloads, needing no large storage space.", marks: 1, markCode: "AO1" },
                  { reasoning: "It gives instant access to large libraries without waiting for downloads.", marks: 1, markCode: "AO2" },
                  { reasoning: "Downloading stores the whole file, allowing offline playback.", marks: 1, markCode: "AO1" },
                  { reasoning: "Streaming quality depends on current bandwidth; buffering smooths interruptions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Downloading needs storage space and a one-time wait but works offline.", marks: 1, markCode: "AO2" },
                  { reasoning: "Streaming content is typically licensed — it cannot be kept or shared permanently.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Streaming = instant, no storage, needs bandwidth; download = offline-ready, needs space and time.",
              },
            },
            {
              id: "ecs11-u11-shop-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A family uses cloud storage for photos and subscribes to a streaming service.",
              parts: [
                { label: "a", prompt: "Give three benefits of e-commerce and online services for a small business.", marks: 3 },
                { label: "b", prompt: "Explain two security concerns when paying online and how to reduce each.", marks: 4 },
                { label: "c", prompt: "Give two privacy considerations for storing family photos in the cloud.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Digital services trade-offs", statement: "Convenience vs security and privacy." }],
                steps: [
                  { part: "a", reasoning: "Sell to customers 24/7 without geographic limits.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Lower running costs than a physical premises for many goods.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Collect customer data and feedback to improve the business.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Concern: card details intercepted — only pay on HTTPS sites with padlock.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Use a trusted payment gateway rather than entering card details on unknown sites.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "b", reasoning: "Concern: fake shops stealing money — check reviews, contact details and domain.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Keep devices updated and avoid public Wi-Fi for payments.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "c", reasoning: "Photos are stored on third-party servers — check the provider's security and privacy policy.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Use strong passwords and two-factor authentication on the account.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Sensitive photos may be exposed in a breach — avoid storing highly private images or encrypt them.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) reach, cost, feedback (b) interception + fake shops — HTTPS, gateways, checks (c) provider trust, strong auth, sensitive content",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u11-online-notes", title: "Online Services and E-Commerce — notes",
      summary: "Search engines crawl-index-rank; social media connects but exposes; e-commerce sells online; cloud stores remotely; streaming plays on demand.",
      sections: [
        { heading: "Search and social", body: "Search is query-driven and indexed; social is feed-driven and social. Both personalise and can mislead." },
        { heading: "Commerce", body: "E-commerce trades reach and convenience for fraud and trust risks." },
        { heading: "Storage and streaming", body: "Cloud = remote access, internet-dependent. Streaming = instant playback, bandwidth-dependent." },
      ],
    },
  },
  {
    file: "lesson-11-3.ts", exportName: "lesson113",
    lesson: {
      id: "ecs11-u11-lesson-11-3", code: "11-3",
      title: "Digital Citizenship and Staying Safe Online",
      goal: "I CAN explain digital footprints, manage privacy settings, respond to cyberbullying and identify misinformation.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — The wider world: digital citizenship and online safety"],
      vocabulary: [
        { term: "Digital footprint", definition: "The trail of data a person leaves online through posts, searches and activity." },
        { term: "Privacy settings", definition: "Controls that limit who can see a user's profile, posts and data." },
        { term: "Cyberbullying", definition: "Using digital technology to deliberately harm, threaten or harass someone." },
        { term: "Misinformation", definition: "False or inaccurate information spread, whether deliberately or not." },
        { term: "Phishing", definition: "Fraudulent messages designed to trick users into revealing personal data." },
        { term: "Digital citizenship", definition: "Responsible, ethical and safe behaviour when using digital technology." },
      ],
      concepts: [
        {
          id: "ecs11-u11-footprint-privacy", title: "Digital footprint and privacy",
          skill: "Explain what a digital footprint is, its permanence, and how privacy settings protect users.",
          sections: [
            { heading: "Digital footprint", body: "A digital footprint is everything recorded about a person online: posts, photos, comments, likes, searches, location data and account activity. It has two parts — the active footprint (what you deliberately post) and the passive footprint (data collected automatically, e.g. by cookies and apps).\n\nFootprints are persistent: deleted posts can survive in screenshots, caches and other people's accounts. Employers, universities and advertisers may review online histories, so careless posts can have long-term consequences." },
            { heading: "Privacy and settings", body: "Privacy settings control who can see profiles, posts and personal data — on social media, apps and devices. Strong passwords, two-factor authentication and limiting location sharing reduce risk.\n\nCookies and tracking let sites and advertisers build profiles of users. Reviewing permissions regularly and using private browsing where appropriate limits data collection. Legal protections such as data protection laws give users rights over their personal data." },
          ],
          keyFormulas: [
            { name: "Digital footprint", statement: "Active (posted) + passive (collected) online data" },
            { name: "Privacy controls", statement: "Settings limit visibility; authentication secures access" },
          ],
          workedExample: {
            problem: "A student posts a rude comment, deletes it an hour later, and assumes it is gone. Is it?",
            solution: "Not necessarily — others may have screenshotted it, and platforms and search engines may retain copies. Deleted content can resurface.",
          },
          questions: [
            {
              id: "ecs11-u11-citizen-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a digital footprint?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A shoe print left on a keyboard" },
                { id: "b", text: "The trail of data a person leaves online through posts, searches and activity" },
                { id: "c", text: "A type of internet cookie" },
                { id: "d", text: "A security certificate" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Digital footprint", statement: "Recorded online activity and data." }],
                steps: [{ reasoning: "A digital footprint is the data trail a user leaves online.", marks: 2, markCode: "AO1" }],
                finalAnswer: "The data trail a person leaves online",
              },
            },
            {
              id: "ecs11-u11-citizen-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define digital footprint and give two examples of what contributes to it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Digital footprint", statement: "Active and passive online data." }],
                steps: [
                  { reasoning: "The digital footprint is all data recorded about a person online.", marks: 1, markCode: "AO1" },
                  { reasoning: "Active examples: posts, photos, comments, likes.", marks: 1, markCode: "AO1" },
                  { reasoning: "Passive examples: search history, location data, cookies.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Recorded online data — posts/photos (active) and tracking/locations (passive).",
              },
            },
            {
              id: "ecs11-u11-citizen-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways privacy settings protect a social media user.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Privacy settings", statement: "Controls limit who sees data and who can contact." }],
                steps: [
                  { reasoning: "They restrict who can view posts and profile information.", marks: 1, markCode: "AO1" },
                  { reasoning: "This reduces exposure to strangers and potential attackers.", marks: 1, markCode: "AO2" },
                  { reasoning: "They can limit who can send messages or friend requests.", marks: 1, markCode: "AO1" },
                  { reasoning: "They reduce the risk of harassment and unwanted contact.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Limit audience for posts and limit who can contact — reducing exposure and harassment.",
              },
            },
            {
              id: "ecs11-u11-citizen-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A teenager wants to reduce their digital footprint before applying for jobs.",
              parts: [
                { label: "a", prompt: "Explain why old posts can still affect them even after deletion.", marks: 2 },
                { label: "b", prompt: "Give three steps they could take to manage their footprint.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Footprint permanence", statement: "Copies survive deletion." }],
                steps: [
                  { part: "a", reasoning: "Others may have saved or shared the content before deletion.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Platforms, caches and search engines can retain copies of deleted material.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Review and delete old posts, photos and tags on all accounts.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "b", reasoning: "Tighten privacy settings so only approved contacts can see content.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "b", reasoning: "Search their own name and request removal of unwanted results.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) copies persist elsewhere (b) delete old content, tighten settings, audit search results",
              },
            },
            {
              id: "ecs11-u11-citizen-q5", difficulty: "challenge", totalMarks: 6,
              stem: "An employer rejects a candidate after finding offensive posts from five years ago.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Footprint consequences", statement: "Online history can be reviewed and judged." }],
                steps: [
                  { reasoning: "The posts remained part of the candidate's digital footprint.", marks: 1, markCode: "AO1" },
                  { reasoning: "Employers may legitimately review public online information before hiring.", marks: 1, markCode: "AO2" },
                  { reasoning: "Old content can still shape first impressions despite changed behaviour.", marks: 1, markCode: "AO2" },
                  { reasoning: "Deletion does not guarantee removal from copies or archives.", marks: 1, markCode: "AO2" },
                  { reasoning: "The candidate should have managed their footprint earlier with privacy settings.", marks: 1, markCode: "AO3" },
                  { reasoning: "Lesson: think before posting — content may outlive its context.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Footprints are permanent and reviewable; manage privacy early and think before posting.",
              },
            },
            {
              id: "ecs11-u11-citizen-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school is writing its online safety policy for students.",
              parts: [
                { label: "a", prompt: "Distinguish active and passive parts of a digital footprint.", marks: 3 },
                { label: "b", prompt: "Explain three privacy settings or habits students should use.", marks: 3 },
                { label: "c", prompt: "Give three steps students can take to reduce risks from data collection.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Digital self-protection", statement: "Control what you post; limit what is collected." }],
                steps: [
                  { part: "a", reasoning: "Active: content deliberately posted — comments, photos, likes, shares.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Passive: data collected automatically — searches, location, cookies, app usage.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Both can be viewed by platforms, advertisers or others.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Set profiles to private or contacts-only.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Review and limit app permissions, especially location and contacts.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Use strong unique passwords and two-factor authentication.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "c", reasoning: "Turn off location services when not needed.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Clear cookies and browsing data regularly; use private browsing for sensitive sessions.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Read privacy policies and decline unnecessary data sharing.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Be cautious about public Wi-Fi and check app permissions periodically.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) posted vs collected (b) private profiles, app permissions, strong auth (c) limit location, clear data, review policies",
              },
            },
          ],
        },
        {
          id: "ecs11-u11-safe-online", title: "Cyberbullying, misinformation and responsible use",
          skill: "Describe cyberbullying, explain how to respond, identify misinformation and practise responsible online behaviour.",
          sections: [
            { heading: "Cyberbullying and misinformation", body: "Cyberbullying is deliberate, repeated harm using digital technology — hurtful messages, sharing private images, exclusion from groups or impersonation. Unlike school bullying it can follow the victim home and content can spread widely. Responses: do not retaliate, save evidence, block the bully, report to the platform and a trusted adult.\n\nMisinformation is false information spread online, often designed to mislead. Warning signs: sensational headlines, no named sources, emotional language, recent domain names, and claims that cannot be verified. Verify by checking reputable sources, the publication date and whether multiple independent outlets agree." },
            { heading: "Responsible digital citizenship", body: "Digital citizenship means using technology lawfully, ethically and safely: respecting others' privacy, crediting sources, not sharing others' content without permission, and standing up to harm.\n\nPhishing emails and fake websites try to steal passwords and card details — check sender addresses, avoid clicking unexpected links and never share credentials. Good citizens also know when to log off and balance screen time." },
          ],
          keyFormulas: [
            { name: "Cyberbullying", statement: "Repeated deliberate harm via digital technology" },
            { name: "Misinformation checks", statement: "Source, date, corroboration, tone" },
            { name: "Response", statement: "Save evidence → block → report → tell a trusted adult" },
          ],
          workedExample: {
            problem: "A classmate receives repeated nasty messages and humiliating photos shared in a group chat. What should they do?",
            solution: "Do not reply or retaliate; save screenshots as evidence; block the sender; report to the platform; tell a parent, teacher or school counsellor.",
          },
          questions: [
            {
              id: "ecs11-u11-safe-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is cyberbullying?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Any disagreement online" },
                { id: "b", text: "Deliberate, repeated harm to someone using digital technology" },
                { id: "c", text: "Sharing funny videos" },
                { id: "d", text: "A type of computer virus" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cyberbullying", statement: "Repeated deliberate digital harm." }],
                steps: [{ reasoning: "Cyberbullying is repeated, intentional harm via digital means.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Deliberate repeated harm using digital technology",
              },
            },
            {
              id: "ecs11-u11-safe-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define cyberbullying and describe one way it differs from traditional bullying.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cyberbullying", statement: "Digital harm that can follow the victim anywhere." }],
                steps: [
                  { reasoning: "Cyberbullying is deliberate, repeated harm using digital technology.", marks: 1, markCode: "AO1" },
                  { reasoning: "Examples include hurtful messages, sharing private images or impersonation.", marks: 1, markCode: "AO1" },
                  { reasoning: "It can reach the victim anywhere at any time, and content can spread widely and permanently.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Repeated digital harm; unlike school bullying it follows the victim home and spreads fast.",
              },
            },
            {
              id: "ecs11-u11-safe-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe three checks a user should make before believing a shocking news story online.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Verifying information", statement: "Source, date, corroboration." }],
                steps: [
                  { reasoning: "Check the source — is it a reputable news organisation or an unknown site?", marks: 1, markCode: "AO2" },
                  { reasoning: "Check the date — old stories are often recirculated as new.", marks: 1, markCode: "AO2" },
                  { reasoning: "Cross-check with other independent reliable sources.", marks: 1, markCode: "AO2" },
                  { reasoning: "Be suspicious of sensational language and claims with no evidence or named sources.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Source reputation, publication date, corroboration, tone.",
              },
            },
            {
              id: "ecs11-u11-safe-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A student is being cyberbullied by classmates in a group chat.",
              parts: [
                { label: "a", prompt: "Give two steps the student should take immediately.", marks: 2 },
                { label: "b", prompt: "Describe the full process for dealing with the situation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Cyberbullying response", statement: "Evidence → block → report → support." }],
                steps: [
                  { part: "a", reasoning: "Save screenshots of the messages as evidence.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Block the senders and do not reply or retaliate.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Report the content to the platform using its reporting tools.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Tell a trusted adult — parent, teacher or school counsellor.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "The school can investigate and apply its bullying policy; keep the evidence.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) save evidence, block (b) report to platform, tell trusted adult, involve school",
              },
            },
            {
              id: "ecs11-u11-safe-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A fake story claiming a school closure spreads through students' group chats minutes before a real announcement.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Misinformation response", statement: "Verify before sharing; correct calmly." }],
                steps: [
                  { reasoning: "Students should check official school channels before believing or sharing it.", marks: 1, markCode: "AO2" },
                  { reasoning: "The story likely exploited urgency — a classic misinformation tactic.", marks: 1, markCode: "AO2" },
                  { reasoning: "Sharing unverified claims causes panic and wastes emergency resources.", marks: 1, markCode: "AO2" },
                  { reasoning: "Correcting with a calm message linking to the official source helps more than arguing.", marks: 1, markCode: "AO3" },
                  { reasoning: "The school should post verified information quickly on official channels.", marks: 1, markCode: "AO3" },
                  { reasoning: "Longer term, media literacy education reduces susceptibility to fake news.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Verify via official sources; urgency signals fake news; correct calmly and educate.",
              },
            },
            {
              id: "ecs11-u11-safe-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school wants to promote responsible digital citizenship among its students.",
              parts: [
                { label: "a", prompt: "Give three responsibilities of a good digital citizen.", marks: 3 },
                { label: "b", prompt: "Explain two harms caused by the spread of misinformation.", marks: 3 },
                { label: "c", prompt: "Design a short plan of four rules the school could promote for safe, responsible online behaviour.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Digital citizenship", statement: "Rights come with responsibilities online." }],
                steps: [
                  { part: "a", reasoning: "Respect others — no harassment, bullying or sharing private content.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Credit sources and share accurate information.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Protect personal data and respect others' privacy.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Misinformation can cause panic, bad decisions and harm to reputations.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "It erodes trust in genuine news and institutions.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "In emergencies it can delay people from seeking real help.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "c", reasoning: "Rule 1: think before posting — consider the long-term footprint.", marks: 1, markCode: "AO3", part: "c" },
                  { part: "c", reasoning: "Rule 2: verify before sharing — check sources and dates.", marks: 1, markCode: "AO3", part: "c" },
                  { part: "c", reasoning: "Rule 3: protect accounts — strong passwords, privacy settings, never share credentials.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Rule 4: report harm — block, save evidence and tell a trusted adult.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) respect, accuracy, privacy (b) panic, eroded trust, delayed help (c) footprint, verify, secure accounts, report",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u11-citizenship-notes", title: "Digital Citizenship and Staying Safe Online — notes",
      summary: "Footprints persist; privacy settings limit exposure; respond to bullying with evidence and reporting; verify before believing or sharing.",
      sections: [
        { heading: "Footprint", body: "Active posts + passive tracking = permanent record; manage it before it manages you." },
        { heading: "Safety", body: "Evidence, block, report, tell an adult — never retaliate to cyberbullying." },
        { heading: "Misinformation", body: "Check source, date and corroboration; urgency and emotion are red flags." },
      ],
    },
  },
];
