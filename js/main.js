
var club = prompt("تعالى و قولي اي اللغة اللي بتبني جسم صفحة الويب ؟ اكتب حروف كابيتل");

switch (club){
    case "CSS":
        alert("لا ي عم معروفة انها بتنسق الصفحة");
        break;
    case "HTML":
        alert("جدع هل فعلا");
        break;
    case "JAVASCRIPT":
        alert("جافا دا تعمق تاني خالص عاوز الاساس اللي تشتغل علية بردو اي ؟");
        break;
    default:
        alert("HTML");
}



// الحصول على العنصر الخاص بالنافذة المنبثقة (Modal)
var modal = document.getElementById("myModal");

// الحصول على الزر الذي يفتح النافذة المنبثقة
var btn = document.getElementById("myBtn");

// الحصول على العنصر <span> الذي يغلق النافذة المنبثقة
var span = document.getElementsByClassName("close")[0];

// عند الضغط على الزر، يتم فتح النافذة المنبثقة
btn.onclick = function() {
  modal.style.display = "block"; // تغيير نمط العرض ليظهر النافذة
}

// عند الضغط على العنصر <span> (x)، يتم إغلاق النافذة المنبثقة
span.onclick = function() {
  modal.style.display = "none"; // تغيير نمط العرض لإخفاء النافذة
}

/*5555555555555555555555555555555555*/

// تعريف متغير المثال وبدء قيمته من 1
var example = 1;

// دالة لزيادة قيمة المتغير
function pluss() {
    // عرض القيمة الحالية للمتغير في العنصر الذي له id "mezo"
    document.getElementById("mezo").innerHTML = example; 
    example++; // زيادة قيمة المتغير
}

// دالة لتقليل قيمة المتغير
function down() {
    // عرض القيمة الحالية للمتغير في العنصر الذي له id "mezo"
    document.getElementById("mezo").innerHTML = example; 
    example--; // تقليل قيمة المتغير
}

// الجزء المعلق أدناه كان يستخدم لطلب سعر من المستخدم وإظهار رسائل مختلفة بناءً على القيمة المدخلة
/*
var sale = prompt('the price ?'); // طلب إدخال السعر من المستخدم

if (sale < 250){
    alert("اقل") // إذا كان السعر أقل من 250
}else if (sale == 250){
    alert("متوسط") // إذا كان السعر يساوي 250
}else if (sale > 250){
    alert("اكثر") // إذا كان السعر أكبر من 250
}
*/

/*5555555555555555555555555555555555*/

// دالة لحساب الفرق في العملة
function dollar() {
    // الحصول على اسم المستخدم من حقل الإدخال
    var name = document.getElementById('nameInput').value;
    // الحصول على القيمة المحددة من قائمة العملات
    var selectedValue = document.getElementById('currencySelect').value;
    // الحصول على عنصر النتيجة لعرض الناتج
    var resultElement = document.getElementById('result');

    // هنا كانت هناك محاولة لعرض الناتج، ولكن تم التعليق عليه
    // resultElement.innerHTML = name * (selectedValue * 1) + " " + selectedCurrency; 
    
    // التحقق إذا كان الاسم فارغًا
    if (name == ""){
        resultElement.innerHTML = "الرقم مطلوب ي صاحبي"; // رسالة تطلب إدخال رقم
    } else if (isNaN(name)){ // التحقق إذا كان المدخل ليس رقمًا
        resultElement.innerHTML = "لا لا معلش خليها رقم بقا "; // رسالة توضح أن المدخل يجب أن يكون رقمًا
    } else {
        // حساب الناتج وعرضه بناءً على الاختيار
        resultElement.innerHTML = (selectedValue * name) + '  ' + 'الناتج بناءا على اختيارك للعملة'; 
    }

    return false; // منع إعادة تحميل الصفحة عند إرسال النموذج
}
