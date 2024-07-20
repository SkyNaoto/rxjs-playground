import {Observable, Subscriber, from, fromEvent} from "rxjs";

const triggerButton = document.querySelector('button#trigger');

// const subscription = fromEvent<MouseEvent>(triggerButton,'click').subscribe(
//   event => console.log(event.type,event.x, event.y)
// );



const triggerClick$ = new Observable<MouseEvent>(Subscriber => {

  const clickHandlerFn = (event:MouseEvent)=>{
    console.log('Evnet calback executed');
    Subscriber.next(event);
  };



  triggerButton.addEventListener('click',clickHandlerFn);

  return () =>{
    triggerButton.removeEventListener('click',clickHandlerFn);
  }
});

const subscription = triggerClick$.subscribe(
  event => console.log(event.type,event.x,event.y)
);

setTimeout(()=>{
  console.log('Unsubscribe');
  subscription.unsubscribe();
},5000);

// const somePromise = new Promise((resolve, reject)=>{
  
//   const success = false;
//   if (success){
//     resolve('Resolved!');
//   } else {
//     reject('Rejected!');
//   }
//   resolve('Resoved!')
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: value => console.log(value),
//   error: error => console.log(error),
//   complete: ()=> console.log('completed')
// });

// const fetchData = new Promise((resolve1, reject2) =>{
//   setTimeout(() =>{
//     const success = false;
//     if (success){
//       resolve1('データ取得成功');
//     } else {
//       reject2('データ取得失敗');
//     }
//   },2000);
// });

// fetchData
// .then(data => {
//   console.log(data);
// })
// .catch(error =>{
//   console.log(error);
// });



// from(['Alice','Ben','Charlie']).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed")
// });

// const somePromise = new Promise((resolve, reject)=> {
//   resolve('resolved!');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: value => console.log(value),
//   complete: ()=> console.log("completed")
// });

// of('Alice','Ben','Chalie').subscribe({
//   next: value => console.log(value),
//   complete: ()=> console.log('Completed')
// });


// const name$= new Observable<string>(Subscriber => {
//   Subscriber.next('Alice');
//   Subscriber.next('Ben');
//   Subscriber.next('Chalie');
//   Subscriber.complete();
// });

// name$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// ourOwnOf('Alice','Ben','Chalie').subscribe({
//   next: value => console.log(value),
//   complete: ()=> console.log('Completed')
// });


// function ourOwnOf(...args: string[]): Observable<string>{
//   return new Observable<string>(Subscriber => {
//     for(let i=0; i< args.length; i++){
//       Subscriber.next(args[i]);
//     }
//     Subscriber.complete();
//   })
// }

// ourOwnOf2('Alice','test','mi').subscribe({
//   next: value => console.log(value),
//   complete: ()=> console.log('Completed')
// });

// function ourOwnOf2(...args2: string[]): Observable<string>{
//   return new Observable<string>(Subscriber=>{
//     for (let i=0; i< args2.length; i++){
//       Subscriber.next(args2[i]);
//     }
//     Subscriber.complete();
//   })
// }



// import { Observable } from "rxjs";


// const helloButton = document.querySelector('button#hello');


// const helloClick$ = new Observable<MouseEvent>(subscriber => {
//   helloButton.addEventListener('click', (event2: MouseEvent) => {
//     subscriber.next(event2);
//   });
// });


// // const helloClick$ = new Observable<MouseEvent>(subscriber => {
// //   helloButton.addEventListener('click', (event)=>{
// //     subscriber.next(event);
// //   });
// // });

// helloClick$.subscribe(
//   event3 => console.log('Sub 1: ',event3.type, event3.x, event3.y)
// );

// setTimeout(()=>{
//   console.log('Subscription2 starts');
//   helloClick$.subscribe(
//     event3 => console.log('Sub 2: ',event3.type, event3.x, event3.y)
//   );
  
// }  ,5000);

// helloClick$.subscribe(
//   event3 => console.log('Sub 2: ',event3.type, event3.x, event3.y)
// );







// import {ajax} from "rxjs/ajax";

// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// ajax$.subscribe(
//   data => console.log('sub 1:',data.response.first_name)
// );

// setTimeout(()=>{
//   ajax$.subscribe(data => console.log('sub 2:',data.response.first_name)
// )},1000)
// // ajax$.subscribe(
// //   data => console.log('sub 2:',data.response.first_name)
// // );

// setTimeout(()=>{
//   ajax$.subscribe(data => console.log('sub 3:',data.response.first_name)
// )},3000)
// // ajax$.subscribe(
// //   data => console.log('sub 3:',data.response.first_name)
// // );

// // timeout なしで連続してAPIでHTTPリクエストを送信すると、過度なリクエストとしてサーバーがエラーを返してきたので、時間を遅らせて送信するとうまくいった。








// import { Observable, Subscriber } from "rxjs";

// const interval = new Observable<number>( Subscriber =>{
//   let counter = 1;
//   console.log('Observable exectuted');
//   const intervalId = setInterval(()=>{
//     console.log('Emitted',counter);
//     Subscriber.next(counter++);
//   },2000);

//   return ()=>{
//     clearInterval(intervalId);
//   };

// });

// console.log('before subscribe');
// const subscription = interval.subscribe({
//   next: value => console.log('Subscription:',value)
// });

// setTimeout(()=>{
//   console.log('Unsbscribe');
//   subscription.unsubscribe();
// },7000)



// import { Observable, Subscriber } from 'rxjs';

// const emptyObservables = new Observable<string>( subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   setTimeout(()=> {
//     subscriber.next('Charlie');
//   },2000);
//   setTimeout(()=>{
//     subscriber.error(new Error('Failure'));
//   },4000);

//   return () =>{
//     console.log('Teardown');
//   }
  
// });
// // 
// console.log('Before subscribe');
// emptyObservables.subscribe({
//   next: value => console.log('Subscription:',value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });
// console.log('After subscribe');

// // const someObservable$ = new Observable<string>(subscriber => {
// //   console.log('Observable executed');
// //   subscriber.next('Alice');
// //   setTimeout(()=> subscriber.next('Ben'),2000);
// //   setTimeout(()=> subscriber.next('Charlie'),4000);
// //   // subscriber.complete();
// // });

// // console.log('Subscription 1 starts');
// // someObservable$.subscribe(value => console.log('Subscription 1:',value));

// // setTimeout(()=>{
// //   console.log('Subscription 2 starts');
// //   someObservable$.subscribe(value => console.log('Subscription 2:',value));
// // },1000);
