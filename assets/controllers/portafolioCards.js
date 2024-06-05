import { portafolioData, skillsData } from "../data/portafolio-data.js";

export const portafolioContainer = document.querySelector(".portafolio__container");
const portafolioCards = portafolioData.map(
  (data) =>
    `
 <!--<article class="portafolio__card">
          <div class="img__container">
            <a href=${data.repo} 
            target="_blank" rel="nofollow noreferrer noopener" > 
            <img src=${data.img} 
            alt= ${data.title} class="card__img">
            </a>
          </div>
          <div class="portafolio__icons">
          ${data.skills.map(skill =>`
            <div class="icon__caja">
                <img class="icono_skill" src=${skillsData[skill].img} alt=${skillsData[skill].nombre} width="40" height="40"/>
            </div>
          `).join('')}
          </div>
          <a href=${data.repo}  target="_blank" rel="nofollow noreferrer noopener" ><h3>${data.title}</h3></a>
          <div class="btn__container">
            ${data.hasdemo ? `<a href=${data.demo} target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver Demo</a>` : ''}
            <a href=${data.repo} target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver repositorio</a>
          </div>
        </article>-->





            <input type="radio" name="slide" id=${data.title} >
            <label for=${data.title} class="card" style="background-image: url(${data.img});">
                <div class="row">
                    <div class="description">
                        <a href=${data.repo} target="_blank" rel="nofollow noreferrer noopener" > 
                          <h4>${data.title}</h4>
                        </a>
                        <div class="btn__container">
                          <a href=${data.repo} target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver repositorio</a>
                          ${data.hasdemo ? `<a href=${data.demo} target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver Demo</a>` : ''}
                        </div>
                    </div>
                    <div class="icons__container">
                      ${data.skills.map(skill =>`
                      <div class="icon__caja">
                        <img class="icono_skill" src=${skillsData[skill].img} alt=${skillsData[skill].nombre} width="40" height="40"/>
                      </div>
                      `).join('')}
                    </div>
                </div>
            </label>
 `
).join('');

portafolioContainer.innerHTML = portafolioCards;
