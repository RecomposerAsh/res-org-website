// NAVBAR //

const listItems = [
  { href: "#", text: "Logo" },
  { href: "index.html", text: "Home" },
  { href: "../html/about-page.html", text: "About" },
  { href: "#", text: "Get Involved" },
  { href: "../html/resident-stories.html", text: "Resident Stories" },
  { href: "../html/faq.html", text: "FAQ" },
  { href: "#", text: "Support Us" },
];

const navElement = document.createElement("nav");
const navList = document.createElement("ul");
navElement.appendChild(navList);

for (var i = 0; i < listItems.length; i++) {
  const listItem = document.createElement("li");
  const itemLink = document.createElement("a");

  itemLink.href = listItems[i].href;
  itemLink.innerHTML = listItems[i].text;

  listItem.appendChild(itemLink);
  navList.appendChild(listItem);
}

console.log(navElement);

document.body.appendChild(navElement);

// navList.children[0].className = "current";
