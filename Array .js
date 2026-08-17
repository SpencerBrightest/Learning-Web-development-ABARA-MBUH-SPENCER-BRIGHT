<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Exploration</title>
</head>
<body>

    <!-- Unique Element -->
    <h1 id="main-heading">Welcome to the DOM Tutorial</h1>

    <!-- Action Element with Attribute -->
    <a id="cta-link" href="https://flutter.dev" target="_blank">Visit Flutter Portal</a>

    <!-- Grouped Elements -->
    <ul class="feature-list">
        <li class="item" data-status="active">DOM</li>
        <li class="item" data-status="pending">Stateless</li>
        <li class="item" data-status="active">Asynchronous Pipeline</li>
    </ul>

    <scr
        const mainHeading = document.getElementById('main-heading');
        
        console.log("--- ID Selection Results ---");
        console.log("Text Content:", mainHeading.textContent);


        const actionLink = document.querySelector('#cta-link');
        
        console.log("\n--- querySelector Results ---");
        console.log("Link Destination (href):", actionLink.getAttribute('href'));
        console.log("Link Target Window:", actionLink.target);


      
  
        const listItems = document.querySelectorAll('.feature-list .item');
        
        console.log("\n--- querySelectorAll Results ---");
        console.log(`Found ${listItems.length} matching list elements.`);
s
        listItems.forEach((element, index) => {
            const textValue = element.textContent;
            const customAttribute = element.getAttribute('data-status');
            
            console.log(`Item #${index + 1}: "${textValue}" | Status: ${customAttribute}`);
        });
    </script>
</body>
</html>
