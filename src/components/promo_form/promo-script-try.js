/**
 * Created by Thibaut on 22/07/2016.
 */
/**
 * Created by Thibaut on 21/07/2016.
 */
var Promo = {
    init: function (name, creation, expiration, price) {
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

var ListPromo = {
    promos: [],
    listParent: document.querySelector('table'),

    add: function (item) {
        console.log(item, Promo)
        if (Promo.isPrototypeOf(item)) {
            this.promos.push(item);
        } else {
            throw "this is not an instance of Promo";
        }
    },

    render: function (id) {
        console.log('list promos');

        this.listParent.innerHTML = '';

        for (i in this.promos) {
            console.log(i);
            // chose à ne pas faire, KISS = Keep it stupid simple, DRY = don't repeat yourself
            // listParent.appendChild(promos[childs].getPrototypeOf(ListPromo).render(childs));

            var promo = this.promos[i].render(i);
            this.listParent.appendChild(promo);

        }
    }
};
var PromoDate = {
    d: new Date,
    showIsoDate: function (date) {
        if (this.d.getMonth() < 10)
            return this.d.getFullYear() + "-0" + this.d.getMonth() + "-" + this.d.getDate();
        else if (this.d.getDate() < 10)
            return this.d.getFullYear() + "-" + this.d.getMonth() + "-0" + this.d.getDate();
        else
            return this.d.getFullYear() + "-" + this.d.getMonth() + "-" + this.d.getDate();
    }

};

var Generator = {
    promoGenerator: function () {
        var d = new Date;
        var promoGenDay = PromoDate.showIsoDate();
        var promoName = document.querySelector('#promo_name').value;
        var promoDate = document.querySelector('#promo_date').value;
        var promoPrice = document.querySelector('#promo_price').value;

        console.log(isNaN(promoPrice));
        if (promoPrice === '' || isNaN(promoPrice)) {
            alert('le prix n\'est pas valide, essayez avec un chiffre');
            return;
        } else {
            console.log('eee')
            var promo = Object.create(Promo);
            promo.init(promoName, promoGenDay, promoDate, promoPrice);
            ListPromo.add(promo);
            alert('Le code promo est maintenant actif, il sera détruit a la date d\'expiration que vous avez défini')
        }
    }
};


ListPromo.render();

document.querySelector('.btn').onclick = function () {
    // chargé de s'occuper de l'ajout
    Generator.promoGenerator();

    // chargé de s'occuper de la liste des promos
    ListPromo.render();

};