document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Transitioning to Web Development</h2>
            <p>
                With a solid background in customer service and managing customer service systems I am eager to transition to Software Development.
            </p> 
            <p>
                My experience at Concentrix Quezon City Philippines involved
                Managing customer accounts and systems, resolving client queries and concerns, and ensuring high-quality
                standards, all of which honed my problem-solving and technical skills.
            </p>     
            <p>
                At Intelogix LLC, I was assigned to help customers in various account management and queries, providing solutions and customer service which developed communication and technical skills. 
            </p>
            <p>    
                These roles have equipped me with a keen attention to
                detail, problem solving skills, and a solid foundation in various computer systems, positioning me well
                for a career in Web development.
            </p>
        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Education</h2>
            <p>
I am currently pursuing a Bachelor of Science in Software Development at Brigham Young University - Idaho, where I focus on software engineering and web development. My academic experience has provided me with a strong foundation in essential technologies, preparing me for a successful career in the tech industry.
            </p>
            <p>
Throughout my studies, I have developed proficiency in key programming languages and tools such as JavaScript, C#, GitHub, and MySQL. These skills are vital for both front-end and back-end development, and they enable me to contribute effectively to software and web development projects.
            </p>
            <p>    
In addition to my degree, I have earned certificates in computer programming and computer support. These certifications further enhance my technical expertise, making me well-equipped to tackle a variety of challenges in software development and IT support.
            </p>
        `;
        education.innerHTML = educationContent;
    }   
});