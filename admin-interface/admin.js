 document.addEventListener("DOMContentLoaded", function () {
      document.getElementById('addprod').addEventListener('click', addProduct)

  function addProduct() {
     var Pname = document.getElementById('Pname').value
      var Pcateg = document.getElementById('Pcateg').value
    var Pprice = document.getElementById('Pprice').value
        var Pimg = document.getElementById('Pimg').value

          if (Pname && Pcateg && Pprice) {
        var product = createProduct(Pname, Pcateg, Pprice, Pimg)
              disProd(product)

          } else {
              alert('Please add again')
          }
      }

      function createProduct(Name, Category, Price, Image) {
          return {
              Name: Name,
              Category : Category,
              Price: Price,
              Image:Image
          }
      }
  })

  function disProd(product) {
    var display= $('#showprod')
      var Prodlist=$('<li>').text(`Name: ${product.Name}, Category: ${product.Category}, Price: ${product.Price}`)

    if  (product.Image) {
        var prodimg = $('<img>').attr('src', product.Image).attr('alt', 'Image')
      Prodlist.append(prodimg) }
             display.append(Prodlist)
  }
  

  
