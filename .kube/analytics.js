const script = document.createElement("script");

script.src = "https://analytics.medkha.com/script.js"
script.dataset.websiteId = "#{UmamiWebsiteId}";

document.head.appendChild(script);
