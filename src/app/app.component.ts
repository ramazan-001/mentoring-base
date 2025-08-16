import { NgIf } from '@angular/common';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NonNullableFormBuilder } from '@angular/forms';

const newPages = [5, 4, 3, 2, 1,] 

// const time = new Date().getTime();

// console.log('time:',time)

// if (time=== 235236236) {
//     console.log('time is correct')
    
// } else{
//   console.log('ERROR')
// }
// const func1 = (value: number) => console.log('value:', value);

// func1(456);

// const blank =(name: string, surname: string) => console.log('ваше имя:', name, 'Ваша фамилия:', surname);

// blank('Ramazan','Magomedgadzhiev')

// const shoppin = (name: string, item1: string, item2: string, item3: string, price: [number, number, number]) => {
//  return name + ' пошел в магазин, он купил там ' + item1 + ', затем он купил ' + item2 + ', в конце он еще купил ' + item3 + '. Все это обошлось в: ' + (price[0] + price[1] + price[2]) + ' рублей';
// }

//   // console.log(name + ' пошел в магазин');
//   // console.log('он купил там',item1);
//   // console.log('затем он купил',item2);
//   // console.log('в конце он еще купил',item3);
//   // console.log('Все это обошлось в: ', price[0] + price[1] + price[2], ' рублей')
// }

// const shoppingResult = shoppin('Рамазан', 'хлеб', 'молоко', 'масло', [30, 50, 100]);

// console.log(shoppingResult);



// const names = ['ilnur', 'ilyas', 'ilya', 'dinar',];

// names.map(
//   (name) => {
//     console.log(name.toUpperCase());
//   }
// )

// names.forEach(
//   (name) => {
//      console.log(name)
//     }
// )

// console.log('names:', names);

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты','Электрика', 'интерьер и одежда']

const upperCaseMenuItems = menuItems.map (
  (item : string) => {
    return item.toUpperCase();
  }
)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string ='mentoring-first-project';

  isUpperCase = true;

  changeMenuText() {
  this.menuItems = upperCaseMenuItems.map (
    item => this. isUpperCase ? item.toLowerCase () : item.toUpperCase()
  )
  this.isUpperCase = !this.isUpperCase
}

  ispicture = true;

   menuItems = upperCaseMenuItems

  isShowCatalog = true;

  aboutCompany = true;

  readonly newPages = newPages;

  readonly headeritem1 = 'главная';

  readonly headeritem2  = 'О компании';

  readonly headeritem3 = 'Каталог';

  readonly header2item1 = upperCaseMenuItems[0];

  readonly header2item2 = 'Стройматериалы';

  readonly header2item3 = 'Инструменты';

  readonly header2item4 = 'Электрика';

  readonly header2item5 = 'Интерьер и одежда';
  
 
}