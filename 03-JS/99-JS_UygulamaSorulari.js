//STRING UYGULAMA SORULARI
// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
// 2- Hikayenin toplam index sayısı kaçtır.
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
// 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
// 8- Son 5 karakter haric hikayenizi yazdırın.
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
// 12- Bütün metni büyük harfe çevirin.
// 13- Bütün metni küçük harfe çevirin.
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// 16- 14. sorudaki Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.

//NUMBER UYGULAMA SORULARI
// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
// 7-) bir sayının karekökünü bulun.
// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)

//EXTRA= kullanıcıdan propmt'larla geçmiş tarih bilgisi alınacak(gün,ay,yıl) kullanıcıdan bugünün bilgileri alınacak(gün ay yıl)
//1yıl:360gün 1ay:30gün olarak ampirik hesap yapılacak.
//İstenen çıktı:
/*
 Girilen tarihler arasındaki gün sayısı: XXX Gün
 Girilen tarihler arasında geçen süre: xx Yıl xx Ay xx Gün geçmiştir.
 */

 //ARRAY UYGULAMA SORULARI
 // 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
// 2- adınızı değiştirin => Erdem => Mert. Diziyi konsola yazdırın.
// 3- dizinin uzunluğunu konsola yazdırın.
// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
// 10- myArray içerisinde eleman olarak "Veli" var mı ?
// 11- myArray içersinide 4.elemandan itibaren patates var mı?
// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
// 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']
// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

//IF CONDITIONS UYGULAMA SORUSU
//VKI Hesabı
//Kullanıcıdan boy,kilo,yaş,cinsiyet
//VKI = kilo/(boy/100)**2
//18,5 düşükse zayıf
//18,5 ile 24,9 arası normal
//25 ile 29,9 arası kilolu
//30 ile 34,9 arası obez
//35 üstü ise aşırı obez
//Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.
 
//50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
//60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!

//SWITCH-CASE UYGULAMA SORUSU
// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin. (BMW renk siyah ve beyaz stok var, diğerleri yok. MERCEDES renk gri ve mavi stok var, diğerleri yok.AUDI renk kırmızı var , diğerleri yok.)

//LOOPS UYGULAMA SORULARI
// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

//FUNCTION UYGULAMA SORULARI

// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.
const dizi = ["elma", "armut", "kiraz", "üzüm"];
// dizi[2]= "muz"
console.log(dizi);
const mixArr = arr=>{
    for(let i = arr.length-1; i>0; i--){ // i = (3-1)
        const j = Math.floor(Math.random()*(i+1)); //(4-2)
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
}
// console.log(mixArr(dizi));
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
console.log(dizi.slice().sort(()=>Math.random()-0.5));//!!!!



// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
const sayac = (kelime,harf)=> kelime.split("").filter(e=>e===harf).length
console.log(sayac("bilgeAdam Akademi","a"));

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

//HIGH ORDER ARRAY SORULARI
// Kullanılacak diziler
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
console.clear();
console.log(dizi);
//elma= 4-1 = 3
const tersCevir = string=>{
    let tersString="";
    for(let i = string.length-1; i>=0; i--){
        tersString+=string[i];
    }
    return tersString;
}
// console.log(tersCevir("bilge"));
const tersDizi = dizi.map(item=>tersCevir(item));
console.log(tersDizi);




// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
