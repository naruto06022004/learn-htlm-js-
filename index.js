const movie = {
    title: 'a',
    releaseYear  : 2018,
    reting: 4.5,
    director:'b'
};

showProperties(movie);
function showProperties(obj) {
    for(let key in obj )
        if (typeof obj[key]==='string')
        console.log(key ,obj[key]);
    
}
// bai 2
showStars(4);
function showStars(row){
    // 4
    for(let i = 1 ; i <= row; i++ ){
        let pattern = '';
         for (let i = 0 ; i< row ;i++ )
      pattern += '*'
      console.log(pattern);
}
}
// bai 3

// prime (whose fac are only 1 and it s)
// coposite
//12 = 1,2,3,4,6,12
// con be divided evenly by factors 
// 11 = 1 , 11
// 13 = 1,13
showPrimes (54);

function showPrimes(limit) {
    for (let number = 2; number <= limit ; number ++ ){
    // 2- current 
    let Primes = true;
    for (let factor = 2 ; factor <= number ; factor++){
        if (number % factor === 0) {
        isPrime = false;
        break
    }
 }
 if (isPrime) console.log(number);
}
}
   
function isPrime(number){
        let Primes = true;
        for (let factor = 2 ; factor <= number ; factor++){
            if (number % factor === 0) {
            isPrime = false;
            return false;

    }
}
return true;
    }
    