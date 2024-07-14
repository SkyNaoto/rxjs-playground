import { Observable } from "rxjs";


const helloButton = document.querySelector('button#hello');


const helloClick$ = new Observable<MouseEvent>(subscriber => {
  helloButton.addEventListener('click', (event2: MouseEvent) => {
    subscriber.next(event2);
  });
});


// const helloClick$ = new Observable<MouseEvent>(subscriber => {
//   helloButton.addEventListener('click', (event)=>{
//     subscriber.next(event);
//   });
// });

helloClick$.subscribe(
  event3 => console.log('Sub 1: ',event3.type, event3.x, event3.y)
);

setTimeout(()=>{
  console.log('Subscription2 starts');
  helloClick$.subscribe(
    event3 => console.log('Sub 2: ',event3.type, event3.x, event3.y)
  );
  
}  ,5000);

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
