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
                    <span class="icon-angle-down">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -4.5 20 20" version="1.1"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </svg>
                    </span>
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
        $('.sidenav').on('click', '.icon-angle-down', function(e) {
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
        $('.sidenav').on('mouseenter', '.icon-angle-down', function() {
            $(this).addClass('hoverSidenavtext');
        }).on('mouseleave', '.icon-angle-down', function() {
            $(this).removeClass('hoverSidenavtext');
        });
    }

    initializeMenu();
