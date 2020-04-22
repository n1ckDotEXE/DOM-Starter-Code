// header
// - h1
// - nav
//   - a
//   - a

const container = document.getElementById("container");
document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.display = "flex";
header.style.backgroundColor = "65A6F3";
header.style.color = "white";
header.style.padding = "5px 20px";

const headerHOC = document.createElement("h1");
headerHOC.textContent = "HighOnCoding";
headerHOC.style.fontSize = "35px";
headerHOC.style.paddingRight = "40px";
header.appendChild(headerHOC);

const linkPositionVertical = document.createElement("nav");
linkPositionVertical.style.display = "flex";
linkPositionVertical.style.alignItems = "center";
header.appendChild(linkPositionVertical);

const linkHome = document.createElement("a");
linkHome.textContent = "Home";
linkHome.style.fontSize = "20px";
linkHome.style.paddingRight = "20px";
linkHome.style.fontWeight = "bold";
linkHome.style.color = "white";
linkHome.style.fontSize = "20px";
linkHome.style.textDecoration = "none";
linkPositionVertical.appendChild(linkHome);

const linkCategories = document.createElement("a");
linkCategories.textContent = "Categories";
linkCategories.style.fontSize = "20px";
linkCategories.style.fontWeight = "bold";
linkCategories.style.color = "white";
linkCategories.style.fontSize = "20px";
linkCategories.style.textDecoration = "none";
linkPositionVertical.appendChild(linkCategories);

container.appendChild(header);

// main
//  billboard 
//  - h2
//    - p

const main = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

const billboard = document.createElement("div");
billboard.style.display = "flex";
billboard.style.backgroundColor = "DDDEE0"
billboard.style.flexDirection = "column";
billboard.style.width = "90%";
billboard.style.paddingLeft = "20px";
billboard.style.marginTop = "20px";
main.appendChild(billboard)

const heading2 = document.createElement("h2");
heading2.textContent = "Curse of the Current Reviews";
heading2.style.color = "#52575E";
heading2.style.fontSize = "30px";
billboard.appendChild(heading2);

const billboardParagraph = document.createElement("p");
billboardParagraph.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
billboardParagraph.style.fontSize = "15px";
billboard.appendChild(billboardParagraph);

container.appendChild(main);

// section
//  first div
//   - h3
//   - p
//   - bottom div
//  second div
//   - h3
//   - p
//   - bottom div

const section = document.createElement("section");
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.maxWidth = "92%"
section.style.justifyContent = "center";

const firstDiv = document.createElement("div");
firstDiv.style.width = "100%";
section.append(firstDiv)

const firstH3 = document.createElement("h3");
firstH3.style.color = "0866C0";
firstH3.textContent = "Hello WatchKit";
firstH3.style.fontSize = "25px";
firstH3.style.fontWeight = "10";
firstH3.style.paddingLeft = "5px"
firstH3.style.marginBottom = "10px";
firstDiv.append(firstH3);

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
firstParagraph.style.paddingLeft = "5px";
firstParagraph.style.fontSize = "15px";
firstParagraph.style.marginBottom = "5px";
firstDiv.append(firstParagraph);

const firstBottomDiv = document.createElement("div");
firstBottomDiv.style.display = "flex";
firstBottomDiv.style.backgroundColor = "#FF9900";
firstBottomDiv.style.color = "white";
firstBottomDiv.style.padding = "5px";
firstBottomDiv.textContent = "12 comments 124 Likes"
firstDiv.append(firstBottomDiv)

const secondDiv = document.createElement("div");
secondDiv.style.width = "100%";
section.append(secondDiv)

const secondH3 = document.createElement("h3");
secondH3.style.color = "116AC2";
secondH3.textContent = "Introduction to Swift";
secondH3.style.fontSize = "25px";
secondH3.style.fontWeight = "10";
secondH3.style.paddingLeft = "5px"
secondH3.style.marginBottom = "10px";
secondDiv.append(secondH3);

const secondParagraph = document.createElement("p");
secondParagraph.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a  fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
secondParagraph.style.paddingLeft = "5px";
secondParagraph.style.fontSize = "15px";
secondParagraph.style.marginBottom = "5px";
secondDiv.append(secondParagraph);

const secondBottomDiv = document.createElement("div");
secondBottomDiv.style.color = "white";
secondBottomDiv.style.backgroundColor = "#FF9900";
secondBottomDiv.style.display = "flex";
secondBottomDiv.style.padding = "5px";
secondBottomDiv.textContent = "15 comments 45 Likes"
secondDiv.append(secondBottomDiv)

const textLeft = document.createElement("div");
main.append(section);