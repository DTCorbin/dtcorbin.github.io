const startX = "40vw";
const startY = "20vh";

let newX, newY, prevX, prevY;

const container = document.getElementById("cards");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

about.addEventListener('click', () => {
    const aboutCard = document.getElementById('aboutCard');
    if (aboutCard) {
       aboutCard.remove();
    } else{
            removeActive ();
            const created = document.createElement("div");
            created.id = "aboutCard";
            created.classList.add('card');
            created.innerHTML = '\
                <h3>about</h3>\
                <button class="close">close</button>\
                <div style="width: 90%; height: 90%; overflow-y: auto;" class="content">\
                <p> Hello, I am an aspiring IT professional who is very driven to make people\'s\
            computing experience the best it can be. I completed relevent schooling at\
            two very distinct times in my life. I first went and got a degree in electronics\
            technology and had planned on going into computer engineering, but I had a burning dream that needed to be realized\
            before it was too late. It is a great pride of mine to be able to make an impact\
            on society, and I knew there was one way that I wanted to do that, change the skyline\
            of our great city, Pittsburgh. So, that is exactly what I set out to do. Modern buildings\
            are made up of two main materials, steel and concrete. If you want to make a building \
            tall enough to change a skyline you can\'t do it without steel so I knew what I had to do.\
            I took a certificate course in welding at PTC and got a job at the largest structural\
            fabrication shop in the area. While I was there, I got to see many of the newest additions\
            to our city and others come through our doors and played a big part in them becoming reality. Once\
            I felt that I had contributed to a satisfactory degree and decided it was time to have a \
            career that challenges my brain and where I can help the most people. While welding, I\
            rediscovered my passion for cybersecurity that I had all through middle and high school.\
             When the time came, I embarked on gaining a degree in CIS: Networking and Cybersecurity.\
              On top of classes I would also complete extra projects in my spare time and that brings me great joy. \
              I have really honed in on networking, system administration, and DFIR.\
            I was able to get a 4.0 every semester during that degree and am looking to gain employment in any area I can.</p>\
            <h4>Certifications</h4>\
            <p>Network+</p>\
            <p>Security Pro</p>\
            <p>Cyberdefense Pro</p>\
            <p>Hybrid Server Pro: Core</p>\
                </div>\
        ';
            created.style.top = startY;
            created.style.left = startX;
            container.appendChild(created);
            }
}, true);

