function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    newForm.style.display = "none";

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    const newForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    filterForm.style.display = "none";

    if (newForm.style.display === "none") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion") && !showOpinion) {
            article.style.display = "none";
        }
        else if (article.classList.contains("recipe") && !showRecipe) {
            article.style.display = "none";
        }
        else if (article.classList.contains("update") && !showUpdate) {
            article.style.display = "none";
        }
        else {
            article.style.display = "block";
        }
    });
}

function addNewArticle() {

    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    const opinionSelected = document.getElementById("opinionRadio").checked;
    const recipeSelected = document.getElementById("recipeRadio").checked;
    const updateSelected = document.getElementById("lifeRadio").checked;

    if (title === "" || text === "") {
        alert("Please fill in all fields.");
        return;
    }

    let typeClass = "";
    let typeLabel = "";

    if (opinionSelected) {
        typeClass = "opinion";
        typeLabel = "Opinion";
    }
    else if (recipeSelected) {
        typeClass = "recipe";
        typeLabel = "Recipe";
    }
    else if (updateSelected) {
        typeClass = "update";
        typeLabel = "Update";
    }
    else {
        alert("Please select an article type.");
        return;
    }

    const newArticle = document.createElement("article");
    newArticle.classList.add(typeClass);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = typeLabel;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    newArticle.appendChild(marker);
    newArticle.appendChild(h2);
    newArticle.appendChild(p);

    document.getElementById("articleList").appendChild(newArticle);

    document.getElementById("newContent").reset();

    alert("Article Added Successfully!");
}
