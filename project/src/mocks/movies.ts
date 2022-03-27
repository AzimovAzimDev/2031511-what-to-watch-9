import {Movie, MovieFull} from '../types/Movie';

const movies: Movie[] = [
  {
    image: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'comedy',
    id: 1,
  },
  {
    image: 'bohemian-rhapsody.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Bohemian Rhapsody',
    genre: 'comedy',
    id: 2,
  },
  {
    image: 'macbeth.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Macbeth',
    genre: 'comedy',
    id: 3,
  },
  {
    image: 'aviator.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Aviator',
    genre: 'comedy',
    id: 4,
  },
  {
    image: 'we-need-to-talk-about-kevin.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'We need to talk about Kevin',
    genre: 'comedy',
    id: 5,
  },
  {
    image: 'what-we-do-in-the-shadows.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'What We Do in the Shadows',
    genre: 'comedy',
    id: 6,
  },
  {
    image: 'revenant.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Revenant',
    genre: 'comedy',
    id: 7,
  },
  {
    image: 'johnny-english.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Johnny English',
    genre: 'comedy',
    id: 8,
  },
  {
    image: 'shutter-island.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Shutter Island',
    genre: 'comedy',
    id: 9,
  },
  {
    image: 'pulp-fiction.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Pulp Fiction',
    genre: 'comedy',
    id: 10,
  },
  {
    image: 'no-country-for-old-men.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'No Country for Old Men',
    genre: 'comedy',
    id: 11,
  },
  {
    image: 'snatch.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Snatch',
    genre: 'comedy',
    id: 12,
  },
  {
    image: 'moonrise-kingdom.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Moonrise Kingdom',
    genre: 'comedy',
    id: 13,
  },
  {
    image: 'seven-years-in-tibet.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Seven Years in Tibet',
    genre: 'comedy',
    id: 14,
  },
  {
    image: 'midnight-special.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Midnight Special',
    genre: 'comedy',
    id: 15,
  },
  {
    image: 'war-of-the-worlds.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'War of the Worlds',
    genre: 'comedy',
    id: 16,
  },
  {
    image: 'dardjeeling-limited.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Dardjeeling Limited',
    genre: 'comedy',
    id: 17,
  },
  {
    image: 'orlando.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Orlando',
    genre: 'comedy',
    id: 18,
  },
  {
    image: 'mindhunter.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Mindhunter',
    genre: 'comedy',
    id: 19,
  },
  {
    image: 'midnight-special.jpg',
    preview: 'https://www.w3schools.com/tags/movie.mp4',
    name: 'Midnight Special',
    genre: 'comedy',
    id: 20,
  },
];


export const getFullMovieInfo = (id: number): MovieFull => ({
  ...movies.find((element) => element.id === Number(id)) as Movie,
  overview: {
    rating: 8.9,
    ratingReviews: 240,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius illo, perferendis. Debitis delectus est excepturi iure reiciendis, rerum veniam! Ab, consequuntur delectus dicta dolore eos magnam modi optio suscipit tempore.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  reviews: [
    {
      text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
      user: 'Kate Muir',
      date: 'December 24, 2016',
      points: 8.9,
      id: 1,
    },
  ],
  details: {
    director: 'Wes Anderson',
    duration: '1h 39m',
    genre: 'Comedy',
    released: '2014',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum',
  },
});

export default movies;
