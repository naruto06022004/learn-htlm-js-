//console.log(isLandscape (20, 25));
//function isLandscape(width , height ) {
 // return (width < height) ;
//} 
//function out fizzBuzz();
//checkSpeed(70);
/////function checkSpeed(speed) {
   /// const speedLimit = 70;
   // const kmPerPoint = 5;
   // if (speed <= speedLimit + kmPerPoint) 
//console.log('Ok');
//else { 
   // const poinst = Math.floor((speed - speedLimit) / kmPerPoint);
//if ( points >= 12) 
//console.log('Licese suppended');
 //else console.log('Points',points);
    

//showNumbers(10);
//function showNumbers (limit) {
    //for (let i = 0; i <= limit ; i ++ ){
    //const message = (i % 2 === 0 )? 'EVEN' : 'ODD'
    //console.log(i,message);
    //}
//}
const array = [0,1 ]
console.log (coutTruthy(array))
function coutTruthy (array){
   let count = 0 ;
   for (let value of array)
   if (value)
   count ++
   return count; 
}
