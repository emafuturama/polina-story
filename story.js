// Меняем историю здесь. Пути относительные: сайт работает и в папке GitHub Pages.
// demo: false — выключить свободный просмотр глав перед подарком.
window.STORY = {
  demo: false,
  herName: 'Полина',
  hisName: '',
  tiktok: { hisHandle: 'тгк: wifiboy0', herHandle: '@paliarink', profile: 'assets/photos/tiktok-profile.png', avatar: 'assets/photos/his-avatar.png', comment: 'зайди в лс', message: 'давай познакомимся', feed: '' },
  meet: { options: ['В Discord', 'Гулять', 'В кафе'], correct: 0 },
  gift: { options: [{ icon: '🎧', text: 'Наушники' }, { image: 'assets/photos/appa.png', icon: '☁', text: 'Плюшевый Аппа' }, { icon: '🧸', text: 'Плюшевый мишка' }], correct: 1 },
  music: { src: 'assets/audio/our-song.mp3', title: 'П+А=♡ · наша песня', volume: 0.35 },
  // Укажите путь, когда соответствующий файл уже добавлен в assets.
  photos: {
    cover: ALBUM.petersburg[24], farewell: ALBUM.farewell, apartment: 'assets/photos/apartment-with-you.png', himCutout: '',
    chelyabinsk: [4,5,6,10,13,21].map(i=>ALBUM.chelyabinsk[i]),
    aviapark: [0,5,8,9,10].map(i=>ALBUM.aviapark[i]),
    cinema: ALBUM.aviapark[13],
    moscow: [4,10,12,16,22,24,28,35].map(i=>ALBUM['moscow-first'][i]),
    board: [ALBUM.chelyabinsk[5],ALBUM['moscow-first'][16],ALBUM.aviapark[10],ALBUM['moscow-first'][22],ALBUM['moscow-first'][4],ALBUM['moscow-first'][28]],
    boat: [3,22,25,27,28,33].map(i=>ALBUM.petersburg[i]),
    nakhabino: [0,3,6,10,14,19].map(i=>ALBUM['moscow-again'][i])
  },
  birthday: { day: null, year: 2026, video: 'assets/video/birthday-vertical.mp4' },
  maps: window.ROUTES,
  finalText: 'Полина, эти семь месяцев — самые прекрасные в моей жизни. Из одного комментария вырос целый мир: наши города, наши квартиры, наши маленькие привычки и столько моментов, которые я хочу прожить с тобой ещё раз.\n\nЯ каждый день думаю о тебе и мечтаю обнять. Очень тебя люблю. И сколько бы километров сейчас ни было между нами, я знаю, к кому хочу возвращаться. К тебе.\n\nНаша история не закончилась. Всё только начинается.\n\nУвидимся на Новый год, моя любимая. ♡'
};
