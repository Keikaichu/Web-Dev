import {Component, OnInit} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h39/h6a/79480589680670.jpg?format=gallery-medium'],
      name: 'Мышь Wireless Mouse черный',
      description:
        'Отличный выбор для любого геймера!\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/he5/h4a/84701020356638.jpg?format=gallery-medium'],
      name: 'Коврик для мыши Inova Death Life',
      description:
        'Коврик для мыши Inova Death Life\n' +
        'Надежный коврик для вашей мыши\n',

      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium'],
      name: 'Мышь Wireless Mouse черный',
      description:
        'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h86/h0b/85519448637470.png?format=gallery-medium'],
      name: 'Клавиатура AULA F75 белый',
      description:
        'Просто и со вкусом, хорошая клавиатура\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h1c/h08/80962638282782.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h08/80962638446622.jpg?format=gallery-medium'],
      name: 'Стилус Pencil V2 белый',
      description:
        'Удобный стилус\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/pencil-v2-belyi-110586586/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h99/63868015804446.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h0f/63868018851870.jpg?format=gallery-medium'],
      name: 'Карта памяти Kingston SDCS2/64Gb 64 Гб',
      description:
        'Вместительная карта памяти\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/kingston-sdcs2-64gb-64-gb-100081475/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/hab/64169205792798.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfd/hab/64169205792798.jpg?format=gallery-medium'],
      name: 'Wi-Fi роутер TP-LINK Archer C64',
      description:
        'Быстрый вай-фай роутер\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c64-102399103/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h42/hff/66325223505950.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h3b/66325224882206.jpg?format=gallery-medium'],
      name: 'Коврик для мыши Доллар',
      description:
        'Не является платежным средством\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/dollar-107802389/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h39/h6a/79480589680670.jpg?format=gallery-medium'],
      name: 'Принтер Xprinter XP-365B',
      description:
        'Принтер. Хороший.\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/xprinter-xp-365b-102105499/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5c/h31/84497680334878.jpg?format=gallery-medium'],
      name: 'LINEUP i5-12400F/ RTX 4060/ 32GB/ SSD 1024 Гб/ Win 11 Pro',
      description:
        'Сильный процессор для игровых новинок\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=750000000'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  selectedImageIndex: { [key: number]: number } = {};
  selectImage(productIndex: number, imageIndex: number): void {
    this.selectedImageIndex[productIndex] = imageIndex;
  }
  getDescriptionArray(description: string): string[] {
    return description.split('\n');
  }

  share(link: string): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
