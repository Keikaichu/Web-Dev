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
        'Scale 25.3 inches.\n' +
        'Acoustic type\n' +
        'Number of strings6\n' +
        'Material: rosewood, mahogany\n' +
        'Bridge type: fixed\n' +
        'Number of frets 20\n' +
        'String material: metal\n' +
        'Left-handed No\n' +
        'Inlaysimple\n' +
        'FeaturesPiezo sensor\n' +
        'Brown color\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000'
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
