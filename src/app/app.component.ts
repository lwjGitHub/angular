import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chapter02';
  classStr = 'bgBlue';
  classObj = {
    bgBlue : false,
    active : true
  };
  classArr = ['bgBlue', 'active'];
  styleStr = 'background:skyblue;width:100px;height:100px;';
  styleObj = {
    background: 'pink',
    width : '100px',
    height: '100px'
  };
  styleColor = 'orange';
  msg = 'this is mag';
  widthNum = 200;
  flag = false;
  /*
  * 函数
  * */
  changeColor(): void
  {
      this.styleObj = {
      background: 'gray',
      width : '200px',
      height: '200px'
    };
  }
  changeButton(event): void
  {
    if(this.flag){
        event.target.style.backgroundColor = 'pink';
    }else
      {
        event.target.style.backgroundColor = 'blue';
      }
    this.flag = !this.flag;
  }
 /* sum(a: number , b: number): number
  {
    return a + b;
  }*/
  // tslint:disable-next-line:typedef
  sum(x, y)
  {
    return x + y;
  }




}
