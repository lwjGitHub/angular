import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chapter02';
/*

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
  /!*
  * 函数
  * *!/
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
 /!* sum(a: number , b: number): number
  {
    return a + b;
  }*!/
  // tslint:disable-next-line:typedef
  sum(x, y)
  {
    return x + y;
  }
*/
/*条件渲染*/
/* person = '美国';
 nameArr = ['lwj', 'mfg', 'sk'];
 colors = [ 'red', 'blue', 'yellow', 'green' ];
 students = [
   {
      name: 'lwj',
      age: 29,
      hobby: 'fuck fg'
   },
   {
     name: 'mfg',
     age: 22,
     hobby: 'fuck sk'
   }
   ];
  workState = '工作1';
  orderState = 1;

 togglePerson(): void
 {
   this.person = this.person === '巴西' ? '美国' : '巴西';
 }
 public choosePerson(people: string, i: number): void
 {
    alert(`I like ${i} ` + people); /!*` 不是‘*!/
 }*/

/* ngModel
 username = 'root';
  password = '123';
  entity1 =  {
    name: '123',
    age: 48
  };
  time1 = new Date();
  msg = 'test';
  clickLogin(username: string, password: string): void
  {
    console.log(username);
    console.log(password);
  }
  */


 msg = 'Test';
 sendToNews = '跨组件传递数据，父到子';
 sendToNews1 = '跨组件传递数据，父到子';

 // 子传父
 getNewsMsg = '';
 getNewsEvent(event: any): void
 {
    console.log(event);
    this.getNewsMsg = event.msg;
 }
}
