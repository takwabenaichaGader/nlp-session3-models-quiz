const QUESTIONS = [
  {
    "id": 1,
    "category": "POS & Text Classification",
    "mastery": [
      "POS & Text Classification"
    ],
    "difficulty": "Easy",
    "question": "What is the main purpose of Part-of-Speech (POS) tagging?",
    "choices": [
      "To discover hidden topics in a collection of documents",
      "To identify and classify words by their grammatical category",
      "To group synonyms into synsets",
      "To estimate a probability distribution over topics"
    ],
    "correct": 1,
    "explanation": "POS tagging assigns grammatical categories such as noun, verb, adjective, adverb, or determiner to words in a sentence.",
    "reminder": "POS tagging performs lexical analysis by assigning a grammatical category to each word."
  },
  {
    "id": 2,
    "category": "POS & Text Classification",
    "mastery": [
      "POS & Text Classification"
    ],
    "difficulty": "Medium",
    "question": "Why does the course favor a probabilistic approach over a purely deterministic reference for ambiguous POS tagging cases?",
    "choices": [
      "Because deterministic systems cannot store grammatical categories",
      "Because probabilistic models do not need any text data",
      "Because POS tagging never depends on neighboring words",
      "Because a probabilistic model can use word context when one word may belong to several grammatical categories"
    ],
    "correct": 3,
    "explanation": "The course uses examples such as “faible” and “bien” to show that a word may belong to different grammatical categories. Context helps decide the appropriate category.",
    "reminder": "Context matters when the same word form can have different grammatical roles."
  },
  {
    "id": 3,
    "category": "Syntactic Analysis",
    "mastery": [
      "Syntactic Analysis"
    ],
    "difficulty": "Easy",
    "question": "According to the course, what do parsing models do during syntactic analysis?",
    "choices": [
      "Assign sentiment weights to words",
      "Create probability distributions over hidden topics",
      "Use POS information to group words into phrases and assign grammatical functions",
      "Build WordNet synsets automatically"
    ],
    "correct": 2,
    "explanation": "Parsing models can start from POS tags, group words into phrases, and assign functions to those groups.",
    "reminder": "Syntactic analysis studies how words are organized into phrases and grammatical functions."
  },
  {
    "id": 4,
    "category": "Named Entity Recognition",
    "mastery": [
      "Named Entity Recognition"
    ],
    "difficulty": "Easy",
    "question": "What is the main goal of Named Entity Recognition (NER)?",
    "choices": [
      "Identify and classify meaningful entities using predefined semantic categories",
      "Count every word in a document",
      "Find the most probable hidden topic only",
      "Replace all words with synonyms"
    ],
    "correct": 0,
    "explanation": "NER identifies meaningful entities in text and groups them into semantic categories such as people, companies, organizations, dates, countries, or cities.",
    "reminder": "NER turns important mentions in unstructured text into predefined semantic categories."
  },
  {
    "id": 5,
    "category": "Named Entity Recognition",
    "mastery": [
      "Named Entity Recognition"
    ],
    "difficulty": "Medium",
    "question": "What advantage do advanced NER models have over simple predefined references?",
    "choices": [
      "They can only recognize words already listed in a dictionary",
      "They can detect unseen entities and use context when one expression may belong to several categories",
      "They remove the need for syntactic information in all cases",
      "They represent every entity as a topic probability"
    ],
    "correct": 1,
    "explanation": "The course states that advanced NER models can detect words not listed in the reference and classify ambiguous items according to context.",
    "reminder": "Advanced NER can use contextual evidence rather than relying only on fixed lookup lists."
  },
  {
    "id": 6,
    "category": "Sentiment Analysis",
    "mastery": [
      "Sentiment Analysis"
    ],
    "difficulty": "Medium",
    "question": "How is sentiment prediction described in the course?",
    "choices": [
      "By linking every word to a WordNet synset",
      "By assigning one topic label to each document",
      "By learning positive or negative word weights from labeled examples and combining their effects for a new text",
      "By parsing only noun phrases"
    ],
    "correct": 2,
    "explanation": "The course describes a learning process in which word weights are learned from labeled examples and then combined to estimate the overall sentiment of a new text.",
    "reminder": "Sentiment analysis can learn from labeled examples and aggregate evidence from words to predict an overall sentiment."
  },
  {
    "id": 7,
    "category": "Lexical Databases",
    "mastery": [
      "Lexical Databases"
    ],
    "difficulty": "Easy",
    "question": "What is the purpose of a lexical database in a concept model?",
    "choices": [
      "Organize words together with meanings, semantic relations, and language uses",
      "Store only punctuation rules",
      "Estimate LDA topic probabilities",
      "Replace all probabilistic models"
    ],
    "correct": 0,
    "explanation": "The course presents lexical databases as organized resources that connect words with their meanings, relations, and uses.",
    "reminder": "Concept models use lexical databases to represent explicit semantic knowledge."
  },
  {
    "id": 8,
    "category": "Semantic Relations",
    "mastery": [
      "Semantic Relations"
    ],
    "difficulty": "Easy",
    "question": "Which statement best describes hyponymy?",
    "choices": [
      "A relation between a part and a whole",
      "A relation between opposite meanings",
      "A relation from an event to another event it implies",
      "A relation in which one concept is more specific than another, forming an IS-A relation"
    ],
    "correct": 3,
    "explanation": "Hyponymy expresses a specific-to-general IS-A relation. The course example is “car IS-A vehicle”.",
    "reminder": "Hyponym = more specific concept; hypernym = more general concept."
  },
  {
    "id": 9,
    "category": "Semantic Relations",
    "mastery": [
      "Semantic Relations"
    ],
    "difficulty": "Easy",
    "question": "If a wheel is part of a car, which lexical-semantic relation describes “wheel” with respect to “car”?",
    "choices": [
      "Hypernymy",
      "Meronymy",
      "Antonymy",
      "Synonymy"
    ],
    "correct": 1,
    "explanation": "A meronym is a part of something. A wheel is therefore a meronym of a car, while the car is the holonym of the wheel.",
    "reminder": "Meronym = part; holonym = whole containing that part."
  },
  {
    "id": 10,
    "category": "WordNet",
    "mastery": [
      "WordNet"
    ],
    "difficulty": "Easy",
    "question": "How does WordNet organize words at a high level?",
    "choices": [
      "Only by document topic",
      "Only by named-entity category",
      "Into nouns, verbs, adjectives, and adverbs, with words linked to one or more synsets",
      "Into positive, negative, and neutral sentiment classes"
    ],
    "correct": 2,
    "explanation": "The course states that WordNet groups words into four major categories and associates words with synsets according to their meanings.",
    "reminder": "A synset represents one particular meaning and groups synonyms that share that meaning."
  },
  {
    "id": 11,
    "category": "WordNet",
    "mastery": [
      "WordNet"
    ],
    "difficulty": "Medium",
    "question": "Why can a word such as “mouse” be linked to several WordNet synsets?",
    "choices": [
      "Because one lexical form can have several distinct meanings",
      "Because WordNet assigns a random topic to each word",
      "Because synsets contain only antonyms",
      "Because WordNet ignores meaning and stores spelling only"
    ],
    "correct": 0,
    "explanation": "The course shows “mouse” associated with different concepts, illustrating that one word form may represent several meanings.",
    "reminder": "One word can have multiple senses; WordNet represents those senses with different synsets."
  },
  {
    "id": 12,
    "category": "Semantic Relations",
    "mastery": [
      "Semantic Relations",
      "WordNet"
    ],
    "difficulty": "Medium",
    "question": "In the WordNet noun-relation table, which relation goes from a whole concept to one of its parts?",
    "choices": [
      "Instance hyponym",
      "Antonym",
      "Derivation",
      "Part meronym"
    ],
    "correct": 3,
    "explanation": "The course table defines a part meronym as the relation from a whole concept to one of its parts.",
    "reminder": "Part meronym concerns whole → part; part holonym concerns part → whole."
  },
  {
    "id": 13,
    "category": "Semantic Relations",
    "mastery": [
      "Semantic Relations",
      "WordNet"
    ],
    "difficulty": "Medium",
    "question": "Which WordNet verb relation is illustrated when one event implies another event, such as “snore” implying “sleep”?",
    "choices": [
      "Troponym",
      "Entailment",
      "Hypernym",
      "Antonym"
    ],
    "correct": 1,
    "explanation": "The course lists entailment as a verb relation from an event to another event that it implies.",
    "reminder": "For verbs, entailment links an event with another event that necessarily follows from it in the course example."
  },
  {
    "id": 14,
    "category": "FrameNet",
    "mastery": [
      "FrameNet"
    ],
    "difficulty": "Easy",
    "question": "What is the central idea of FrameNet?",
    "choices": [
      "It assigns one sentiment weight to every word",
      "It creates only synonym sets",
      "It organizes meaning around semantic frames such as events, relations, or entities and their participants",
      "It stores only character strings"
    ],
    "correct": 2,
    "explanation": "FrameNet is based on frame semantics: a frame can represent an event, relation, or entity together with participant roles.",
    "reminder": "FrameNet focuses on situations and the roles of participants in those situations."
  },
  {
    "id": 15,
    "category": "WordNet vs FrameNet",
    "mastery": [
      "WordNet vs FrameNet",
      "WordNet",
      "FrameNet"
    ],
    "difficulty": "Medium",
    "question": "Which comparison between WordNet and FrameNet is most accurate?",
    "choices": [
      "WordNet emphasizes concepts, synsets, and lexical-semantic relations, while FrameNet emphasizes situations and participant roles",
      "WordNet and FrameNet are identical resources with different names",
      "WordNet models only probability distributions, while FrameNet performs POS tagging",
      "FrameNet is used only for sentiment classification"
    ],
    "correct": 0,
    "explanation": "The course presents WordNet and FrameNet as complementary lexical-semantic resources with different organizing principles.",
    "reminder": "WordNet: concepts and lexical relations. FrameNet: frames, situations, and participant roles."
  },
  {
    "id": 16,
    "category": "WordNet",
    "mastery": [
      "WordNet"
    ],
    "difficulty": "Medium",
    "question": "Which use of WordNet is explicitly linked to text generation or autocomplete in the course?",
    "choices": [
      "Assigning random topics to words",
      "Replacing all language models",
      "Removing punctuation from text",
      "Suggesting synonyms or alternatives that fit semantic context and help avoid repetition"
    ],
    "correct": 3,
    "explanation": "The course connects WordNet to choosing appropriate senses, using synonyms, suggesting alternatives, and avoiding repetition.",
    "reminder": "WordNet contributes explicit semantic knowledge; it is not itself a generative language model."
  },
  {
    "id": 17,
    "category": "WordNet",
    "mastery": [
      "WordNet"
    ],
    "difficulty": "Medium",
    "question": "What does the NLTK WordNet interface allow students to access in Python, according to the course?",
    "choices": [
      "Only document-topic probabilities",
      "Synsets, definitions, and semantic relations",
      "Only POS tag probabilities",
      "Only named entities"
    ],
    "correct": 1,
    "explanation": "The course names NLTK as a Python interface that gives direct access to WordNet synsets, definitions, and relations.",
    "reminder": "WordNet APIs expose structured lexical-semantic information programmatically."
  },
  {
    "id": 18,
    "category": "Lexical Databases",
    "mastery": [
      "Lexical Databases"
    ],
    "difficulty": "Medium",
    "question": "Why do the limitations of lexical databases motivate statistical and neural approaches?",
    "choices": [
      "Because lexical databases are always probabilistic",
      "Because lexical databases can represent every language change automatically",
      "Because they can be rigid, require substantial manual work, and remain incomplete as language evolves",
      "Because they cannot contain words"
    ],
    "correct": 2,
    "explanation": "The course highlights rigidity, manual construction effort, incompleteness, and the difficulty of capturing continuous language change.",
    "reminder": "Statistical and neural models are introduced as ways to learn language structures automatically from large text collections."
  },
  {
    "id": 19,
    "category": "Statistical Language Models",
    "mastery": [
      "Statistical Language Models"
    ],
    "difficulty": "Easy",
    "question": "What is a main goal of statistical language models in the course?",
    "choices": [
      "Estimate the distribution of natural language as accurately as possible",
      "Build fixed synonym lists by hand",
      "Assign only grammatical tags",
      "Create a lexical database without probabilities"
    ],
    "correct": 0,
    "explanation": "The course defines the goal as building a model that estimates the probability distribution of natural language.",
    "reminder": "Statistical language models represent text through probability distributions and statistical links between words."
  },
  {
    "id": 20,
    "category": "Topic Models",
    "mastery": [
      "Topic Models",
      "Statistical Language Models"
    ],
    "difficulty": "Easy",
    "question": "What is the goal of a probabilistic topic model?",
    "choices": [
      "Detect only named entities",
      "Find the main topics in a collection of texts",
      "Assign POS tags to every token",
      "Create WordNet synsets"
    ],
    "correct": 1,
    "explanation": "Probabilistic topic models aim to discover the main topics in texts and represent topics with probability distributions over words.",
    "reminder": "Topic models infer hidden topics from document-word patterns rather than requiring predefined topic labels."
  },
  {
    "id": 21,
    "category": "Statistical Language Models",
    "mastery": [
      "Statistical Language Models",
      "Topic Models"
    ],
    "difficulty": "Medium",
    "question": "Which statement correctly summarizes the model examples listed in the course?",
    "choices": [
      "Mixture Models perform NER, LDA performs POS tagging, and MaxEnt creates synsets",
      "Mixture Models and LDA are deterministic lexical databases, while MaxEnt is a parser",
      "Mixture Models assume data comes from several distributions, LDA extracts hidden topics, and MaxEnt uses maximum entropy to avoid unsupported assumptions",
      "All three models are identical and differ only in name"
    ],
    "correct": 2,
    "explanation": "The course distinguishes these three examples by their modeling assumptions and goals: mixture distributions, latent topics, and maximum entropy.",
    "reminder": "Focus on each model’s core intuition rather than advanced mathematical details."
  },
  {
    "id": 22,
    "category": "LDA",
    "mastery": [
      "LDA",
      "Topic Models"
    ],
    "difficulty": "Easy",
    "question": "What is the main goal of Latent Dirichlet Allocation (LDA) in this session?",
    "choices": [
      "Assign one grammatical category to each word",
      "Create an explicit synonym dictionary",
      "Find only one topic for the whole corpus",
      "Discover hidden topics shared by a collection of documents even when the topics are not explicitly labeled"
    ],
    "correct": 3,
    "explanation": "The course presents LDA as a model that extracts latent or hidden topics from document collections.",
    "reminder": "LDA treats documents as mixtures of latent topics and infers those topics from word usage."
  },
  {
    "id": 23,
    "category": "LDA",
    "mastery": [
      "LDA"
    ],
    "difficulty": "Medium",
    "question": "According to the course, what is the effect of a low Dirichlet parameter α in LDA?",
    "choices": [
      "It forces every word into every topic",
      "It favors fewer topics per document",
      "It removes the vocabulary",
      "It makes all documents contain exactly the same topics"
    ],
    "correct": 1,
    "explanation": "The slide states that a low α favors fewer topics per document, whereas a higher α allows more topics.",
    "reminder": "α controls how broadly a document is distributed across topics."
  },
  {
    "id": 24,
    "category": "LDA",
    "mastery": [
      "LDA"
    ],
    "difficulty": "Medium",
    "question": "Which sequence best matches the LDA process described in the course?",
    "choices": [
      "Initialization → final labeling → POS tagging",
      "Parsing → NER → sentiment analysis",
      "WordNet lookup → FrameNet lookup → MaxEnt",
      "Initialization of topic assignments → iterative topic reassignment → repeat until convergence/stability"
    ],
    "correct": 3,
    "explanation": "The course describes random initial assignments, iterative reassignment based on topic probabilities, and repeated optimization until the topic structure stabilizes.",
    "reminder": "LDA is iterative: initialize, reassign topics, and continue until convergence."
  },
  {
    "id": 25,
    "category": "Topic Discovery Applications",
    "mastery": [
      "Topic Discovery Applications",
      "Topic Models"
    ],
    "difficulty": "Easy",
    "question": "Which activity is presented as a real use of topic discovery?",
    "choices": [
      "Measuring image brightness",
      "Generating regex syntax rules",
      "Converting every word into a POS tag only",
      "Analyzing customer feedback to identify main themes"
    ],
    "correct": 3,
    "explanation": "The course lists customer feedback analysis, news categorization, scientific publication monitoring, social-media monitoring, marketing, and knowledge management as real uses.",
    "reminder": "Topic discovery is useful whenever large text collections must be organized around recurring themes."
  },
  {
    "id": 26,
    "category": "POS & Text Classification",
    "mastery": [
      "POS & Text Classification"
    ],
    "difficulty": "Application",
    "question": "A system assigns labels such as noun, verb, adjective, and determiner to the words in a sentence. Which NLP task is it performing?",
    "choices": [
      "Topic modeling",
      "Named Entity Recognition",
      "Part-of-Speech tagging",
      "Frame semantics"
    ],
    "correct": 2,
    "explanation": "Assigning grammatical categories to individual words is exactly the task of POS tagging.",
    "reminder": "POS tagging belongs to lexical analysis and labels words by grammatical category."
  },
  {
    "id": 27,
    "category": "Named Entity Recognition",
    "mastery": [
      "Named Entity Recognition"
    ],
    "difficulty": "Application",
    "question": "Consider: “Marie Dupont joined NVIDIA in Paris in 2026.” Which analysis best matches the NER categories taught in the course?",
    "choices": [
      "Marie Dupont = person; NVIDIA = company/organization; Paris = city; 2026 = date",
      "Marie Dupont = topic; NVIDIA = verb; Paris = sentiment; 2026 = adjective",
      "Marie Dupont = synset; NVIDIA = hypernym; Paris = meronym; 2026 = holonym",
      "Only NVIDIA is a named entity"
    ],
    "correct": 0,
    "explanation": "NER identifies meaningful mentions and assigns semantic categories such as person, company/organization, city, and date.",
    "reminder": "NER classifies real-world mentions into predefined semantic categories."
  },
  {
    "id": 28,
    "category": "Sentiment Analysis",
    "mastery": [
      "Sentiment Analysis"
    ],
    "difficulty": "Application",
    "question": "A review says: “The interface is excellent, but the response time is disappointing.” Which NLP task is most directly concerned with the opinion expressed?",
    "choices": [
      "POS tagging",
      "WordNet lookup",
      "FrameNet role labeling",
      "Sentiment analysis"
    ],
    "correct": 3,
    "explanation": "Sentiment analysis evaluates the emotional or evaluative tone expressed in text, such as favorable or unfavorable opinions.",
    "reminder": "Sentiment analysis classifies opinion polarity such as positive, negative, or neutral."
  },
  {
    "id": 29,
    "category": "Semantic Relations",
    "mastery": [
      "Semantic Relations",
      "WordNet"
    ],
    "difficulty": "Application",
    "question": "The statement “A car is a vehicle” illustrates which semantic relation?",
    "choices": [
      "Meronymy",
      "Hyponymy",
      "Antonymy",
      "Derivation"
    ],
    "correct": 1,
    "explanation": "“Car” is a more specific concept than “vehicle”, so the relation is hyponymy: car IS-A vehicle.",
    "reminder": "Hyponymy moves from a specific concept to a more general concept."
  },
  {
    "id": 30,
    "category": "Semantic Relations",
    "mastery": [
      "Semantic Relations",
      "WordNet"
    ],
    "difficulty": "Application",
    "question": "The statement “A wheel is part of a car” illustrates which relation for “wheel” with respect to “car”?",
    "choices": [
      "Hypernymy",
      "Synonymy",
      "Meronymy",
      "Antonymy"
    ],
    "correct": 2,
    "explanation": "A wheel is a component of a car, so “wheel” is a meronym of “car”.",
    "reminder": "Meronym = part of a whole; holonym = the whole that contains the part."
  },
  {
    "id": 31,
    "category": "WordNet",
    "mastery": [
      "WordNet"
    ],
    "difficulty": "Application",
    "question": "Why can WordNet associate “mouse” in “The mouse ate the cheese” and “Click the mouse button” with different synsets?",
    "choices": [
      "Because the same lexical form can have different meanings, and each meaning can be represented by a different synset",
      "Because WordNet assigns a different random tag every time",
      "Because synsets are only grammatical categories",
      "Because WordNet treats every occurrence as a separate topic model"
    ],
    "correct": 0,
    "explanation": "The course uses “mouse” to illustrate multiple concepts associated with the same word form. Different synsets represent different senses.",
    "reminder": "A synset represents one specific meaning, not all meanings of a word at once."
  },
  {
    "id": 32,
    "category": "FrameNet",
    "mastery": [
      "FrameNet",
      "WordNet vs FrameNet"
    ],
    "difficulty": "Application",
    "question": "For “The chef cooks pasta in a pot on a stove,” which resource is especially suited to representing the cooking event and roles such as Cook, Food, Container, and Heat source?",
    "choices": [
      "A POS tagger",
      "WordNet only",
      "A sentiment classifier",
      "FrameNet"
    ],
    "correct": 3,
    "explanation": "The course uses this exact cooking scenario to show how FrameNet represents an event together with its participant roles.",
    "reminder": "FrameNet organizes meaning around situations and the participants involved in them."
  },
  {
    "id": 33,
    "category": "LDA",
    "mastery": [
      "LDA"
    ],
    "difficulty": "Application",
    "question": "A researcher wants each document in an LDA model to contain only a small number of dominant topics. According to the course, what should happen to α?",
    "choices": [
      "Increase it strongly",
      "Use a relatively low value",
      "Remove α entirely",
      "Set α equal to the vocabulary size"
    ],
    "correct": 1,
    "explanation": "The course states that a low α favors fewer topics per document.",
    "reminder": "Low α → fewer topics per document; high α → more topics can be represented."
  },
  {
    "id": 34,
    "category": "LDA",
    "mastery": [
      "LDA",
      "Topic Models"
    ],
    "difficulty": "Application",
    "context": "Topic A: AI = 0.31, model = 0.22, data = 0.18, learning = 0.15",
    "question": "What does this set of probabilities represent in an LDA result?",
    "choices": [
      "A POS-tag sequence",
      "A named-entity table",
      "The word distribution for one topic",
      "The topic distribution for one document"
    ],
    "correct": 2,
    "explanation": "The probabilities associate words with a topic, so they form a word distribution for that topic. Representative high-probability words help interpret it.",
    "reminder": "Topic → word distribution tells us which words are most representative of a topic."
  },
  {
    "id": 35,
    "category": "LDA",
    "mastery": [
      "LDA",
      "Topic Models"
    ],
    "difficulty": "Application",
    "context": "Document 1: Topic A = 0.70, Topic B = 0.20, Topic C = 0.10",
    "question": "What does this probability vector represent?",
    "choices": [
      "The topic distribution of one document",
      "A WordNet synset",
      "The POS tags of the document",
      "A FrameNet participant structure"
    ],
    "correct": 0,
    "explanation": "The values show how strongly each topic is represented in a particular document, so this is a document-topic distribution.",
    "reminder": "Document → topic distribution describes how much each latent topic contributes to a document."
  }
];

