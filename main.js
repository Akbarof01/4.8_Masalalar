//30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko'rinishlar soni aylanishi.
// Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini ar- gument sifatida qabul qiladi.
// Funksiya jami framelar sonini qaytarsin.
//function frameCount(framesPerMinute, framesPerSecond) {
   // const framesPerHour = framesPerMinute * 60 * framesPerSecond;
   // return framesPerHour;
  //}
  
  //console.log(frameCount(1, 1)); 
 // console.log(frameCount(10, 1)); 
 // console.log(frameCount(10, 25));  

 //31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
//funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
//function calc(expression) {
//    try {
//        let result = eval(expression);
//        return result;
//    } catch (error) {
//        return "Xato: " + error;
//}
//}
//console.log(calc("23+4"));      
//console.log(calc("45-15"));     
//console.log(calc("13+2-5*2")); 
//console.log(calc("49/7*2-3")); 

//32.Shunday funksiya yasangki, unda 2ta butun son argument
//qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
//yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
//qaytaradi. Aks hold yolg’on
//function teng10(a, b) {
//    return a === 10 || b === 10 || a + b === 10;
//}
//console.log(teng10(9, 10)); 
//console.log(teng10(9, 9));   
//console.log(teng10(1, 9));

//33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
//yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
//Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
//keraglini funksiya qaytarib bersin.
//function litrMasofa(masofa) {
//    const benzinMiqdori = 100; 
//    const benzinSarfi = 10; 
    
//    const masofaBenzin = masofa * (benzinMiqdori / 10); 
//    return masofaBenzin;
//}
//console.log(litrMasofa(15));   // 150
//console.log(litrMasofa(23.5)); // 235
//console.log(litrMasofa(10));    // 100

//34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
//Namuna:
//fun(3, 7)  7
//fun(-1, 0)  0
//fun(1000, 400)  1000
//function fun(a, b) {
//    return Math.max(a, b);
//}
//console.log(fun(3, 7));     
//console.log(fun(-1, 0));    
//console.log(fun(1000, 400));  

//35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.
//function arr(x, y) {
//    return [x, y];
//}
//console.log(arr(1, 2));          
//console.log(arr(51, 21));        
//console.log(arr(512124, 215));   

//36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir
//birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
//yolg’on.
//function tengStrings(str1, str2) {
//    return str1.length === str2.length;
//}
//console.log(tengStrings("AB", "CD"));         
//console.log(tengStrings("ABC", "DE"));       
//console.log(tengStrings("hello", "edabit")); 
 
//37.Shunday funksiya yasangki, unga string argument qilib
//beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
//aks holda false.
//function boshStr(str) {
//    return str === "";
//}
//console.log(boshStr(""));   
//console.log(boshStr(" "));  
//console.log(boshStr("a"));

//38.Shunday funksiya yasang.Unda butun son argument qilib
//beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
//qaytarsin, aks holda false
//function bolinsin5(son) {
//    return son % 5 === 0;
//}
//console.log(bolinsin5(5));   
//console.log(bolinsin5(-55));
//console.log(bolinsin5(37));  

//39.Shunday funksiya yasang.Unda butun son argument qilib
//beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
//qaytarsin, aks holda false.
//function bolinsin100(son) {
//    return son % 100 === 0;
//}
//console.log(bolinsin100(1));     
//console.log(bolinsin100(1000)); 
//console.log(bolinsin100(100)); 

//40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
//nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.
//function uzunlik(str) {
//    if (str === "") {
//        return 0;
//    } else {
//        return 1 + uzunlik(str.slice(1));
//    }
//}
//console.log(uzunlik("apple")); 
//console.log(uzunlik("make"));  
//console.log(uzunlik("a"));     
//console.log(uzunlik(""));      
//console.log(uzunlik(" "));

//41.Funksiya 2ta argument qabul qiladi. Birinchi argument
//ikkinchi argumentdan katta emas. Agar birinchi argumentni
//ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false
//function bolinsin(x, y) {
//    return x % y === 0;
//}
//console.log(bolinsin(98, 7)); // true
//console.log(bolinsin(85, 4)); // false

//42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
//ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
//bersin.
//function raqam(str) {
//    return Number(str);
//}
//console.log(raqam("6"));     
//console.log(raqam("1000")); 
//console.log(raqam("12"));   

//43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
//Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
//tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
//agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
//function tortYuzi(a, b) {
//    if (a <= 0 || b <= 0) {
//        return -1;
//    } else {
//        return a * b;
//    }
//}
//console.log(tortYuzi(3, 4));   
//console.log(tortYuzi(10, 11)); 
//console.log(tortYuzi(-1, 5)); 
//console.log(tortYuzi(0, 2)); 

//44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
//“ism, familiya” formatdagi string qaytarsin.
//function ismFam(ism, familiya) {
//    return familiya + ", " + ism;
//}
//console.log(ismFam("First", "Last"));  
//console.log(ismFam("John", "Doe"));   
//console.log(ismFam("Mary", "Jane")); 
//console.log(ismFam("Abdulaziz", "Akbarov"));

//45.Quyidaga namunani kuzatgan holda funksiya yasang.
//function bug(isBug) {
//    return isBug ? "sad days" : "it's a good day";
//}
//console.log(bug(true));   
//console.log(bug(false));  

//46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
//qabul qiladi. Birinchi argument massive, ikkinchi argument
//ushbu massivni boshidan boshlab nechta elementni tushurib
//qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
//qaytarsin.//
//function tushirMassiv(arr, tushirishSoni) {
    //return arr.slice(tushirishSoni);
//}
//console.log(tushirMassiv([1, 2, 3], 1));  
//console.log(tushirMassiv([1, 2, 3], 2));  
//console.log(tushirMassiv([1, 2, 3], 5));  
//console.log(tushirMassiv([1, 2, 3], 0));  

//Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
//soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
//natijani qaytarsin
//function ovozlar(ovozObj) {
//    return ovozObj.upvotes - ovozObj.downvotes;
//}
//console.log(ovozlar({ upvotes: 13, downvotes: 0 }));     
//console.log(ovozlar({ upvotes: 2, downvotes: 33 }));    
//console.log(ovozlar({ upvotes: 132, downvotes: 132 })); 

//48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
//function negativ(son) {
//    return son > 0 ? -son : son;
//}
//console.log(negativ(4));  
//console.log(negativ(15));  
//console.log(negativ(-4)); 
//console.log(negativ(0)); 

//49.Massivni elementlarini o’rnin almashtiradigan funksiya
//yasang. Reverse metodi siz ham urinib ko’ring.
//function almash(arr) {
//    return arr.reverse();
//}
//console.log(almash([1, 2, 3, 4]));     
//console.log(almash([9, 9, 2, 3, 4])); 
//console.log(almash([]));              

//50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
//mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
//yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
//bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
//funksiya true qaytarsin aks holda false.

function kinogaKirish(yosh, otaOna) {
    return yosh >= 15 && otaOna;
}
console.log(kinogaKirish(14, true));   
console.log(kinogaKirish(14, false));  
console.log(kinogaKirish(16, false));  












 



