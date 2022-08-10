const cardList = [
  {
    title: 'Burger',
    image: 'images/burger.webp',
    link: 'https://www.freepik.com/free-vector/cute-girl-holding-burger-fast-food-logo-cartoon-hand-draw-character-vector-art-illustration_24327279.htm#query=fastfood%20logo&position=25&from_view=search',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Urna et pharetra pharetra massa massa ultricies.',
  },
  {
    title: 'Donut',
    image: 'images/donut.webp',
    link: 'https://www.freepik.com/free-vector/cute-girl-holding-donut-bakery-sweet-food-logo-cartoon-hand-draw-character-vector-art-illustration_24327287.htm#&position=10&from_view=detail#&position=10&from_view=detail',
    description:
      'Libero enim sed faucibus turpis in. Enim nunc faucibus a pellentesque sit. Enim blandit volutpat maecenas volutpat blandit. Vestibulum sed arcu non odio.',
  },
  {
    title: 'Pizza',
    image: 'images/pizza.webp',
    link: 'https://www.freepik.com/free-vector/cute-girl-holding-pizza-fast-food-logo-cartoon-hand-draw-character-vector-art-illustration_24327300.htm#query=fastfood%20logo&position=29&from_view=search',
    description:
      'Tortor consequat id porta nibh venenatis cras. Vitae congue mauris rhoncus aenean vel. Nam at lectus urna duis convallis convallis. Odio eu feugiat pretium nibh ipsum consequat.',
  },
];

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

const orderNow = () => {
  // ..
};

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  addCards(cardList);
});
