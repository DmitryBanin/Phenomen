import { persons } from './data.js';

const teamsBoxElement = document.querySelector('.teams__box');

teamsBoxElement.innerHTML = `<ul class="teams">
    ${persons
      .map((person) => {
        let { src, name, role } = person;
        return `<li class="team">
      <a href="#" class="team__person-info">
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
      </li>`;
      })
      .join('')}
    </ul>`;
