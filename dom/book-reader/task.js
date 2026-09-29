const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(sizeElement => {
  sizeElement.addEventListener('click', (e) => {
    e.preventDefault();

    fontSizes.forEach(el => el.classList.remove('font-size_active'));
    sizeElement.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = sizeElement.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});

const textColors = document.querySelectorAll('.book__control_color .color');
const bgColors = document.querySelectorAll('.book__control_background .color');

function setupColorSwitching(elements, bookClassPrefix, activeClass) {
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      elements.forEach(el => el.classList.remove('color_active'));
      element.classList.add('color_active');

      const colorValue = element.dataset.textColor || element.dataset.bgColor;
      
      Array.from(book.classList).forEach(className => {
        if (className.startsWith(bookClassPrefix)) {
          book.classList.remove(className);
        }
      });

      if (colorValue) {
        book.classList.add(`${bookClassPrefix}-${colorValue}`);
      }
    });
  });
}

setupColorSwitching(textColors, 'book_color', 'color_active');
setupColorSwitching(bgColors, 'book_bg', 'color_active');