document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "Temple Web Page",
            imageUrl: "../project/images/temple-project.png",
            width: "893px",
            height: "784px",
            url: "https://jmsnthnp.github.io/wdd131/filtered-temples",
            htmlLogo: "../project/images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This webpage features an interactive section to filter and display information about various LDS temples around the world, with a responsive hamburger menu for easy navigation. Users can view details such as temple names, locations, dedication dates, and areas, complemented by images."
        },
        {
            projectName: "Places Web Page",
            imageUrl: "../project/images/place-project.png",
            width: "765px",
            height: "601px",
            url: "https://jmsnthnp.github.io/wdd131/place",
            htmlLogo: "../project/images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        },
        {
            projectName: "Form Web Page",
            imageUrl: "../project/images/form-project.png",
            width: "765px",
            height: "601px",
            url: "https://jmsnthnp.github.io/wdd131/form",
            htmlLogo: "../project/images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This webpage includes a dedicated review form that allows users to share their opinions and feedback on the products listed. Additionally, the page tracks and compiles all submitted reviews, offering an organized overview of customer feedback."
        },
        {
            projectName: "Portfolio Page",
            imageUrl: "../project/images/final-project.png",
            width: "765px",
            height: "601px",
            url: "https://jmsnthnp.github.io/wdd131/project/index",
            htmlLogo: "../project/images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This portfolio webpage includes a main page, a project page displaying all projects, and a 'Contact Us' page with a form for user inquiries. It offers various presets to enhance functionality and user experience."
        }
    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
    
        // Create the project title (not a link)
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle); // Append title to the project card
    
        // Create an anchor element for the image
        const projectLink = document.createElement('a');
        projectLink.href = project.url; // Set the href to the project's URL
        projectLink.style.textDecoration = 'none'; // Optional: Remove underline from link
    
        // Create the project image
        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectLink.appendChild(projectImage); // Append image to the link
    
        // Append the link (image) to the project card
        projectCard.appendChild(projectLink); 
    
        // Create the project info div (not a link)
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';
    
        // Create the project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription); // Append description to project info
    
        // Create logos div
        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';
    
        // Create HTML logo
        const htmlLogo = document.createElement('img');
        htmlLogo.src = project.htmlLogo;
        htmlLogo.alt = project.altHtml;
        logosDiv.appendChild(htmlLogo);
    
        // Create CSS logo
        const cssLogo = document.createElement('img');
        cssLogo.src = project.cssLogo;
        cssLogo.alt = project.altCss;
        logosDiv.appendChild(cssLogo);
    
        // Create JavaScript logo
        const jsLogo = document.createElement('img');
        jsLogo.src = project.jsLogo;
        jsLogo.alt = project.altJs;
        logosDiv.appendChild(jsLogo);
    
        projectInfo.appendChild(logosDiv); // Append logos to project info
        projectCard.appendChild(projectInfo); // Append project info to the project card
        container.appendChild(projectCard); // Append the project card to the container
    });
});