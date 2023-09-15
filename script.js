const article = document.querySelector('article');
const customMenu = document.getElementById('custom-menu');
const twitterShareButton = document.getElementById('twitter-share-button');

let selectedText = '';

article.addEventListener('mouseup', (e) => {
  const selection = window.getSelection();
  selectedText = selection.toString().trim();

  if (selectedText !== '') {
    const { clientX, clientY } = e;
    customMenu.style.left = `${clientX}px`;
    customMenu.style.top = `${clientY}px`;
    customMenu.style.display = 'block';
  } else {
    customMenu.style.display = 'none';
  }
});

twitterShareButton.addEventListener('click', () => {
  const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    selectedText
  )}`;
  window.open(twitterShareURL, '_blank', 'width=550,height=420');
});

document.addEventListener('mousedown', (e) => {
  if (!customMenu.contains(e.target)) {
    customMenu.style.display = 'none';
  }
});

article.addEventListener('mouseup', (e) => {
  const selection = window.getSelection();
  selectedText = selection.toString().trim();

  if (selectedText !== '') {
    const { clientX, clientY } = e;
    customMenu.style.left = `${clientX}px`;
    customMenu.style.top = `${clientY}px`;
    customMenu.classList.add('show');
  } else {
    customMenu.style.display = 'none';
  }
});

document.addEventListener('mousedown', (e) => {
  if (!customMenu.contains(e.target)) {
    customMenu.style.display = 'none';
  }
});
