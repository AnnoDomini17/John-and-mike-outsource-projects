/*
* Dynamic Side Navigation Menu
* Version 1.0.0
*
* Upon use of this widget, you acquire the right to use it; you're not actually 
* acquiring the widget itself. TheCamel.co is the owner of the intellectual property of this widget.
* The widget is for use only, it is not to be on-sold, lent, rented, given away, gifted or put in your will.
* Kindly refer to our Terms and Conditions for more info - http://www.thecamel.co/terms-and-conditions
* Credits
* Dynamic Side Navigation Menu (v1.0.0)
*/


    
    // Initialize and load necessary resources
    const cssId = 'fontAwesomeSource';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
        link.integrity = 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU';
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
    }
    
    // Example JSON data
    let menuData = [
        {
            "categoryTitle": "Category 1",
            "categoryLink": "/category1",
            "subtitle": "Item 1.1",
            "link": "/item1.1"
        },
        {
            "categoryTitle": "Category 1",
            "categoryLink": "/category1",
            "subtitle": "Item 1.2",
            "link": "/item1.2"
        },
        {
            "categoryTitle": "Category 2",
            "categoryLink": "/category2",
            "subtitle": "Item 2.1",
            "link": "/item2.1"
        },
        {
            "categoryTitle": "Category 2",
            "categoryLink": "/category2",
            "subtitle": "Item 2.2",
            "link": null
        }
    ];

    function initializeMenu() {
        let groupedData = groupByCategory(menuData);
        generateMenu(groupedData);
        
        // Initialize event handlers
        setupEventHandlers();
    }

    function groupByCategory(data) {
        return data.reduce((groupedData, item) => {
            if (!groupedData[item.categoryTitle]) {
                groupedData[item.categoryTitle] = {
                    categoryLink: item.categoryLink,
                    items: []
                };
            }
            groupedData[item.categoryTitle].items.push({
                subtitle: item.subtitle,
                link: item.link || null  // Use null if link is missing
            });
            return groupedData;
        }, {});
    }

    function generateMenu(groupedData) {
        let $menu = $('.sidenav ul');
        let itemBody = Object.keys(groupedData).map(category => {
            let categoryData = groupedData[category];
            let $parentItem = $(`
                <li>
                    <a href="${categoryData.categoryLink}">${category}</a>
                    <span class="arrow">&#x25BC;</span>
                </li>`
            );
            let $childList = $('<ul class="child"></ul>');

            // Map through items to create child menu items
            let childItems = categoryData.items.map(child => {
                if (child.link) {
                    return `<li><a href="${child.link}">${child.subtitle}</a></li>`;
                } else {
                    return `<li><span class="non-clickable">${child.subtitle}</span></li>`;
                }
            }).join('');

            $childList.html(childItems);
            $parentItem.append($childList);
            return $parentItem.prop('outerHTML');
        }).join('');

        $menu.html(itemBody);
    }

    function setupEventHandlers() {
        // Handle arrow clicks
        $('.sidenav').on('click', '.arrow', function(e) {
            e.stopPropagation();
            let $parentItem = $(this).closest('li');
            let $childList = $parentItem.find('.child');
            let arrow = $(this);

            if ($childList.length) {
                $childList.slideToggle();
                arrow.toggleClass('open');
                $parentItem.toggleClass('active');
            }
        });

        // Add hover effects
        $('.sidenav').on('mouseenter', '.arrow', function() {
            $(this).addClass('hoverSidenavtext');
        }).on('mouseleave', '.arrow', function() {
            $(this).removeClass('hoverSidenavtext');
        });
    }

    initializeMenu();
