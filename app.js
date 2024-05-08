let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#2cab37'

let items = [];

function toggleItem(btn, itemID, price) {
    let item = items.find(i => i.id === itemID);
    if (!item) {
        let newItem = { id: itemID, price: price};
        items.push(newItem)
        btn.classList.add('added-to-cart');
        btn.innerText = "Удалить из корзины";
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.MainButton.setText('Общая цена товаров: $(totalPrice)');
            if (!tg.MainButton.isVisible) {
                tg.MainButton.show()
            }
        } else {
            tg.MainButton.hide();
        }
    } else {
        let index = items.index0f(item);
        items.splice(index, 1);
        btn.classList.remove('added-to-card');
        btn.innerText = "Добавить в корзину";
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.MainButton.setText('Общая цена товаров: $(totalPrice)');
            if (!tg.MainButton.isVisible) {
                tg.MainButton.show();
            }
        } else {
            tg.MainButton.hide();
        }
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let data = {
        items: items,
        totalPrice: calculateTotalPrice()
    };
    tg.sendData(JSON.stringify(data));
});

function calculateTotalPrice() {
    return items.reduce((total, item) => total + item.price, 0);
}

document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item1", 1500)
})
document.getElementById("btn2").addEventListener("click", function(){
    toggleItem(this, "item2", 2000)
})

document.getElementById("btn3").addEventListener("click", function(){
    toggleItem(this, "item3", 2500)
})

document.getElementById("btn4").addEventListener("click", function(){
    toggleItem(this, "item4", 2200)
})

document.getElementById("btn5").addEventListener("click", function(){
    toggleItem(this, "item5", 2100)
})

document.getElementById("btn6").addEventListener("click", function(){
    toggleItem(this, "item6", 5000)
})

document.getElementById("btn7").addEventListener("click", function(){
    toggleItem(this, "item7", 6000)
})

document.getElementById("btn8").addEventListener("click", function(){
    toggleItem(this, "item8", 1600)
})

document.getElementById("btn9").addEventListener("click", function(){
    toggleItem(this, "item9", 1600)
})

document.getElementById("btn10").addEventListener("click", function(){
    toggleItem(this, "item10", 1600)
})

document.getElementById("btn11").addEventListener("click", function(){
    toggleItem(this, "item11", 1600)
})

document.getElementById("btn12").addEventListener("click", function(){
    toggleItem(this, "item12", 1600)
})

document.getElementById("btn13").addEventListener("click", function(){
    toggleItem(this, "item13", 1600)
})

document.getElementById("btn14").addEventListener("click", function(){
    toggleItem(this, "item14", 1600)
})

document.getElementById("btn15").addEventListener("click", function(){
    toggleItem(this, "item15", 1600)
})

document.getElementById("btn16").addEventListener("click", function(){
    toggleItem(this, "item16", 1600)
})

document.getElementById("btn17").addEventListener("click", function(){
    toggleItem(this, "item17", 1600)
})

document.getElementById("btn18").addEventListener("click", function(){
    toggleItem(this, "item18", 1600)
})

document.getElementById("btn19").addEventListener("click", function(){
    toggleItem(this, "item19", 1600)
})

document.getElementById("btn20").addEventListener("click", function(){
    toggleItem(this, "item20", 1600)
})

document.getElementById("btn21").addEventListener("click", function(){
    toggleItem(this, "item21", 1600)
})

document.getElementById("btn22").addEventListener("click", function(){
    toggleItem(this, "item22", 1600)
})

document.getElementById("btn23").addEventListener("click", function(){
    toggleItem(this, "item23", 1600)
})

document.getElementById("btn24").addEventListener("click", function(){
    toggleItem(this, "item24", 1600)
})

document.getElementById("btn25").addEventListener("click", function(){
    toggleItem(this, "item25", 1600)
})

document.getElementById("btn26").addEventListener("click", function(){
    toggleItem(this, "item26", 1600)
})

