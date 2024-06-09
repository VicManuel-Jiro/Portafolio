import { portafolioData, skillsData } from "../data/portafolio-data.js";

export const portafolioContainer = document.querySelector(".portafolio__container");
const portafolioCards = portafolioData.map(
  (data, index) =>
    `
            <input type="radio" name="slide" id="${data.title}" ${index === 0 ? 'checked' : ''} >
            <label for="${data.title}" class="card" style="background-image: url(${data.img});">
                <div class="row">
                    <div class="description">
                          <h4>${data.title}</h4>
                        <div class="btn__container">
                          <a href="${data.repo}" target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver repositorio</a>
                          ${data.hasdemo ? `<a href="${data.demo}" target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver Demo</a>` : ''}
                        </div>
                    </div>
                    <div class="icons__container">
                      ${data.skills.map(skill =>`
                      <div class="icon__caja">
                        <img class="icono_skill" src="${skillsData[skill].img}" alt="${skillsData[skill].nombre}" />
                      </div>
                      `).join('')}
                    </div>
                </div>
            </label>
            <!--<p>height: ${screen.height}</p>
            <p>width: ${screen.width}</p>-->
 `
).join('');
portafolioContainer.innerHTML = portafolioCards;
