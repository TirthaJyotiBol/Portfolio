
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
        <div class="work-experiance-box" data-aos="fade-up" data-aos-mirror="true">
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
                <div class="project-box project-box-dark-mode" data-aos="fade-side" id="${curr.id}">
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

                if(!lightMode){
                    let card = `
                    <div class="project-display-box project-display-box-light-mode" data-aos="fade-up">
                        <p class="project-display-name">
                            ${curr.name}
                        </p>
                        <div class="links links-light-mode">
                            <a href="${curr.githubLink}" target="_blank" id="github${curr.name}" class="githubLink">Github</a>
                            ${curr.hosted && curr.hosted !== 'NA' ? 
                                `<a href="${curr.hosted}" target="_blank" id="hosted${curr.name}" class="hostedLink">Hosted</a>` : ''}
                        </div>
                    </div>
                `;

                container.insertAdjacentHTML("beforeend",card);
                }

                else{
                    let card = `
                    <div class="project-display-box project-display-box-dark-mode" data-aos="fade-up">
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
                }

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



let lightMode = true;

function toggle() {
  
    let body = document.querySelector('body');
    let toggle_btn = document.querySelector('.toggle-btn');
    let navBar = document.querySelector('#nav-bar');
    let navLHS = document.querySelector('#nav-bar-name');
    let navBar_item = document.querySelectorAll('.nav-item');
    let typing_animation = document.querySelector('.typing-animation');
    let banner_job_role = document.querySelector('#job-role');
    let banner_details = document.querySelector('#my-details');

    let btn_banner = document.querySelectorAll('.banner-btn');
    let email_btn_banner = document.querySelector('#email-banner');

    let workExperiance_heading = document.querySelector('#work-experiance-heading');
    let experiance_box = document.querySelectorAll('.work-experiance-box');

    let company_name = document.querySelectorAll('.company-name');
    let projectHeading = document.querySelector('.project-heading');
    let projectContainerBox = document.querySelectorAll('.project-box ');

    let myProjectHeading = document.querySelector('#project-heading');

    let project_link = document.querySelectorAll('.links');
    let projectDisplayBox = document.querySelectorAll('.project-display-box');
    let educationHeading = document.querySelector('.educationHeading');
    let schoolIcon = document.querySelector('.lhsicon');

    let educationBox = document.querySelectorAll('.educationBox');
    let collegeName = document.querySelectorAll('.college-name-education-box');

    let educationContainer = document.querySelector('.educationContainer');

    let footerLine = document.querySelector('#line-above-footer');
    let footerContacts = document.querySelector('.contacts');
    let footerProfileHeading = document.querySelectorAll('.footer-profile-heading');

    let linkedIn_icon = document.querySelector('.fa-linkedin');
    let gitHubIcon = document.querySelector('.fa-github');

    if (lightMode) {
        
        body.style.background = 'white';

        navLHS.style.color = 'orangered';

        toggle_btn.classList.remove('fa-solid');
        toggle_btn.classList.remove('fa-sun');
        toggle_btn.classList.add('fa-regular');
        toggle_btn.classList.add('fa-moon');

        navBar.style.background = 'white';

        navBar_item.forEach((curr)=>{
            // curr.style.color = 'orangered';
            curr.classList.add('navbar-elements-light-mode');
            curr.classList.remove('navbar-elements-dark-mode');
        });

        typing_animation.style.color = 'black';

        banner_job_role.style.color = 'orangered';

        banner_details.style.color = 'black';

        btn_banner.forEach((curr)=>{
            curr.classList.remove('banner-btn-dark-mode');
            curr.classList.add('banner-btn-light-mode');
        })
        
        email_btn_banner.style.background = 'orangered';
        email_btn_banner.style.color = 'white';
        
        workExperiance_heading.style.color = 'black';

        experiance_box.forEach((curr)=>{
            curr.classList.remove('work-experiance-box-dark-mode');
            curr.classList.add('work-experiance-box-light-mode');
        });

        company_name.forEach((curr)=>{
            curr.classList.remove('company-name-dark-mode');
            curr.classList.add('company-name-light-mode')
        })
    
        projectHeading.style.color = 'black';

        projectContainerBox.forEach((curr)=>{
            curr.classList.remove('project-box-dark-mode');
            curr.classList.add('project-box-light-mode');
        });

        myProjectHeading.style.color = 'black';
        
        projectDisplayBox.forEach((curr)=>{
            curr.classList.add('project-display-box-light-mode');
            curr.classList.remove('project-display-box-dark-mode');
        })

        project_link.forEach((curr)=>{
            curr.classList.remove('links-dark-mode');
            curr.classList.add('links-light-mode');
        });

        educationHeading.style.color = 'black';

        schoolIcon.style.color = 'orangered';

        educationBox.forEach((curr)=>{
            curr.classList.remove('educationBox-dark-mode');
            curr.classList.add('educationBox-light-mode');
        });

        collegeName.forEach((curr)=>{
            curr.style.color = 'orangered';
        });

        educationContainer.style.borderLeftColor = 'black';

        footerLine.style.borderColor = 'black';
        footerContacts.style.color = 'black';

        footerProfileHeading.forEach((curr)=>{
            curr.style.color = 'black';
        });

        linkedIn_icon.style.color = 'blue';
        gitHubIcon.style.color = 'black';
    } 


    else {
        
        navLHS.style.color = 'white';    
        body.style.background = 'rgb(3, 3, 26)';

        toggle_btn.classList.add('fa-solid');
        toggle_btn.classList.add('fa-sun');
        toggle_btn.classList.remove('fa-regular');
        toggle_btn.classList.remove('fa-moon');

        navBar.style.background = 'rgb(3, 3, 26)';

        navBar_item.forEach((curr)=>{
            // curr.style.color = 'white';
            curr.classList.remove('navbar-elements-light-mode');
            curr.classList.add('navbar-elements-dark-mode');
        });

        typing_animation.style.color = 'white';

        banner_job_role.style.color = 'aqua';

        banner_details.style.color = 'white';

        btn_banner.forEach((curr)=>{
            curr.classList.remove('banner-btn-light-mode');
            curr.classList.add('banner-btn-dark-mode');
        })
        

        email_btn_banner.style.background = 'white';
        email_btn_banner.style.color = 'black';

        workExperiance_heading.style.color = 'aqua';

        experiance_box.forEach((curr)=>{
            curr.classList.remove('work-experiance-box-light-mode');
            curr.classList.add('work-experiance-box-dark-mode');
        });

        company_name.forEach((curr)=>{
            curr.classList.add('company-name-dark-mode');
            curr.classList.remove('company-name-light-mode')
        })
    
        projectHeading.style.color = 'white';

        projectContainerBox.forEach((curr)=>{
            curr.classList.add('project-box-dark-mode');
            curr.classList.remove('project-box-light-mode');
        });

        myProjectHeading.style.color = 'white';

        projectDisplayBox.forEach((curr)=>{
            curr.classList.add('project-display-box-dark-mode');
            curr.classList.remove('project-display-box-light-mode');
        })

        project_link.forEach((curr)=>{
            curr.classList.remove('links-light-mode');
            curr.classList.add('links-dark-mode');
        });

        educationHeading.style.color = 'white';

        schoolIcon.style.color = 'white';

        educationBox.forEach((curr)=>{
            curr.classList.add('educationBox-dark-mode');
            curr.classList.remove('educationBox-light-mode');
        });

        collegeName.forEach((curr)=>{
            curr.style.color = 'aqua';
        });

        educationContainer.style.borderLeftColor = 'aqua';
        footerLine.style.borderColor = 'aqua';
        footerContacts.style.color = 'white';
    
        footerProfileHeading.forEach((curr)=>{
            curr.style.color = 'aqua';
        })
        linkedIn_icon.style.color = 'white';
        gitHubIcon.style.color = 'white';
    }

    lightMode = !lightMode;
}




function render() {
    updateWorkExperiance();
    populateProjectStructure();
    showEducation();
}

render();