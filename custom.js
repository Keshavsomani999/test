function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                name: doc.data().name,
                img:doc.data().img
            })
            
        });
        console.log(items)
        generateItems(items);
    });    
    
}
function generateItems(items){
    let itemsHTML = "";
    items.forEach((item) => {
        let doc = document.createElement("div");
        doc.innerHTML=`
        <h1>${item.name}</h1>
        <img src="${item.img}" >
        `;
    document.querySelector(".main").appendChild(doc);
    });
    
}
getItems();