projects.addEventListener('click', () => {
    const projectsCard = document.getElementById('projectsCard');
    if (projectsCard) {
       projectsCard.remove();
    } else{
            removeActive();
            const created = document.createElement("div");
            created.id = "projectsCard";
            created.classList.add('card');
            created.innerHTML = '\
                <h3>projects</h3>\
                <button class="close">close</button>\
                <div style="width: 90%; height: 90%; overflow-y: auto;" class="content">\
                    <div class="projects">\
                        <button id="project1" class="sub">Linux user staging script</button>\
                        <button id="project2" class="sub">Honeypot</button>\
                        <button id="project3" class="sub">Password Manager</button>\
                        <button id="project4" class="sub">Windows Home Lab</button>\
                        <button id="project5" class="sub">Linux Home Lab</button>\
                    </div>\
                    <p id="project"></p>\
                </div>\
            ';
            created.style.top = startY;
            created.style.left = startX;
            container.appendChild(created);
            const project1 = document.getElementById('project1');
            const project2 = document.getElementById('project2');
            const project3 = document.getElementById('project3');
            const project4 = document.getElementById('project4');
            const project5 = document.getElementById('project5');
            const textContent = document.getElementById('project');
            project1.addEventListener('click', () =>{
                textContent.innerHTML = 'Skills:<br>\
                Linux | Bash | System Administration<br><br>\
                I wrote a bash script to assist in the provisioning\
                of users in a linux environment in bulk. The script injests a users.txt file\
                that is formatted in a Username;group1,group2... fashion. It asks you to configure\
                a password that is to be changed on the next logon. It is provisioned with an\
                invalid shell to reduce the attack surface. It creates and assigns groups as necessary\
                and writes every action to a log file. To see the code, you can <a href="https://github.com/DTCorbin/User-Account-Staging/blob/main/user_provision.sh">CLICK HERE</a>.';
            })
            project2.addEventListener('click', () =>{
                textContent.innerHTML = 'Skills:<br>C | Cybersecurity| TCP/IP | Networking\
                <br><br>Built a honeypot in C using Posix sockets to handle network traffic with\
                 two modes. The first mode is an HTTP honeypot that is advertised as an\
                  Apache web serverto network scan with its banner.<br><img src="./Honeypot/nmap scan.jpg"><br>\
                   The second mode allows\
                 you to advertise a custom service on any port number. You set the banner string that \
                 will be sent out. It logs all events including when the honeypot starts up,\
                  when it stops, intrusion attempts and their contents.<br>\
                  <img src="./Honeypot/Log File.jpg"><br> I have left room to add on in the future \
                   as shown here:<br> <img src="./Honeypot/Preconfigured options.jpg">\
                   <br> but this is a good proof of concept and a great\
                  experience to learn how networking works at a lower level. To see the code, you\
                  can <a href="https://github.com/DTCorbin/Honeypot/blob/main/honeypot.c">CLICK HERE</a>.';
            })
            project3.addEventListener('click', () =>{
                textContent.innerHTML = 'Skills:<br>\
                Python | SQL | MySQL| encryption | Hashing<br><br>\
                I had a few goals to accomplish by creating this project. First, I wanted to get more familiar with Python as this was the first project\
					I made outside of class. My second goal was to learn more about how password managers work behind the scenes. Lastly and possibly most importantly,\
					I saw how the big password managers all have been hacked at some point and figured one of the best ways to protect against that is to have a completely offline password manager.\
                I wrote the software in Python. I also used a local instance of MYSQL Server as a database to store my credentials. It may be off-putting to some but for a user interface,\
					I went with a command line interface. For encryption I used the Cryptography library that can be added for Python. I chose to use their Fernet algorithm because of its ease of\
					implementation and security because under the hood it uses AES 128 encryption. AES is the gold standard and is used in all industries. Another security feature I implemented was\
					sanitized input where the user will be able to type in requests. This was achieved by passing the values in after the SQL statement has been processed, also called parameterized inputs.\
				I also created a login feature which serves a dual purpose, Initial security and the name of the database itself. The login feature stores a salted hash of the password to prevent password attacks,\
					has a minimum password length of 8 characters, and a maximum of 3 attempts. The username is hashed and used as the title of the database. Here you can see the login process and what the database looks like.\
					<br><img src="./Password Manager/Login and DB Name.png"><br>\
				You can also generate secure passwords when adding entries into the database.<br><img src="./Password Manager/Adding an entry.png"><br>\
                You can view a list of the entries that you have entered.<br><img src="./Password Manager/list.png"><br>\
                This is what the entries look like in the database.<br><img src="./Password Manager/Entry in DB.png"><br>\
                When you retrieve the entries, they are formatted as such and can be pasted where they need to be used.<br><img src="./Password Manager/Credential retrieval.png"><br>\
                Here is the help page for the password manager:<br><img src="./Password Manager/help.png"><br>\
                Improvements to be made:\
				I have written out an implementation for logging of all key events. It creates a log object and the different events modify this object accordingly before being written to the log file. It includes a timestamp, a severity level,\
					the user performing the action, and a description of the action that was performed, such as reading the credentials for a certain entry. \
				I also wrote out an implementation for securing the key by calling on the win32 api to encrypt the key using a password that isn’t stored anywhere in any format on the system and Windows EFS.\
				The only thing left to do is to transfer the code from paper to the actual source code. You can view the code if you <a href="https://github.com/DTCorbin/LocalPasswordManager">CLICK HERE</a>\
				';
            })
            project4.addEventListener('click', () =>{
                textContent.innerHTML = 'Skills:<br>\
                Windows Server | Active Directory | Virtualization<br><br>\
                Lab consisted of three virtual machines. One was a Windows \
				server that promoted to a Domain controller. The second was a \
				“technician” machine that had RSAT and Team-Viewer installed. \
				The last one was an end-user’s machine. It can be used to \
				practice  the resolution of common administrative tasks and tickets. On the host \
				machine(Debian 13) wrote a bash script to unload kernel modules \
				in order to run VirtualBox. ';
            })
            project5.addEventListener('click', () =>{
                textContent.innerHTML = 'Skills:<br>\
                Linux | System administration | Bash Scripting<br><br>\
                Provisioned two virtual machines with Ubuntu Server 26.04 LTS. \
				The first server was provisioned with an Apache2 web server and \
				used to learn how to configure it. The second server is used to \
				practice general administration tasks such as adding users, \
				group assignment, permissions, etc. I also developed a bash script that can be used to bulk \
				stage user accounts with proper security procedures like an invalid shell and a one time password. It can\
					be viewed under the user staging script tab.';
            })
            }
}, true);

contact.addEventListener('click', () => {
    const contactCard = document.getElementById('contactCard');
    if (contactCard) {
       contactCard.remove();
    } else{
            removeActive();
            const created = document.createElement("div");
            created.id = "contactCard";
            created.classList.add('card');
            created.innerHTML = '\
                <h3>contact</h3>\
                <button class="close">close</button>\
                <div style="width: 90%; height: 90%; overflow-y: auto;" class="content">\
                    <h2>Please reach out!<h2>\
                    <p>I would love to hear from you.</p>\
                    <br>\
                    <p>Phone: (724) 814-1969</p>\
                    <p>Email: dtcorbin212@gmail.com</p>\
                </div>\
            ';
            created.style.top = startY;
            created.style.left = startX;
            container.appendChild(created);
            }
}, true);

function removeActive (){
    const activeCard = document.querySelector(".card");
    if (activeCard) {
        activeCard.remove();
    }
}

container.addEventListener('click', (event) => {
    if (event.target.classList.contains("Buttons") || event.target.classList.contains("close")) {
        const card = event.target.closest(".card");
        if (card){
            card.remove();
        }
    }
})
