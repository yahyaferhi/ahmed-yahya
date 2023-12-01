
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
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
      image: "https://www.stormtech.ca/cdn/shop/products/QX-1_FRONT_AzureBlue_b25b323a-4e71-4f4b-8c95-0083026df8a7_2000x.jpg?v=1687562447",
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
    },
  
  
  ];

var totalprice=function(dummyData){
    return reduce(dummyData,function(acc,e,i){
        return acc+e.price
    },0)
}
$('#total').on("click",totalprice)