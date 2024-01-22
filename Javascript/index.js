
function displayResume(){
    window.open('Resume/Resume.pdf', '_blank');
}

function redirectToEmail() {
    var emailAddress = 'tjstyles555@gmail.com';
    var mailtoURL = 'mailto:' + encodeURIComponent(emailAddress);
    window.location.href = mailtoURL;
}

function moveToContacts(){
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
}

function moveToTop(){
    document.querySelector('.banner-details').scrollIntoView({ behavior: 'smooth' });
}

function moveToEducation(){
    document.querySelector('.educationHeading').scrollIntoView({ behavior: 'smooth' });
}

function moveToProjects(){
    document.querySelector('.project-heading').scrollIntoView({ behavior: 'smooth' });
}

function moveToWorkExperiance(){
    document.querySelector('#work-experiance-heading').scrollIntoView({ behavior: 'smooth' });
}


function updateWorkExperiance(){
    let req = fetch('JSON/work.json');

    req.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        data.forEach(element => {
            createExperianceCard(element);
        });
    })
}

function createExperianceCard(data){
    let wordExperianceContainer = document.querySelector('.work-experiance-container');
    let arr = data.work;
    let card = `
        <div class="work-experiance-box box-exp" data-aos="fade-up" data-aos-mirror="true">
            <div class="heading-company-name">
                <h1 class="company-name-dark-mode company-name">
                    ${data.company}
                </h1>
                <p class="date-company-worked">
                    ${data.start}-${data.end}
                </p>
            </div>
            <p class="job-role">${data.jobrole}</p>
            <ul>
            ${arr.map(item => `<li>${item}</li>`).join('')}
            </ul>
     </div>
    `;
    wordExperianceContainer.insertAdjacentHTML("beforebegin",card);
}

function populateProjectStructure(){
    let req = fetch('JSON/techstack.json');
    let projectContainer = document.querySelector('.projects-container');
    req.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        data.forEach((curr)=>{
            let card = `
                <div class="project-box project-box-dark-mode" data-aos="fade-up" id="${curr.id}">
                    <p class="project-stack-type">
                        ${curr.name}
                    </p>
                </div>
            `;
            projectContainer.insertAdjacentHTML("beforeend",card);

            let cardElement = document.getElementById(curr.id);
            showMyProjects(cardElement);
            
        });

        
    })
}





function showMyProjects(cardElement){

    cardElement.addEventListener('click',()=>{

        let container = document.querySelector('.display-project-container');
        let projectHeading = document.querySelector('#project-heading');
        let projects = document.querySelector('.displayProjects');
        projects.style.display ='block';

        

        container.innerHTML = '';
        projectHeading.textContent = cardElement.id+" projects";


        let request = fetch('JSON/projects.json');
        request.then((response)=>{
            return response.json();
        })
        .then((data)=>{
            data = data[cardElement.id]
            data.forEach((curr)=>{

                let card = `
                    <div class="project-display-box-dark-mode project-display-box" data-aos="fade-up">
                        <p class="project-display-name">
                            ${curr.name}
                        </p>
                        <div class="links links-dark-mode">
                            <a href="${curr.githubLink}" target="_blank" id="github${curr.name}" class="githubLink">Github</a>
                            ${curr.hosted && curr.hosted !== 'NA' ? 
                                `<a href="${curr.hosted}" target="_blank" id="hosted${curr.name}" class="hostedLink">Hosted</a>` : ''}
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML("beforeend",card);

                document.getElementById('project-heading').scrollIntoView({ behavior: 'smooth' });

            })
        })
    })
}



function showEducation(){
    let req = fetch('JSON/education.json');
    req.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let eduContainer = document.querySelector('.educationContainer');
        data.forEach((curr)=>{
            let educationBox = `
            <div class="educationBox" data-aos="fade-left" id="${curr.school}">
                <div class="lhs-education-box">
                    <img src="${curr.image}" alt="Loading..." srcset="">
                </div>
                <div class="rhs-education-box">
                    <h1 class="college-name-education-box">
                        ${curr.school}
                    </h1>
                    <h3 class="percent-education-box"> ${curr.percentage}</h3>
                    <ul>
                    
                        <li><p class="education-year-box">${curr.year}</p>  </li>
                        <li> <p class="degee-education-box">${curr.degree}</p> </li>
                        ${curr.specialization.length > 0 ? `<li><p class="education-box-specialization">${curr.specialization}</p></li>` : ''}
                        <li><p class="university-education-box">${curr.university}</p></li>
                    </ul>
                </div>
            </div>
            `;
            eduContainer.insertAdjacentHTML("beforeend",educationBox);

            let box = document.getElementById(curr.school);
            box.addEventListener('click',()=>{
                window.location.href = curr.url;
            })

        })
    })

}



function render() {
    updateWorkExperiance();
    populateProjectStructure();
    showEducation();
}

render();