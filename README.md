# About this project:
Hello! Thanks for reading this. My name is Erik. This is the front end for a Cryptography API I created. It uses React for the front end and NodeJs with express for the back end. The github repo for the backend is here: https://github.com/ecron11/CryptoApi.

# What it does:
This project let's users see and test different hashing algorithms. Additionally it includes some information on what Hashes are. 

# The making of this project
I used React and Node.js with express to create this project. This project serves as a learnign and example project for these technologies. Some explanations on some of the decisions I made for this project:

 -Doing the hashing on the server-side. Part of the main purpose of this project was to explore Node.js having a react app communicate with a Node.js API, therefore I specifically chose to have the hashing done on the server side. I wanted to create a node.js project that did not involve a database as well, so that I could focus on Node.js without thinking of a database architecture.

 -Seperating the react front end from the nodejs back end. Part of the primary purpose of this project is to demonstrate hosting microservices on AWS, so I wanted to break the two projects up so either could scale elastically. Additionally, since the react page is static, I didn't need to create any templates.

 -I could have used nextjs or gatsby for server-side rendering, but as I don't care about SEO for this project I didn't implement it. I may add it later for improved load times, however I believe it could increase the compute time I am charged on AWS, so for a simple, static project like this I don't believe the slightly improved performance justifies the costs.