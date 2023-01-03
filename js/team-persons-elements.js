import { persons } from './data.js';

const teamsElement = document.querySelector('.teams');

function getListContent(personsTeam) {
  let fragment = new DocumentFragment();

  personsTeam.forEach((person) => {
    const { src, name, role } = person;
    let li = document.createElement('li');
    li.className = 'team';
    li.insertAdjacentHTML(
      'afterbegin',
      `<a href="#" class="team__person-info">
                  <div class="team__photo-box">
                    <img
                      class="team__photo"
                      src=${src}
                      alt="photo"
                    />
                  </div>
                  <div class="team__desc-box">
                    <div class="team__desc">
                      <h2 class="team__name">${name}</h2>
                      <p class="team__role">
                        ${role}
                      </p>
                    </div>
                  </div>
                </a>
              `
    );
    fragment.append(li);
  });

  return fragment;
}

teamsElement.append(getListContent(persons));
