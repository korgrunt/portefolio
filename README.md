Mon porte folio construit a partire du get started de angular2.io
Enjoy the freedom for fork, critique, shit on my work, no probleme brother !



###info
/client is implemented in typescript
/server is implemented in javascript

# run only client app
> cd portefolioRc/client/ && npm start

# run only server app
> cd portefolioRc/server/ && nodemon server.js

# run client app & server app
> cd portefolioRc/server/ && nodemon server.js

### Run in developer mode
1- unix cmd in a shell
  > nodemon server/server.js

2- unix cmd in another shell
  > cd portefolioRc/client/ && npm start

### Run in production mode
1- unix cmd in the ssh shell
  > nohup nodemon server/server.js
    *keep the PID safety for kill the process when the time of update coming, or use unix cmd > top, for fetch the process's PID*

### if the server is sucessfuly lauched with the the nohup cmd, do below
  > npm start
    *A VERIFIER si npm start est utilisable en production*
