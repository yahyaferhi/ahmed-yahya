function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function map(array, f) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {

    if (predicate(element, index)) {

      acc.push(element);
    }
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
var dummyData = [
  {
    name: "Phone",
    image: "https://www.notebookcheck.net/typo3temp/_processed_/5/c/csm_4_to_3_Teaser_Telekom_T_Phone_5G_29111f3aca.jpg",
    price: 29.99,
    category: "Electronics",
  },
  {
    name: "Jacket",
    image: "https://img01.ztat.net/article/spp-media-p1/78c8a36dfcb244d3aad32cbbb9b969d7/0dafbd64e9b74f78a616c590c51f5699.jpg?imwidth=762",
    price: 49.99,
    category: "Clothing",
  },
  {
    name: "watch",
    image: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/1246/1.jpg?4803  ",
    price: 14.99,
    category: "accsesori",
  },
  {
    name: "ball",
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f857c2b43d04735ab0faef500d99c04_9366/mls-pro-ball.jpg",
    price: 39.99,
    category: "Sports",
  },
  {
    name: "Book",
    image: "https://www.aibookgenerator.net/bookhome.png",
    price: 9.99,
    category: "Books",
  },

  {
    name: "superman toy ",
    image: "https://i5.walmartimages.com/seo/DC-Comics-12-Inch-Superman-Action-Figure-Kids-Toys-for-Boys_a4eda7a0-d50f-4f99-bfe6-0d187edf03bc.639b947874a63ceaa6e858835b72dc7c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: 19.99,
    category: "Toys",
  },

  {
    name: "makeup",
    image: "https://i.pinimg.com/736x/65/22/aa/6522aa1473fa1cc40eef482e1419fdf8.jpg",
    price: 24.99,
    category: "Beauty",
  }


];










function displayAllProduct() {
  $(".Product").empty();
  each(dummyData, function (e) {
    $(".Product").append(`
      <div>
        <img class="1" src="${e.image}">
        <h1>${e.name}</h1>
        <h2>${e.price}</h2>
        <h2>${e.category}</h2>

        <button class="addBtn" data-price="${e.price}">Add</button>
        </div>`

    );
  });
  $(".1").css({

    "width": "200px",
    "height": "auto"
  })


}

displayAllProduct();

var total = []

function addPrice(name) {
  each(dummyData, function (e, i) {
    if (e.name === name) {
      total.push(e.price)
    }
  })
  console.log(total);
}

var prices = [];
var all = 0

$('.addBtn').on('click', function () {
  var productPrice = $(this).data('price')
  prices.push(productPrice)
 
  
  for (let z = 0; z < prices.length; z++) {
    all += prices[z]
    
  }
  updateTotal(all)
  
});
$(".total-card").append(`<h1>Total</h1>`)

function updateTotal(number) {
  $('.total-card').text(number)
}
function searchProduct() {
  var searchinput = $("#input").val().toLowerCase()

  var arr = []

  each(dummyData, function (e) {
    if (e.name.toLowerCase() === searchinput)

      arr.push(e)

  });
  if (arr.length > 0) {
    $(".11").attr("src", arr[0].image)
    $(".22").text(arr[0].name)
    $(".33").text(+ arr[0].price)
    $(".44").text(arr[0].category)
  } else {
    $(".11").attr("src", "https://www.breathearomatherapy.com/assets/images/global/no-product.png")
    $(".22").text("your product is not found ")
    $(".33").text("Not found")
    $(".44").text("Not found")


  }
  window.location.href = "search.html"
}

 $("#btn").on("click", searchProduct)


// function displaySearchResults(results) {
//   $(".prductSearched").empty()

//  each(results, function (e) {
//    $(".prductSearched").append(<li>
//      <img class="hi" src="${e.image}" alt="image">
//      <h1 class="name">${e.name}</h1>
//      <h2 class="price">${e.price}$</h2>
//      <h2 class="category">${e.category}</h2>
//      <button class="total">Add</button>
//      </li>
//    )
//  })
// }

// function searchProduct() {
//  var searchTerm= $("#input").val().toLowerCase()
//  var searchResults=[]

//  each (dummyData, function (e) {
//           if (e.name.toLowerCase().includes(searchTerm)) {
//         searchResults.push(e)
//    }
//  })

//          if (searchResults.length > 0) {
//    displaySearchResults(searchResults)
//  } else

//  {
//         alert("what are you looking for ?")
//  }
// }

//     $(document).ready(function () {


//  $("#btn").on("click", searchProduct )


//           displayAllProduct()
// });
