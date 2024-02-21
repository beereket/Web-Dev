
export interface Product {
  image:string[];
  name: string;
  rating: number;
  description: string;
  reference:string;
  i:number;
}

export const products = [
  {
    image:['../assets/images/download.jpeg', "../assets/images/iphone13-2.jpeg", '../assets/images/iphone13-3.jpeg'],
    name:'Apple Iphone 13',
    rating:4.9,
    description:"Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
    reference:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    i:0
  },
  {
    image:['../assets/images/iphone13pro-1.jpeg', '../assets/images/iphone13pro-2.jpeg', '../assets/images/iphone13pro-3.webp'],
    name:'Apple Iphone 13pro',
    rating: 4.8,
    description: 'Apple iPhone 13 Pro получил дисплей 6.1 дюйма Super Retina XDR1 с адаптивной частотой обновления до 120 Гц и технологией ProMotion для более быстрого и плавного взаимодействия. Благодаря передней панели Ceramic Shield экран защищен от трещин, царапин и других мелких повреждений.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-128gb-zolotistyi-102298716/?c=750000000',
    i:0
  },
  {
    image:['../assets/images/iphone14-2.jpeg', '../assets/images/iphone14-1.avif', '../assets/images/iphone14-3.jpeg'],
    name:'Apple Iphone 14',
    rating: 4.9,
    description: 'iPhone 14 и iPhone 14 Plus — смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A15 Bionic.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    i:0
  },
  {
    image:['../assets/images/iphone15-1.jpg', '../assets/images/iphone15-2.webp', '../assets/images/iphone15-3.png'],
    name:'Apple Iphone 15',
    rating: 4.6,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro',
    rating: 4.7,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана. Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой профессионального уровня.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro max',
    rating: 4.9,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone14promax-1.png', '../assets/images/iphone14promax-2.jpeg', '../assets/images/iphone14promax-3.jpg'],
    name:'Apple Iphone 14 pro max',
    rating: 4.7,
    description: 'Apple iPhone 14 Pro Max - это флагманский смартфон от компании Apple, который имеет впечатляющие технические характеристики и стильный дизайн.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone12-1.jpg', '../assets/images/iphone12-2.jpg', '../assets/images/iphone12-3.jpeg'],
    name:'Apple Iphone 12',
    rating: 4.2,
    description: 'Невероятно прочная передняя панель Ceramic Shield. Великолепный яркий дисплей OLED. Мощный чип. И система двух камер. Всё это есть в Apple iPhone 12.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone13promax-1.jpeg', '../assets/images/iphone13promax-2.jpeg', '../assets/images/iphone13promax-3.jpeg'],
    name:'Apple Iphone 13 pro max',
    rating: 4.5,
    description: 'Apple iPhone 13 Pro Max получил дисплей 6.7 дюйма Super Retina XDR1 с адаптивной частотой обновления до 120 Гц и технологией ProMotion для более быстрого и плавного взаимодействия. Благодаря передней панели Ceramic Shield экран защищен от трещин, царапин и других мелких повреждений.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-goluboi-102298789/?c=750000000',
    i:0
  },
  {
    image: ['../assets/images/iphone14plus-1.jpeg', '../assets/images/iphone14plus-2.jpeg', '../assets/images/iphone14plus-3.jpeg'],
    name:'Apple Iphone 14 plus',
    rating: 4.5,
    description: 'iPhone 14 Plus после базового iPhone 14 очень тяжко. Можно было бы ограничиться лишь одной фразой: просто увеличенный в размерах 14-й со всеми вытекающими. Но совсем ничего не рассказать тоже как бы нельзя.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-chernyi-106363170/?c=750000000',
    i:0
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/