// let lightMode = true;

// function toggle() {
//     let body = document.querySelector('body');
//     let toggle_btn = document.querySelector('.toggle-btn');
//     let navBar = document.querySelector('#nav-bar');
//     let navBar_item = document.querySelectorAll('.nav-item');
//     let typing_animation = document.querySelector('.typing-animation');
//     let banner_job_role = document.querySelector('#job-role');
//     let banner_details = document.querySelector('#my-details');

//     let btn_banner = document.querySelectorAll('.banner-btn');
//     let email_btn_banner = document.querySelector('#email-banner');
//     // let resume_btn_banner = document.querySelector('#download-resume');

//     let workExperiance_heading = document.querySelector('#work-experiance-heading');
//     let experiance_box = document.querySelectorAll('.box-exp');

//     let company_name = document.querySelectorAll('.company-name');
//     let projectHeading = document.querySelector('.project-heading');
//     let projectContainerBox = document.querySelectorAll('.project-box ');

//     let myProjectHeading = document.querySelector('#project-heading');

//     let project_link = document.querySelectorAll('.links');
//     let projectDisplayBox = document.querySelectorAll('.project-display-box');

//     if (lightMode) {
//         body.style.background = 'white';

//         toggle_btn.classList.remove('fa-solid');
//         toggle_btn.classList.remove('fa-sun');
//         toggle_btn.classList.add('fa-regular');
//         toggle_btn.classList.add('fa-moon');

//         navBar.style.background = 'white';

//         navBar_item.forEach((curr)=>{
//             curr.style.color = 'orangered';
//         });

//         typing_animation.style.color = 'black';

//         banner_job_role.style.color = 'orangered';

//         banner_details.style.color = 'black';

//         btn_banner.forEach((curr)=>{
//             curr.classList.remove('banner-btn-dark-mode');
//             curr.classList.add('banner-btn-light-mode');
//         })
        
//         email_btn_banner.style.background = 'orangered';
//         email_btn_banner.style.color = 'white';
        
//         workExperiance_heading.style.color = 'black';

//         experiance_box.forEach((curr)=>{
//             curr.classList.remove('work-experiance-box');
//             curr.classList.add('work-experiance-light-box');
//         });

//         company_name.forEach((curr)=>{
//             curr.classList.remove('company-name-dark-mode');
//             curr.classList.add('company-name-light-mode')
//         })
       
//         projectHeading.style.color = 'black';

//         projectContainerBox.forEach((curr)=>{
//             curr.classList.remove('project-box-dark-mode');
//             curr.classList.add('project-box-light-mode');
//         });

//         myProjectHeading.style.color = 'black';
        
//         projectDisplayBox.forEach((curr)=>{
//             curr.classList.add('project-display-box-light-mode');
//             curr.classList.remove('project-display-box-dark-mode');
//         })

//         project_link.forEach((curr)=>{
//             curr.classList.remove('links-dark-mode');
//             curr.classList.add('links-light-mode');
//         });

//     } 
//     else {

//         body.style.background = 'rgb(3, 3, 26)';

//         toggle_btn.classList.add('fa-solid');
//         toggle_btn.classList.add('fa-sun');
//         toggle_btn.classList.remove('fa-regular');
//         toggle_btn.classList.remove('fa-moon');

//         navBar.style.background = 'rgb(3, 3, 26)';

//         navBar_item.forEach((curr)=>{
//             curr.style.color = 'white';
//         });

//         typing_animation.style.color = 'white';

//         banner_job_role.style.color = 'aqua';

//         banner_details.style.color = 'white';

//         btn_banner.forEach((curr)=>{
//             curr.classList.remove('banner-btn-light-mode');
//             curr.classList.add('banner-btn-dark-mode');
//         })
        
//         email_btn_banner.style.background = 'white';
//         email_btn_banner.style.color = 'black';

//         workExperiance_heading.style.color = 'aqua';

//         experiance_box.forEach((curr)=>{
//             curr.classList.add('work-experiance-box');
//             curr.classList.remove('work-experiance-light-box');
//         });

//         company_name.forEach((curr)=>{
//             curr.classList.add('company-name-dark-mode');
//             curr.classList.remove('company-name-light-mode')
//         })
       
//         projectHeading.style.color = 'white';

//         projectContainerBox.forEach((curr)=>{
//             curr.classList.add('project-box-dark-mode');
//             curr.classList.remove('project-box-light-mode');
//         });

//         myProjectHeading.style.color = 'white';

//         projectDisplayBox.forEach((curr)=>{
//             curr.classList.add('project-display-box-dark-mode');
//             curr.classList.remove('project-display-box-light-mode');
//         })

//         project_link.forEach((curr)=>{
//             curr.classList.remove('links-light-mode');
//             curr.classList.add('links-dark-mode');
//         });

//     }
//     lightMode = !lightMode;
// }