document.getElementById("btn27").addEventListener("click", function(){
    toggleItem(this, "item27", 1600)
})

document.getElementById("btn28").addEventListener("click", function(){
    toggleItem(this, "item28", 1600)
})

document.getElementById("btn29").addEventListener("click", function(){
    toggleItem(this, "item29", 1600)
})

document.getElementById("btn30").addEventListener("click", function(){
    toggleItem(this, "item30", 1600)
})

document.getElementById("btn31").addEventListener("click", function(){
    toggleItem(this, "item31", 1600)
})

document.getElementById("btn32").addEventListener("click", function(){
    toggleItem(this, "item32", 1500)
})
document.getElementById("btn33").addEventListener("click", function(){
    toggleItem(this, "item33", 2000)
})

document.getElementById("btn34").addEventListener("click", function(){
    toggleItem(this, "item34", 2500)
})

document.getElementById("btn35").addEventListener("click", function(){
    toggleItem(this, "item35", 2200)
})

document.getElementById("btn36").addEventListener("click", function(){
    toggleItem(this, "item36", 2100)
})

document.getElementById("btn37").addEventListener("click", function(){
    toggleItem(this, "item37", 5000)
})

document.getElementById("btn38").addEventListener("click", function(){
    toggleItem(this, "item38", 6000)
})

document.getElementById("btn39").addEventListener("click", function(){
    toggleItem(this, "item39", 1600)
})

document.getElementById("btn40").addEventListener("click", function(){
    toggleItem(this, "item40", 1600)
})

document.getElementById("btn41").addEventListener("click", function(){
    toggleItem(this, "item41", 1600)
})

document.getElementById("btn42").addEventListener("click", function(){
    toggleItem(this, "item42", 1600)
})

document.getElementById("btn43").addEventListener("click", function(){
    toggleItem(this, "item43", 1600)
})

document.getElementById("btn44").addEventListener("click", function(){
    toggleItem(this, "item44", 1600)
})

document.getElementById("btn45").addEventListener("click", function(){
    toggleItem(this, "item45", 1600)
})

document.getElementById("btn46").addEventListener("click", function(){
    toggleItem(this, "item46", 1600)
})

document.getElementById("btn47").addEventListener("click", function(){
    toggleItem(this, "item47", 1600)
})

document.getElementById("btn48").addEventListener("click", function(){
    toggleItem(this, "item48", 1600)
})

document.getElementById("btn49").addEventListener("click", function(){
    toggleItem(this, "item49", 1600)
})

document.getElementById("btn50").addEventListener("click", function(){
    toggleItem(this, "item50", 1600)
})

document.getElementById("btn51").addEventListener("click", function(){
    toggleItem(this, "item51", 1600)
})

document.getElementById("btn52").addEventListener("click", function(){
    toggleItem(this, "item52", 1600)
})

document.getElementById("btn53").addEventListener("click", function(){
    toggleItem(this, "item53", 1600)
})

document.getElementById("btn54").addEventListener("click", function(){
    toggleItem(this, "item54", 1600)
})

document.getElementById("btn55").addEventListener("click", function(){
    toggleItem(this, "item55", 1600)
})

document.getElementById("btn56").addEventListener("click", function(){
    toggleItem(this, "item56", 1600)
})

document.getElementById("btn57").addEventListener("click", function(){
    toggleItem(this, "item57", 1600)
})

document.getElementById("btn58").addEventListener("click", function(){
    toggleItem(this, "item58", 1600)
})

document.getElementById("btn59").addEventListener("click", function(){
    toggleItem(this, "item59", 1600)
})

document.getElementById("btn60").addEventListener("click", function(){
    toggleItem(this, "item60", 1600)
})

document.getElementById("btn61").addEventListener("click", function(){
    toggleItem(this, "item61", 1600)
})

document.getElementById("btn62").addEventListener("click", function(){
    toggleItem(this, "item62", 1600)
})

document.getElementById("btn63").addEventListener("click", function(){
    toggleItem(this, "item63", 1600)
})
