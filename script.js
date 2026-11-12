/* NuBest Skin Brightening Collection: ingredient explorer.
   Ingredient lists come from the product descriptions on nubest.com.
   Descriptions say what each ingredient is, not what it does. */

(function () {
  "use strict";

  var WHITE = "NuBest White";
  var COLLAGEN = "Collagen NuBest";
  var MULTI = "Women’s Multi";

  var INGREDIENTS = [
    { name: "Glutathione", desc: "A compound the body makes from three amino acids: cysteine, glutamine and glycine. It works as an antioxidant.", in: [WHITE] },
    { name: "Milk thistle", desc: "A flowering plant. Its seed extract contains a group of compounds called silymarin.", in: [WHITE] },
    { name: "Green tea extract", desc: "A concentrated extract of Camellia sinensis leaves, which contain polyphenols such as EGCG.", in: [WHITE] },
    { name: "Vitamin C", desc: "An essential water-soluble vitamin. The body needs it to make collagen.", in: [WHITE, MULTI] },
    { name: "Vitamin E", desc: "A fat-soluble vitamin that acts as an antioxidant in the body.", in: [WHITE, MULTI] },
    { name: "Vitamin B2", desc: "Also called riboflavin, a B vitamin involved in energy metabolism.", in: [WHITE] },
    { name: "Alpha lipoic acid", desc: "An antioxidant compound the body makes in small amounts.", in: [WHITE] },
    { name: "Hydrolyzed collagen", desc: "Collagen broken down into shorter protein chains called peptides.", in: [COLLAGEN] },
    { name: "Biotin", desc: "Vitamin B7, a water-soluble B vitamin.", in: [MULTI] },
    { name: "Zinc", desc: "An essential mineral the body cannot store, so it is needed regularly from food.", in: [MULTI] },
    { name: "Selenium", desc: "An essential trace mineral needed in small amounts.", in: [MULTI] },
    { name: "Vitamin A", desc: "A fat-soluble vitamin found in foods such as dairy, eggs and orange vegetables.", in: [MULTI] },
    { name: "Spirulina", desc: "A blue-green alga used as a food ingredient.", in: [MULTI] }
  ];

  var chipsEl = document.getElementById("chips");
  var nameEl = document.getElementById("ing-name");
  var descEl = document.getElementById("ing-desc");
  var listEl = document.getElementById("ing-products");
  if (!chipsEl) return;

  var buttons = [];

  function show(index) {
    var item = INGREDIENTS[index];
    buttons.forEach(function (b, i) { b.setAttribute("aria-pressed", i === index ? "true" : "false"); });
    nameEl.textContent = item.name;
    descEl.textContent = item.desc;
    listEl.innerHTML = "";
    item.in.forEach(function (product) {
      var li = document.createElement("li");
      li.textContent = product;
      listEl.appendChild(li);
    });
  }

  INGREDIENTS.forEach(function (item, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = item.name;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () { show(i); });
    chipsEl.appendChild(b);
    buttons.push(b);
  });

  show(0);
})();
