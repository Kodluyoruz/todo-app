### Yapılan Değişiklikler

- h1 tag'ini içeren TodoHeader component'i eklendi.

- Not: Her todo array elemanı id ve content property'lerini tutan birer objedir.
  {
  id,
  content
  }

- toggleItem fonksiyonu "id" isimli bir parametre alıyor. Bu id ile şu anda işlem yapılan todo elemanını bularak, o elamana checked isimli bir property ekliyor. Bunu eklerken "currentTodo.checked = !currentTodo.checked" ifadesi kullanılmasının sebebi, eğer var olan bir checked property'si yoksa falsy bir değer olacağı için (!) ile bunun tersini alarak true bir değer elde etmektir. Eğer böyle bir property varsa ve şu anda true ise bu değer false olur. Bu checked property'sine bağlı olarak da TodoItem component'i içerisinde paragrafın (`<p>`) üstünü çizili hale getirecek class'ı dinamik olarak değiştiriyoruz.

- deleteItem fonksiyonu "id" isimli bir parametre alıyor ve filter metodu ile o id'ye sahip obje array'dan çıkarılıyor ve state güncelleniyor.
