const animals = [
  {
    name: 'White-tailed Deer',
    category: 'mammals',
    scientificName: 'Odocoileus virginianus',
    habitat: 'Forest edge',
    diet: 'Leaves & shrubs',
    description:
      'A familiar Michigan grazer known for quiet movement through woodland edges and open meadows.',
    emoji: '🦌',
    sound: 'https://example.com/deer.mp3'
  },
  {
    name: 'Black Bear',
    category: 'mammals',
    scientificName: 'Ursus americanus',
    habitat: 'Northern forests',
    diet: 'Berries & roots',
    description:
      'A powerful woodland mammal that forages in dense forests and remote habitats across the Upper Peninsula.',
    emoji: '🐻',
    sound: 'https://example.com/bear.mp3'
  },
  {
    name: 'American Robin',
    category: 'birds',
    scientificName: 'Turdus migratorius',
    habitat: 'Lawns & woodlands',
    diet: 'Earthworms & fruit',
    description:
      'A cheerful songbird common in Michigan neighborhoods, known for its dawn chorus and bright red breast.',
    emoji: '🐦',
    sound: 'https://example.com/robin.mp3'
  },
  {
    name: 'Great Blue Heron',
    category: 'birds',
    scientificName: 'Ardea herodias',
    habitat: 'Wetlands',
    diet: 'Fish & amphibians',
    description:
      'A tall wading bird often seen stalking shallow water in marshes, lakeshores, and river edges.',
    emoji: '🦤',
    sound: 'https://example.com/heron.mp3'
  },
  {
    name: 'Monarch Butterfly',
    category: 'insects',
    scientificName: 'Danaus plexippus',
    habitat: 'Open meadows',
    diet: 'Milkweed nectar',
    description:
      'A striking migratory butterfly admired for its orange-and-black wings and long-distance flights.',
    emoji: '🦋',
    sound: 'https://example.com/monarch.mp3'
  },
  {
    name: 'Firefly',
    category: 'insects',
    scientificName: 'Lampyridae',
    habitat: 'Warm summer fields',
    diet: 'Snails & soft-bodied insects',
    description:
      'A glowing beetle that lights up Michigan evenings with its gentle, rhythmic flashes in summer air.',
    emoji: '✨',
    sound: 'https://example.com/firefly.mp3'
  }
];

const grid = document.getElementById('animalGrid');
const template = document.getElementById('animalCardTemplate');
const categoryButtons = document.querySelectorAll('.category');
const themeToggle = document.getElementById('themeToggle');

function renderAnimals(filter = 'all') {
  grid.innerHTML = '';
  const visibleAnimals = filter === 'all'
    ? animals
    : animals.filter((animal) => animal.category === filter);

  visibleAnimals.forEach((animal) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.animal-card');
    node.querySelector('.emoji').textContent = animal.emoji;
    node.querySelector('.category-tag').textContent = animal.category;
    node.querySelector('.animal-name').textContent = animal.name;
    node.querySelector('.scientific-name').textContent = animal.scientificName;
    node.querySelector('.description').textContent = animal.description;
    node.querySelector('.habitat').textContent = `Habitat: ${animal.habitat}`;
    node.querySelector('.diet').textContent = `Diet: ${animal.diet}`;

    const playButton = node.querySelector('.play-button');
    playButton.addEventListener('click', () => {
      if (animal.sound && animal.sound.startsWith('http')) {
        const audio = new Audio(animal.sound);
        audio.play().catch(() => {
          playButton.textContent = '♫';
        });
      }
      playButton.textContent = '♪';
      setTimeout(() => {
        playButton.textContent = '▶';
      }, 700);
    });

    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        playButton.click();
      }
    });

    grid.appendChild(node);
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    categoryButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderAnimals(button.dataset.category);
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

renderAnimals();
