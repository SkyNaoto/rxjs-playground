import { Observable, Subscriber } from 'rxjs';

const emptyObservables = new Observable<string>( subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(()=> subscriber.next('Charlie'),2000);
});

console.log('Before subscribe');
emptyObservables.subscribe(value=>console.log('Subscription:',value));
console.log('After subscribe');

// const someObservable$ = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   setTimeout(()=> subscriber.next('Ben'),2000);
//   setTimeout(()=> subscriber.next('Charlie'),4000);
//   // subscriber.complete();
// });

// console.log('Subscription 1 starts');
// someObservable$.subscribe(value => console.log('Subscription 1:',value));

// setTimeout(()=>{
//   console.log('Subscription 2 starts');
//   someObservable$.subscribe(value => console.log('Subscription 2:',value));
// },1000);
