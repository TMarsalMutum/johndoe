/**
 * Created by Thibaut on 21/07/2016.
 */
var Promo = {
    create: function (name, creation, expiration, price) {
        this.name = name;
        this.creationDate = creation;
        this.expiration = expiration;
        this.price = price;
        return this;

    },
    render: function (id) {
        console.log('un promo');
        var listCreateParent = document.createElement("tr");
        var idCell = document.createElement("td");
        var name = document.createElement("td");
        var creationDate = document.createElement("td");
        var expiration = document.createElement("td");
        var price = document.createElement("td");
        var actions = document.createElement("td");

        idCell.innerHTML = id;
        name.innerHTML = this.name;
        creationDate.innerHTML = this.creationDate;
        expiration.innerHTML = this.expiration;
        price.innerHTML = this.price;

        listCreateParent.appendChild(idCell);
        listCreateParent.appendChild(name);
        listCreateParent.appendChild(creationDate);
        listCreateParent.appendChild(expiration);
        listCreateParent.appendChild(price);
        listCreateParent.appendChild(actions);

        return listCreateParent;
    }
};

var promos = [];

function promoGenerator() {
    var promo = Object.create(Promo);
    var d = new Date;
    var promoGenDay = d.getMonth() + "-" + d.getDate() + "-" + d.getHours();
    var promoName = document.querySelector('#promo_name').value;
    var promoDate = document.querySelector('#promo_date').value;
    var promoPrice = document.querySelector('#promo_price').value;

    if (isNaN(promoPrice)) {
        alert('le prix n\'est pas valide, essayez avec un chiffre')
        return;
    } else {
        promo.create(promoName, promoGenDay, promoDate, promoPrice);
        promos.push(promo);
        alert('Le code promo est maintenant actif, il sera détruit a la date d\'expiration que vous avez défini')
    }
    var listParent = document.querySelector("table");
    console.log(promos)
    for (childs in promos) {
        console.log(childs)
        listParent.appendChild(promos[childs].render(childs));
    }
    console.log(promoName)
    console.log(promoDate)
    console.log(promoGenDay)
    console.log(promos)
}



document.querySelector('.btn').addEventListener('click', promoGenerator);