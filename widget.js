const style = document.createElement('style')
style.innerHTML = `
  * {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  p {
    text-align: center;
    color: #545454;
  }

  .iconsText {
    font-size: 16px;
    font-weight: bold;
    color: #545454;
  }

  .widgetWrapper {
    position: fixed;
    display: flex;
    flex-direction: row-reverse;
    top: 20vh;
    right: -315px;
    width: 350px;
    height: 300px;
    background-color: #FF5A00;
    border-radius: 12px 0 0 12px;
    border: 4px solid #FF5A00;
    transition: right 0.3s ease;
  }

  .widgetWrapper.active {
    right: 0;
  }

  .widgetHeader {
    color: white;
    font-size: 32px;
    position: absolute;
    left: 0;
    bottom: 40px;
    transform-origin: left bottom;
    transform: rotate(270deg) translateY(100%);
    white-space: nowrap;
  }

  .widgetContent {
    background-color: white;
    width: 290px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .widgetContent-Header {
    font-size: 16px;
    font-weight: bold;
    color: #FF5A00;
    text-shadow: 3px 0px 5px rgba(0, 0, 0, 0.39);
    text-align: center;
  }

  .widgetContent-Text {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #545454;
    text-wrap: nowrap;
  }

  .widgetLogo {
    height: 40%;
    width: auto;
    border: 3px solid #FF5A00;
    border-radius: 50%;
  }

  .widgetContentHeaderWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .widgetContent-additionalRanksContainer {
    display: flex;
  }

  .widgetContent-additionalRanksContainer-additionalRank {
    display: flex;
  }

  .starsContainer {
    display: flex;
    justify-content: center;
  }

  .showMoreButton {
    font-weight: bold;
    background-color: transparent;
    color: #a6a6a6;
    border: none;
    text-decoration: underline;
    margin-right: 0;
    display: flex;
    align-items: baseline;
    gap: 5px;
    align-self: flex-end;
    cursor: pointer;
  }

  .blockContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    margin: 5px 0;
  }

  .blockContainer-text {
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    color: #545454;
    text-wrap: nowrap;
    margin-bottom: 3px;
  }

  .iconContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px 0;
  }

  .icon {
    width: auto;
    height: 32px;
    cursor: pointer;
  }

  .mobileStyles .widgetWrapper {
    width: 130%; /* Powiększenie o 30% */
    height: 130%; /* Powiększenie o 30% */
  }

  .mobileStyles .widgetContent,
  .mobileStyles .widgetLogo,
  .mobileStyles .widgetContent-Header,
  .mobileStyles .widgetContent-Text,
  .widgetContent-starIcon,
  .mobileStyles .blockContainer-text {
    font-size: 1.3em; /* Powiększenie o 30% */
  }
`

document.head.appendChild(style)

const widgetWrapper = document.createElement("div")
widgetWrapper.className = "widgetWrapper"

const widgetHeader = document.createElement('span')
widgetHeader.className = "widgetHeader"
widgetHeader.innerHTML = 'Opinie o sklepie'

const widgetContent = document.createElement('div')
widgetContent.className = "widgetContent"

const widgetContentHeader = document.createElement('p')
widgetContentHeader.className = 'widgetContent-Header'
widgetContentHeader.innerHTML = 'Prowadzimy sprzedaż na całym świecie i kupujący nas polecają!'

// logo
const logoImg = document.createElement('img');
logoImg.src = 'https://sklep.amadi.pl/skins/store_user/store_348f5a708db8b7a9db1d3bac706bebe0_1/images/logo.png';
logoImg.alt = 'Logo';
logoImg.className = 'widgetLogo';

// łapka
const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
iconSvg.setAttribute("width", "34");
iconSvg.setAttribute("height", "34");
iconSvg.setAttribute("viewBox", "0 0 24 24");
iconSvg.setAttribute("fill", "none");
iconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("fill-rule", "evenodd");
path1.setAttribute("clip-rule", "evenodd");
path1.setAttribute("d", "M3 11a2 2 0 0 1 2-2h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a2 2 0 0 1-2-2v-8Zm3 0H5v8h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z");
path1.setAttribute("fill", "#6A6A6A"); // Set the desired color

const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute("fill-rule", "evenodd");
path2.setAttribute("clip-rule", "evenodd");
path2.setAttribute("d", "M12.393 5a.785.785 0 0 0-.76.594l-.59 2.36a3 3 0 0 1-.339.816l-.617 1.029-.916 1.282a.917.917 0 0 0-.166.63l.009.096-.01.095A1.022 1.022 0 0 0 9 12v6a1 1 0 0 0 1 1h6.264c.377 0 .67-.209.783-.502a60.63 60.63 0 0 0 1.004-2.814c.454-1.362.693-2.738.817-3.806.051-.44-.295-.878-.868-.878h-5.68l.847-5.086A.785.785 0 0 0 12.393 5Zm-2.701.11a2.785 2.785 0 0 1 5.448 1.132L14.68 9H18c1.637 0 3.059 1.354 2.855 3.109-.134 1.153-.395 2.673-.906 4.207a62.655 62.655 0 0 1-1.038 2.909C18.475 20.342 17.402 21 16.264 21H10a3 3 0 0 1-3-3v-6c0-.065.002-.129.006-.193a2.917 2.917 0 0 1 .537-1.888l.87-1.218.576-.96a1 1 0 0 0 .113-.272l.59-2.36Z");
path2.setAttribute("fill", "#6A6A6A"); // Set the desired color

