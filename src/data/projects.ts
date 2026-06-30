export interface Project {
  title: string
  year: string
  image: string
  url: string
}

export const MARQUEE_ITEMS = [
  'Estratégia',
  'Marca',
  'Pesquisa',
  'Direção de arte',
  'Motion',
  'Fotografia',
  'Branding',
  'Open for projects',
] as const

export const DESIGN_PROJECTS: Project[] = [
  {
    title: 'Festival Internacional de Teatro — Cidade dos Anjos',
    year: '2025',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2b2c94250912465.6a29f5753a20d.png',
    url: 'https://www.behance.net/gallery/250912465/Festival-Internacional-de-Teatro-Cidade-dos-Anjos',
  },
  {
    title: 'Mochila dos Sonhos',
    year: '2025',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a22d15250844805.6a289c3365a71.png',
    url: 'https://www.behance.net/gallery/250844805/Mochila-dos-Sonhos',
  },
  {
    title: 'Gestor — Estratégia & Branding',
    year: '2024',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/af46ac206454919.66cced6ad4288.png',
    url: 'https://www.behance.net/gallery/206454919/Gestor-Estratgia-Branding',
  },
  {
    title: 'Orbi — Rebranding',
    year: '2025',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/14be1f234667047.68c890315b652.gif',
    url: 'https://www.behance.net/gallery/234667047/Orbi-Rebranding',
  },
  {
    title: 'XIX Congresso Abrapcorp',
    year: '2025',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6e01fb226789577.6834cd51e5142.png',
    url: 'https://www.behance.net/gallery/226789577/XIX-Congresso-Abrapcorp',
  },
  {
    title: 'Terceirão Cartel — Illustration',
    year: '2024',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e74328188658185.659f6c649702d.png',
    url: 'https://www.behance.net/gallery/188658185/Terceirao-Cartel-Illustration',
  },
  {
    title: 'Epion — Branding',
    year: '2024',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/3e5f62204175939.66a3ef6e174e0.png',
    url: 'https://www.behance.net/gallery/204175939/Epion-Branding',
  },
  {
    title: 'Globoinfo — Rebranding',
    year: '2025',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4d0d3f213512575.68c80741ce803.png',
    url: 'https://www.behance.net/gallery/213512575/Globoinfo-Rebranding',
  },
  {
    title: 'Pulvear — Branding',
    year: '2024',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/1819c0204105409.66a2b8ef7b7a7.png',
    url: 'https://www.behance.net/gallery/204105409/Pulvear-Branding',
  },
]

export const MOTION_PROJECTS: Project[] = [
  {
    title: 'Motion — Novo trabalho',
    year: '2025',
    image: '/images/motion-new-thumb.jpg',
    url: '/images/motion-new.mp4',
  },
  {
    title: 'Abertura — Liquid Type',
    year: '2024',
    image: '/images/motion-1.jpg',
    url: 'https://www.behance.net/lzamber',
  },
]

export const PHOTO_PROJECTS: Project[] = [
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54786841407_9ae5ecaa3c_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54786841407/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55328633613_30eeb6a729_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55328633613/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54787925743_b418f4a992_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54787925743/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55328687159_6c119393f8_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55328687159/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54758913375_05609e17de_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54758913375/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55328472571_480a10123a_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55328472571/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54758558051_29bb31b302_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54758558051/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55127475471_ae8f7cecf4_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55127475471/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55126598922_69e4bd3959_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55126598922/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55127647058_0645aca40b_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55127647058/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55127854545_527d1d181c_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55127854545/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55127458651_4f601d4559_b.jpg', url: 'https://www.flickr.com/photos/lzamber/55127458651/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54788019450_7d29201c55_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54788019450/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54786804067_a34069dc2d_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54786804067/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54786804077_bbe0faf804_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54786804077/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54787932189_2339cab3a1_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54787932189/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54758774183_8ba1f433ba_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54758774183/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54758569946_eeb2276a95_b.jpg', url: 'https://www.flickr.com/photos/lzamber/54758569946/' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55365591375_9d4773c42e_b.jpg', url: 'https://flic.kr/p/2smt8pD' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54787982135_5e26126dca_b.jpg', url: 'https://flic.kr/p/2rtqJiD' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55365596670_5c64d7c075_b.jpg', url: 'https://flic.kr/p/2smt9YW' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55126562877_b5e84d4684_b.jpg', url: 'https://flic.kr/p/2rZm3yD' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/55365332823_f1f27e93f3_b.jpg', url: 'https://flic.kr/p/2smrNxR' },
  { title: 'Foto', year: '', image: 'https://live.staticflickr.com/65535/54758886620_0b34393776_b.jpg', url: 'https://flic.kr/p/2rqRBdQ' },
]

export const POLAROIDS = [
  { src: '/images/pola-chimarrao.jpg', alt: 'chimarrão sagrado', caption: 'chimarrão sagrado', top: '0%', left: '0%', rotate: -6 },
  { src: '/images/pola-volei.jpg', alt: 'vôlei / saque', caption: 'vôlei / saque', top: '4%', left: '55%', rotate: 5 },
  { src: '/images/pola-corrida.jpg', alt: 'treino / corrida', caption: 'treino / corrida', top: '52%', left: '8%', rotate: -3 },
  { src: '/images/pola-museu.jpg', alt: 'museu / domingo', caption: 'museu / domingo', top: '48%', left: '58%', rotate: 7 },
  { src: '/images/pola-festival.jpg', alt: 'festival', caption: 'festival', top: '28%', left: '30%', rotate: -8 },
] as const
