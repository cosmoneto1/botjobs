var natural = require('natural');
var classifier = new natural.BayesClassifier();

classifier.addDocument('javascript', 'front-end');
classifier.addDocument('angular', 'front-end');
classifier.addDocument('angularjs', 'front-end');
classifier.addDocument('react', 'front-end');
classifier.addDocument('reactjs', 'front-end');

classifier.addDocument('java', 'back-end');
classifier.addDocument('php', 'back-end');
classifier.addDocument('c#', 'back-end');
classifier.addDocument('python', 'back-end');
classifier.addDocument('.net', 'back-end');

classifier.train();


console.log(classifier.classify('Conhecimento em Java e/ou .NET. Empresa admite Analista de Sistemas para Tempo integral em Recife ...'));


console.log(classifier.classify('Ter conhecimentos  Angular, JavaScript, Java, Banco de dados, Git e Metodologias Ágeis será um diferencial; Construa uma carreira que você ama...'));