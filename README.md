# assignment

This is application is built using MongoDB, ExpressJS, Angular 4, Bootstrap 3 and NodeJS.


Installation and Requirements

$ npm install

Next, install all of the Angular 2 development dependencies in package.json file:

$ cd client/

$ npm install

Installation is complete. Navigate to the root directory and then:  

Production

-- In root directory:

$ npm run build

$ npm start

-- Access production server at: http://localhost:8080

Development

$ cd client/

$ ng serve

-- In another window, from root directory run:

$ npm start

-- Access development server at: http://localhost:4200

-- Access API at: http://localhost:8080

Installing a Project in a New Computer. 
 
Follow the Instructions to install these softwares: 

https://www.tutorialspoint.com/angular2/angular2_environment.htm 

Setting up the Environment(Skip this step, unless npm is not recognized) 

Right Click on This PC 

Advanced system settings(left side 4th option) 

Click on Environment Variables 

Click on Path 

Click Edit button 

Add ";C:\Program Files\nodejs" to the end

 Save all
 
 Restart the Computer 
 
For configuring MongoDB 

Open CMD in admin Mode 

C:\Windows\system32> 

Cd C:\Program Files\MongoDB\Server\3.4\bin 

C:\Program Files\MongoDB\Server\3.4\bin>msiexec.exe /q /i mongodb-win32-x86_64-2008plus-ssl-3.4.4-signed.msi INSTALLLOCATION="C:\Program Files\MongoDB\Server\3.4\" ADDLOCAL="all" 
 
C:\Program Files\MongoDB\Server\3.4\bin>md \data\db 
 
C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath c:/data/db 
CTRL + C/X to terminate the loop 
2017-05-26T18:23:16.903+0530 I CONTROL  [initandlisten] shutting down with code:12 
 
C:\Program Files\MongoDB\Server\3.4\bin>mkdir \data\log 
 
 
C:\Program Files\MongoDB\Server\3.4\bin>cd \data\log 
 
 
C:\data\log>cd C:\Program Files\MongoDB\Server\3.4\bin 
 
 
C:\Program Files\MongoDB\Server\3.4\bin>cd .. 
 
C:\Program Files\MongoDB\Server\3.4>notepad.exe mongod.cfg 
 
systemLog:    destination: file    path: c:\data\log\mongod.log 
storage:    dbPath: c:\data\db 
 
C:\Program Files\MongoDB\Server\3.4>cd bin 
 
C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --config "C:\Program Files\MongoDB\Server\3.4\mongod.cfg" --install 
 
C:\Program Files\MongoDB\Server\3.4\bin>net start MongoDB 

The MongoDB service is starting.. 

The MongoDB service was started successfully. 

Installing the Github branch 

Download the Zip file and unzip in the computer 

Or 

Open Git bash and Navigate to  
     $ cd /c/users/naray 
 
Open the Visual Studio Code 

Open the folder 
 
cd client 

npm install -g @angular/cli@latest 

npm install (This will do the magic) 

ng serve 
 
Install Angular Material 

Install Express 

Selvaraj@DESKTOP-R8HNVHQ MINGW32 /c/users/naray/MEAN-project-server-setup (Angular-Material-Form) $ npm install express –save

Install Mongoose 

Install Nodemon 

Install Robo 3T  

Install Postman 

Install body-parser 

Install Cors

In visual studio code navigate to  

PS C:\Users\naray\MEAN-project-server-setup\client> 

npm install -g @angular/cli 

npm install  

npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest typescript@latest --save 
npm install @angular/common@4.4.0-RC.0  - Install all the warnings like this 
  
