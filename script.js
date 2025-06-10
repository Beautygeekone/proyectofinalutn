document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const navbar = document.getElementById("navbar");

 
  menuContainer.addEventListener("mouseenter", () => {
    navbar.classList.remove("hidden");
  });

  
  menuContainer.addEventListener("mouseleave", () => {
    navbar.classList.add("hidden");
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const subtitleElement = document.querySelector('h2.subtitle');
    
    if (!subtitleElement) {
        console.warn('The h2 element with the class "subtitle" was not found.');
        return;
    }

    const wavyPhrase = subtitleElement.textContent;

    
const svgNamespace = "http://www.w3.org/2000/svg";

 const wavySvgSubtitle = document.createElementNS(svgNamespace, 'svg');
    
    wavySvgSubtitle.classList.add('wavy-svg-subtitle'); 
     wavySvgSubtitle.setAttribute('viewBox', '0 0 1000 80');

    
const wavyPath = document.createElementNS(svgNamespace, 'path');
    wavyPath.setAttribute('id', 'wavyPathId'); 
    wavyPath.setAttribute('d', 'M10 50 Q 275 10 550 50 T 1090 50'); 

    
const svgText = document.createElementNS(svgNamespace, 'text');
   
    svgText.classList.add('svg-text-on-path'); 

const textPath = document.createElementNS(svgNamespace, 'textPath');
    textPath.setAttribute('href', '#wavyPathId'); 
    textPath.textContent = wavyPhrase; 

  
    svgText.appendChild(textPath);
    wavySvgSubtitle.appendChild(wavyPath);
    wavySvgSubtitle.appendChild(svgText);

   
    subtitleElement.parentNode.insertBefore(wavySvgSubtitle, subtitleElement.nextSibling);

    console.log('Wavy SVG subtitle injected by JavaScript.');
});


