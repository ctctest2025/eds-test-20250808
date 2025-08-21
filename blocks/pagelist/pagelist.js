export default function decorate(block) {
  const ul = document.createElement('ul');

  fetch('/query-index.json')
    .then((res) => res.json())
    .then((index) => {
      let li = '';
      index.data.forEach((pageData) => {
        li += `
          <li>
            <a href="${pageData.path}">
              <div class="pagelist-item-image">
                <picture>
                  <img loading="lazy" src="${pageData.image}" alt="${pageData.title}">
                </picture>
              </div>
              <div class="pagelist-item-body">
                <div>
                  <p>${pageData.title}</p>
                  <p>${pageData.description}</p>
                </div>
              </div>
            </a>
          </li>`;
      });
      ul.innerHTML = li;
    });

  block.append(ul);
}
