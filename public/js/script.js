const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

const addCards = (cardList) => {
  cardList.forEach((item) => {
    let text = `<div class="col s12 m4">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${item.image}">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">${item.title}
                              <i class="material-icons right">more_vert</i>
                            </span>
                            <p><a href="${item.link}">Add</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">${item.title}
                              <i class="material-icons right">close</i>
                            </span>
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>`;

    document
      .getElementById('card-list')
      .insertAdjacentHTML('beforebegin', text);
  });
};

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  getProjects();
});
