


fetch('https://dummyjson.com/product/1').then((res)=>{
   return res.json()
}).then((data)=>{
    console.log(data)
    document.querySelector('h1').innerHTML = data.brand
})

