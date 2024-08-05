# tscourse
this repo is to practice typescript &amp; typescript syntax

sorular:
1. TypeScript nedir ve JavaScript'ten farkı nedir?

Typescript bir Javascript superset'idir, typescript kodu compile olduğunda Javascript koduna dönüşür. Javascript'te yazması uzun ve kompleks olacak veya direkt error verebilecek kodu kolaylıkla yazmayı sağlar. Farklılıklarda  type tanımlama, interface'ler ve generics var.

2. TypeScript'in tip sistemini nasıl tanımlarsınız?

Typescript'te başka dillerle ortak ve farklı bir çok tip tanımı mevcut. Ortak olanlarda enum, string, boolean, object, array ve null bulunurken typescript'e özel number(çoğu dilde integer ve float diye ayrılır), any, unkown, undefined ve Readonly (variable tipi değil ama yinede typescripte özel bi tanım) bulunmakta.

3. TypeScript'te fonksiyonların tiplerini nasıl belirleriz?

function myFunc(): fonksiyonunTipi; 

4. Interface nedir ve ne amaçla kullanılır?

Interface bi objenin yapısını daha açık bir şekilde açıklamamızı sağlayan şeylerdir. Bir objede olmasını beklediğimiz şeyleri belirtmek için kullanılır.

5. Generics nedir ve ne zaman kullanılır?

Generics, any tipinden farklı olarak belirli girilen bi tipi kullanmamızı sağlar mesela bi fonksiyon 2 ayrı variable tipi ile çalışıyorsa ve bu variable'ın hangi tipten olduğunun fonksiyonun işleyişinde bi önemi varsa kullanılır.

6. Module ve namespace arasındaki farklar nelerdir?

namespace module'dan daha eski, module ile direkt export edip dosyaları kullanabiliyorum (başka kod dillerinde farklı dosyalarda class açıp kullanmak gibi), namespace direkt tüm ayrı dosyaları sonunda bir dosyada compile ediyor. Bu projede module kullandım, bu sebeple tsconfig.json dosyasında "module": "commonjs" var, bunu seçmemin sebebi daha yeni bi özellik olması ve diğer kodladığım dillerde farklı dosyalar kullanımına daha çok benzemesi.

7. TypeScript'te bir modül nasıl oluşturulur ve dışa aktarılır?

Commonjs kullanırken birden fazla typescript dosyası olduğunda/oluşturduğumuzda modül oluşuyor, export edeceğimiz fonksiyon/sınıf/variable'ın önüne export yazarak dışa aktarılıyor.

8. TypeScript'te sınıf nedir ve nasıl tanımlanır?

Sınıflar yazdığımız dosyayı obje gibi kullanmamızı sağlar, "class ClassIsmi {}" şeklinde tanımlanır.

9. TypeScript'te miras nasıl gerçekleştirilir?

Miras class decleration'da extends kelimesi yazarak gerçekleşir, örnek bi class üzerinden gidersek "class Çocuk extends Baba {}" şeklindedir.