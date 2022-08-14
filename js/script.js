            //Copy to the top of the script.js
            // Menu data structure
var menuLinks = [
    {
        text: 'about', href: '/about'
    },
    {
        text: 'catalog', href: '/catalog'
    },
    {
        text: 'orders', href: '/orders'
    },
    {
        text: 'account', href: '/account'
    },
  ];

            // Select and cache the <main>element in a variable named mainEl.
var mainEl = document.querySelector('main');
            //Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';
            //Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML ='<h1>SEI Rocks!</h1>';
            //Add a class of flex-ctrto mainEl.
mainEl.classList.add('flex-ctr');

            //Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
var topMenuEl = document.getElementById('top-menu');

            //Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";

            //Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

            //Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add('flex-around');

            /*Iterate over the entire menuLinksarray and for each "link" object:
              Create an <a>element.  On the new element, add an 
              hrefattribute with its value set to the hrefproperty of the "link" object.
              Set the new element's content to the value of the textproperty of the "link" object.
              Append the new element to the topMenuElelement.*/
menuLinks.forEach(function(link) 
    {
        var menuLinkEl = document.createElement('a');
        menuLinkEl.setAttribute = ( 'href', link.href);
        menuLinkEl.textContent = link.text;
        topMenuEl.appendChild(menuLinkEl);
    });