const $ = (id) => document.getElementById(id);
const homeView = $("homeView");
const quizView = $("quizView");
const resultView = $("resultView");
const answersEl = $("answers");
const feedbackEl = $("feedback");

const state = {
  index: 0,
  score: 0,
  selected: null,
  validated: false,
  answers: Array(QUESTIONS.length).fill(null),
  correctness: Array(QUESTIONS.length).fill(false)
};

function escapeText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getMasteryTags(q) {
  return q.mastery || [q.category];
}

function startQuiz() {
  state.index = 0;
  state.score = 0;
  state.selected = null;
  state.validated = false;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.correctness = Array(QUESTIONS.length).fill(false);
  homeView.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  state.selected = null;
  state.validated = false;

  $("questionCounter").textContent = `Question ${state.index + 1} / ${QUESTIONS.length}`;
  $("progressBar").style.width = `${Math.round(((state.index + 1) / QUESTIONS.length) * 100)}%`;
  $("categoryBadge").textContent = q.category;
  $("difficultyBadge").textContent = q.difficulty;
  $("questionTitle").innerHTML = q.question;

  const context = $("questionContext");
  if (q.context) {
    context.innerHTML = q.context;
    context.classList.remove("hidden");
  } else {
    context.innerHTML = "";
    context.classList.add("hidden");
  }

  answersEl.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    button.dataset.index = i;
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + i)}</span><span class="answer-text">${choice}</span>`;
    button.addEventListener("click", () => selectAnswer(i));
    answersEl.appendChild(button);
  });

  feedbackEl.className = "feedback hidden";
  feedbackEl.innerHTML = "";
  $("validateBtn").disabled = false;
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = state.index === QUESTIONS.length - 1 ? "See my result" : "Next question";
}

function selectAnswer(i) {
  if (state.validated) return;
  state.selected = i;
  [...answersEl.children].forEach((button, idx) => {
    const active = idx === i;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-checked", String(active));
  });
}

function validateAnswer() {
  const q = QUESTIONS[state.index];
  if (state.validated) return;
  if (state.selected === null) {
    feedbackEl.className = "feedback bad";
    feedbackEl.innerHTML = `<h3>Select an answer first.</h3><p>Choose the option you think is correct, then validate it.</p>`;
    return;
  }

  const correct = state.selected === q.correct;
  state.validated = true;
  state.answers[state.index] = state.selected;
  state.correctness[state.index] = correct;
  if (correct) state.score += 1;

  [...answersEl.children].forEach((button, idx) => {
    button.disabled = true;
    button.classList.remove("selected");
    if (idx === q.correct) button.classList.add("correct");
    if (idx === state.selected && idx !== q.correct) button.classList.add("wrong");
  });

  feedbackEl.className = `feedback ${correct ? "good" : "bad"}`;
  feedbackEl.innerHTML = `
    <h3>${correct ? "Correct answer." : "Incorrect answer."}</h3>
    ${correct ? "" : `<p><strong>Correct answer:</strong> ${q.choices[q.correct]}</p>`}
    <p><strong>Explanation:</strong> ${q.explanation}</p>
    <p class="reminder"><strong>Concept reminder:</strong> ${q.reminder}</p>
  `;
  $("validateBtn").disabled = true;
  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!state.validated) return;
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResults();
  }
}

function showResults() {
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");

  const pct = Math.round((state.score / QUESTIONS.length) * 100);
  $("percentValue").textContent = `${pct}%`;
  $("scoreValue").textContent = `${state.score} / ${QUESTIONS.length}`;

  let heading;
  let message;
  if (pct >= 85) {
    heading = "Excellent mastery";
    message = "You demonstrate a strong understanding of Session 3 concepts. Review any remaining mistakes to consolidate the distinctions between model families and semantic resources.";
  } else if (pct >= 70) {
    heading = "Good understanding";
    message = "You understand most of the session. Use the mastery profile and personalized corrections to strengthen the concepts that still need review.";
  } else if (pct >= 50) {
    heading = "Basic understanding — some concepts need review";
    message = "You have the core ideas, but several distinctions still need practice. Focus on the categories marked below and retry the quiz.";
  } else {
    heading = "Review the core concepts and retry the quiz";
    message = "Return to the main ideas of text classification, WordNet/FrameNet, statistical language models, and LDA. The corrections below identify what to revisit.";
  }
  $("resultHeading").textContent = heading;
  $("resultMessage").textContent = message;

  renderMastery();
  renderMistakes();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMastery() {
  const grouped = {};
  QUESTIONS.forEach((q, i) => {
    getMasteryTags(q).forEach(tag => {
      grouped[tag] ??= { total: 0, correct: 0 };
      grouped[tag].total += 1;
      if (state.correctness[i]) grouped[tag].correct += 1;
    });
  });

  const container = $("masteryGrid");
  container.innerHTML = "";
  Object.entries(grouped).forEach(([name, stats]) => {
    const pct = Math.round((stats.correct / stats.total) * 100);
    const status = pct >= 80 ? "Strong" : pct >= 50 ? "Satisfactory" : "Needs Review";
    const card = document.createElement("div");
    card.className = "mastery-card";
    card.innerHTML = `
      <div class="mastery-top"><span class="mastery-name">${escapeText(name)}</span><span class="mastery-score">${stats.correct}/${stats.total}</span></div>
      <div class="mastery-meter"><div class="mastery-fill" style="width:${pct}%"></div></div>
      <div class="mastery-status">${status} · ${pct}%</div>
    `;
    container.appendChild(card);
  });
}

function renderMistakes() {
  const container = $("mistakeList");
  container.innerHTML = "";
  const mistakes = QUESTIONS.map((q, i) => ({ q, i })).filter(({ i }) => state.correctness[i] !== true);

  if (mistakes.length === 0) {
    container.innerHTML = `<div class="no-mistakes">Excellent — all ${QUESTIONS.length} answers are correct.</div>`;
    return;
  }

  mistakes.forEach(({ q, i }) => {
    const selected = state.answers[i];
    const selectedText = selected === null ? "No answer" : q.choices[selected];
    const correctText = q.choices[q.correct];
    const card = document.createElement("div");
    card.className = "mistake-card";
    card.innerHTML = `
      <h3>Question ${i + 1} · ${q.category}</h3>
      <p><strong>Question:</strong> ${q.question}</p>
      <p><strong>Your answer:</strong> ${selectedText}</p>
      <p><strong>Correct answer:</strong> ${correctText}</p>
      <p><strong>Explanation:</strong> ${q.explanation}</p>
      <p class="mini-reminder"><strong>Concept reminder:</strong> ${q.reminder}</p>
    `;
    container.appendChild(card);
  });
}

function copyResult() {
  const pct = Math.round((state.score / QUESTIONS.length) * 100);
  const grouped = {};
  QUESTIONS.forEach((q, i) => {
    getMasteryTags(q).forEach(tag => {
      grouped[tag] ??= { total: 0, correct: 0 };
      grouped[tag].total += 1;
      if (state.correctness[i]) grouped[tag].correct += 1;
    });
  });

  const priority = ["POS & Text Classification", "Named Entity Recognition", "WordNet", "FrameNet", "LDA"];
  const lines = priority.filter(name => grouped[name]).map(name => {
    const s = grouped[name];
    return `${name}: ${Math.round((s.correct / s.total) * 100)}%`;
  });

  const text = `NLP — Session 3: NLP Models
Score: ${state.score} / ${QUESTIONS.length} (${pct}%)

Mastery:
${lines.join("\n")}`;

  const showCopied = () => {
    const old = $("copyBtn").textContent;
    $("copyBtn").textContent = "Copied ✓";
    setTimeout(() => $("copyBtn").textContent = old, 1400);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(() => fallbackCopy(text, showCopied));
  } else {
    fallbackCopy(text, showCopied);
  }
}

function fallbackCopy(text, onSuccess) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  try {
    const ok = document.execCommand("copy");
    if (ok) onSuccess();
    else alert("Copy is not available in this browser. Please copy the score manually.");
  } catch (err) {
    alert("Copy is not available in this browser. Please copy the score manually.");
  } finally {
    area.remove();
  }
}

function resetToHome() {
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  homeView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("startBtn").addEventListener("click", startQuiz);
$("validateBtn").addEventListener("click", validateAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("resetBtn").addEventListener("click", resetToHome);
$("resultResetBtn").addEventListener("click", resetToHome);
$("retryBtn").addEventListener("click", startQuiz);
$("reviewBtn").addEventListener("click", () => $("reviewSection").scrollIntoView({ behavior: "smooth" }));
$("copyBtn").addEventListener("click", copyResult);
