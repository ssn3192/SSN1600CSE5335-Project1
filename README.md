# 1001121600cse5335project-01
Author Name: Shivani Narang UTA ID: 1001121600

A web page have been designed that contains the list of top universities of United States, city and state.
Google map according to the university location have be also generated.

-----------------------------------------------Question Answers-------------------------------------------------------------

A. What server framework did you choose and why?

I had choosen nodejs as a server framework for completing this assignment. The primary reason for this selection is that
nodejs is one of the most emerging server side framework in the field of Information Technology. Secondly, nodejs was the framework which I had never used for any assignments. Therefore getting an exploser with new technology was the prime reason for the choice behind nodejs.

B. What client framework did you choose and why?

Javascript with advance Jquery libraries have been selected as client side framework. I was familiar with Javascript and have used it
for several academic projects.One of the reason behind Javascript selection was that it was comparatively. Secondly,on one side, nodejs was a new concept for me so I decided to move with Javascript which was already experienced previously. Hence using a combination of already used concept with the newer concept had made my task easy to get implemented.

C. What aspect of the implementation did you find easy, if any, and why?

I  found extracting json file and dispalying it on web page was the easy part. Initially it was not easy, but once I understood how external Json can be created and how it can be read then it was later on easy to display it on web page on clicking a button.

D. What aspect of the implementation did you find hard, if any, and why?

As nodejs was new technology for me, I was not familiar with its working. Hence I found it initially diffcult to understand. With the help of nodejs online tutorials, class lectures and professor's guidance, I copop with it.
Secondly, the bonus point task for generating google maps was also diffcult. But the links provided in the description of assignment
helped to get rid off the diffculty.

E. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your solution?

I had installed webstorm editor for implementing this assignemnt. The purpose of using this editor was today notepad++ and dreamweaver had become outdated and it was a try to experience the latest ones that is going on in the market. Secondly, webstrom provides the facility to direct export your assignment on github without peforming any commands.

F. What Ubuntu commands are required to deploy and run your server?

In case of uploading code on Github I had used webstrom editor to implement this assignment where there is a facility of importing your project directly on github.
The steps are:
choose VCS | Import into Version Control | Share Project on GitHub
git init
echo "# CSE5335-project-1" >> README.md
git add README.md
git commit -m "My Commit"
git remote add origin https://github.com/ssn3192/CSE5335-Project1.git
git push -u origin master


For heroku
 heroku login
 git init
 git add .
 git commit -m "Message"
 git push heroku master
 heroku open
 heroku sharing:add samvaran.rallabandi@mavs.uta.edu 
 heroku sharing:add emmons@uta.edu
