/*
* Custom Sitemap Widget 
* Version 1.0.0
*
* Upon use of this widget, you acquire the right to use it; you're not actually 
* acquiring the widget itself. TheCamel.co is the owner of the intellectual property of this widget.
* The widget is for use only, it is not to be on-sold, lent, rented, given away, gifted or put in your will.
* Kindly refer to our Terms and Conditions for more info - http://www.thecamel.co/terms-and-conditions
* Credits
*  Custom Sitemap Widget (v1.0.0)
*/


   // Create a new instance of the Structure
let collectionName = 'Sample  Template';
let structure = new Structure();
data = [
    {
        "uuid": "e9a7d955dfa84d9b99a559059b7177b3",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer",
            "navTitle": "Soccer"
        },
        "page_item_url": "1"
    },
    {
        "uuid": "834e34e3472a4fdf8f31013bc02aef5e",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/adidas-soccer-cleats",
            "navTitle": "Adidas Soccer Cleats"
        },
        "page_item_url": "2"
    },
    {
        "uuid": "4f7cd0348bf34970a8e88e674139d8e8",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/goalkeepers-gloves",
            "navTitle": "Goalkeeper's Gloves"
        },
        "page_item_url": "3"
    },
    {
        "uuid": "a88a164952b34e4e8980d20e4e20ec3e",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/indoor-soccer-shoes",
            "navTitle": "Indoor Soccer Shoes"
        },
        "page_item_url": "4"
    },
    {
        "uuid": "82594026f62a459ea5ef7cf902dcdedb",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/mizuno-soccer-cleats",
            "navTitle": "Mizuno Soccer Cleats"
        },
        "page_item_url": "5"
    },
    {
        "uuid": "4e598f345cb04a9c83b4eaec47405f2a",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/new-balance-soccer-cleats",
            "navTitle": "New Balance Soccer Cleats"
        },
        "page_item_url": "6"
    },
    {
        "uuid": "3dfd04a64da847d489a93082971727b3",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/puma-soccer-cleats",
            "navTitle": "Puma Soccer Cleats"
        },
        "page_item_url": "7"
    },
    {
        "uuid": "9927f900c1e54b65b05442232b6defc0",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/shin-guards",
            "navTitle": "Shin Guards"
        },
        "page_item_url": "8"
    },
    {
        "uuid": "9e139e31ecc349198f289126f4bf4f9c",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/soccer-cleats",
            "navTitle": "Soccer Cleats"
        },
        "page_item_url": "9"
    },
    {
        "uuid": "dc4e36aa271b46799105269e409dbe46",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/boys-soccer-cleats",
            "navTitle": "Soccer Cleats - Boy's"
        },
        "page_item_url": "10"
    },
    {
        "uuid": "b950d0e539c94596a1560bbcf81f5068",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/girls-soccer-cleats",
            "navTitle": "Soccer Cleats - Girls"
        },
        "page_item_url": "11"
    },
    {
        "uuid": "b678cf88b64f44ef9a1a41fe3c0b8912",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/mens-soccer-cleats",
            "navTitle": "Soccer Cleats - Men's"
        },
        "page_item_url": "12"
    },
    {
        "uuid": "8bff896339ce41d9a4ff2440df8d9444",
        "data": {
            "navLink": "https://www.sportsandnaturegear.com/soccer/soccer-gear/womens-soccer-cleats",
            "navTitle": "Soccer Cleats - Women's"
        },
        "page_item_url": "13"
    }
];


// Extract footer items from the refined API data
let footerData = structure.footerItems(data);

// Update the HTML of the footer with the extracted footer data
$(".kFooterMainWrapper1stLayout").html(footerData);



// Constructor function for handling structure-related functions
function Structure() {
    // Method to extract footer items from refined data
    this.footerItems = (refinedData) => {
        let output = ''; // Initialize output variable
        refinedData.map(i => {
            // Constructing the output HTML for each footer item
            output += `<a href="${i.data.navLink}"><span class="text">${i.data.navTitle}</span></a><span class="dividerLayout1"> | </span>`;
        }); // End of map

        console.log(output, 'outputttttt'); // Log the output for debugging
        return output; // Return the constructed output
    };
}

// Check if the Font Awesome stylesheet is already added
const cssId = 'fontAwesomeSource';
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link'); // Create a new link element
    link.id = cssId; // Set the ID for the link
    link.rel = 'stylesheet'; // Set the relationship
    link.type = 'text/css'; // Set the type
    link.href = 'https://use.fontawesome.com/releases/v5.5.0/css/all.css'; // Set the href for Font Awesome
    link.integrity = 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'; // Set the integrity for security
    link.crossOrigin = 'anonymous'; // Allow cross-origin access
    head.appendChild(link); // Append the link to the head
}

if(!window.location.href.includes('inPrev=true') && data.inEditor){
    $('.inEditorEditLayout').show();
}