iconSvg.appendChild(path1);
iconSvg.appendChild(path2);

const widgetContentHeaderWrapper = document.createElement('div')
widgetContentHeaderWrapper.className = 'widgetContentHeaderWrapper'
widgetContentHeaderWrapper.appendChild(widgetContentHeader)
widgetContentHeaderWrapper.appendChild(iconSvg)

widgetContent.appendChild(widgetContentHeaderWrapper)
widgetContent.appendChild(logoImg);
widgetWrapper.appendChild(widgetHeader)
widgetWrapper.appendChild(widgetContent)
document.body.appendChild(widgetWrapper)

widgetWrapper.addEventListener('mouseenter', handleMouseEnter)
widgetWrapper.addEventListener('mouseleave', handleMouseLeave)
widgetWrapper.addEventListener('click', toggleWidgetOnMobile)

// kontener na gwiazdki
const starsContainer1 = createStarsContainer();
const starsContainer2 = createStarsContainer();

// tekst nad gwiazdkami
const firstBlockText = document.createElement('p')
firstBlockText.className = 'blockContainer-text'
firstBlockText.innerHTML = 'ZGODNOŚĆ Z OPISEM'

const secondBlockText = document.createElement('p')
secondBlockText.className = 'blockContainer-text'
secondBlockText.innerHTML = 'OBSŁUGA KUPUJĄCEGO'

// bloki z ocenami
const firstBlock = createBlock(firstBlockText, starsContainer1);
const secondBlock = createBlock(secondBlockText, starsContainer2);

// kontener na bloki 
const blockContainer = document.createElement('div')
blockContainer.className = 'blockContainer'
blockContainer.appendChild(firstBlock)
blockContainer.appendChild(secondBlock)

widgetContent.appendChild(blockContainer)

// kontener na ikony
const iconContainer = document.createElement('div')
iconContainer.className = 'iconContainer'

// Tekst informacyjny
const infoText = createParagraph('Sprawdź:');

// Nowe źródła ikon
const allegroIcon = createIcon('https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/83/87/5a/83875a35-f271-832f-0590-e1d17136369d/AppIcon-0-0-1x_U007emarketing-0-9-0-85-220.png/246x0w.webp', 'https://allegro.pl/uzytkownik/amadi-pl/sklep')
const ebayIcon = createIcon('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/512px-EBay_logo.svg.png', 'https://www.ebay.pl/fdbk/feedback_profile/amadi.poland')
const googleIcon = createIcon('https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', 'https://amadi-studio-skory.business.site/')

// Dodajemy tekst informacyjny i ikony do kontenera
iconContainer.appendChild(infoText);
iconContainer.appendChild(allegroIcon);
iconContainer.appendChild(ebayIcon);
iconContainer.appendChild(googleIcon);

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.className = 'iconsText'
  paragraph.textContent = text;
  return paragraph;
}

function createIcon(src, link) {
  const iconLink = document.createElement('a');
  iconLink.href = link;
  iconLink.target = '_blank';

  const iconImg = document.createElement('img');
  iconImg.src = src;
  iconImg.className = 'icon';

  iconLink.appendChild(iconImg);
  return iconLink;
}


widgetContent.appendChild(iconContainer)

function createStarsContainer() {
  const container = document.createElement('div');
  container.className = 'starsContainer';

  for (let i = 0; i < 5; i++) {
    const starIcon = createStarIcon();
    container.appendChild(starIcon);
  }

  return container;
}

function createStarIcon() {
  const starIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  starIcon.setAttribute("class", "widgetContent-starIcon");
  starIcon.setAttribute("viewBox", "0 0 32 32");
  starIcon.setAttribute("width", "23");
  starIcon.setAttribute("height", "23");

  const starPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  starPath.setAttribute("d", "M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z");
  starPath.setAttribute("fill", "#F8D64E");
  starIcon.appendChild(starPath);

  return starIcon;
}

function createBlock(textElement, starsContainer) {
  const block = document.createElement('div');
  block.className = 'widgetContent-block';
  block.appendChild(textElement);
  block.appendChild(starsContainer);
  return block;
}

function createIcon(src, link) {
  const iconLink = document.createElement('a');
  iconLink.href = link;
  iconLink.target = '_blank';

  const iconImg = document.createElement('img');
  iconImg.src = src;
  iconImg.className = 'icon';

  iconLink.appendChild(iconImg);
  return iconLink;
}

function handleMouseEnter() {
    widgetWrapper.classList.add('active')
}

function handleMouseLeave() {
    widgetWrapper.classList.remove('active')
}

function toggleWidgetOnMobile() {
    const isMobile = window.innerWidth <= 767
    if (isMobile) {
        handleMouseEnter();
    }
}

document.addEventListener('click', function(event) {
    if (!widgetWrapper.contains(event.target) && !event.target.classList.contains('widgetWrapper')) {
        widgetWrapper.classList.remove('active')
    }
})
