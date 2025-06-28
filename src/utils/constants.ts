export const ADVANTAGES = [
    {id: 0, title: "⚡ Швидке бронювання", description: "Забронюй заїзд за кілька кліків — без дзвінків та очікувань."},
    {id: 1, title: "📍 Найкращі треки", description: "Обирай серед перевірених картинг-локацій у своєму місті."},
    {id: 2, title: "💳 Зручна оплата", description: "Оплачуй онлайн — карткою або через Apple/Google Pay."}
]

export const TRACKS = [
  {
    id: 1,
    name: "Speed Arena Київ",
    location: "Київ, вул. Швидкісна, 10",
    description: "Сучасний критий трек з нічним освітленням і новими картами Sodi.",
    imageUrl: "/tracks/speed-arena-kyiv.avif",
    pricePerRace: 400,
    duration: 10, 
    isPopular: true
  },
  {
    id: 2,
    name: "Karting City Львів",
    location: "Львів, вул. Драйвова, 25",
    description: "Найдовший відкритий трек у Львові — понад 1 км крутого драйву.",
    imageUrl: "/tracks/karting-city-lviv.png",
    pricePerRace: 350,
    duration: 8,
    isPopular: true
  },
  {
    id: 3,
    name: "GoKart Dnipro",
    location: "Дніпро, Набережна Перемоги, 66",
    description: "Технічна траса з плавними поворотами для новачків та профі.",
    imageUrl: "/tracks/gokart-dnipro.jpg",
    pricePerRace: 300,
    duration: 10,
    isPopular: false
  },
  {
    id: 4,
    name: "Extreme Kart Одеса",
    location: "Одеса, вул. Мореходна, 5",
    description: "Швидкісний трек біля моря з чудовим видом та сучасним обладнанням.",
    imageUrl: "/tracks/extreme-kart-odesa.avif",
    pricePerRace: 380,
    duration: 12,
    isPopular: true
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Олена Ковальчук",
    city: "Київ",
    comment: "Зручно, швидко, без жодних дзвінків. Просто вибрала трек, забронювала — і через годину вже була на трасі!",
    avatarUrl: "/avatars/olena.avif",
  },
  {
    id: 2,
    name: "Ігор Сидоренко",
    city: "Львів",
    comment: "Крутий сервіс! Не думав, що все так легко. Дуже сподобалась траса в Karting City.",
    avatarUrl: "/avatars/ihor.avif",
  },
  {
    id: 3,
    name: "Марія Ткаченко",
    city: "Одеса",
    comment: "Зручно оплачувати онлайн, а підтримка миттєво відповіла на моє запитання.",
    avatarUrl: "/avatars/maria.avif",
  }
];
