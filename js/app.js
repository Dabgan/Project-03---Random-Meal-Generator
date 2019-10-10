
$(function(){
    
    const button = $('.btn');
    const receipeContainer = $('#receipe');

    button.on('click', function(){
        // receipeContainer.text('test');

        $.ajax({
            url : "https://www.themealdb.com/api/json/v1/1/random.php",
            method : "GET",
            dataType : "json",
        }).done((res) => {
            // console.log(JSON.stringify(res));
            createMeal(res.meals[0]);
        })
    })

    function createMeal(res){

        function getRes(response){
           return JSON.stringify(response);
        }

        receipeContainer.html(`
                                <div class="row">
                                                    
                                <div class="col-lg-6 border">
                                    </p>Category: ${res.strCategory}</p>
                                    </p>Area: ${res.strArea}</p>
                                    ${res.strTags === null ? '' : `<p>Tags: ${res.strTags}</p>`}
                                    <h3>Ingrediens:</h3>
                                    <ul>
                                        <li>${res.strMeasure1} ${res.strIngredient1}</li>
                                        <li>${res.strMeasure2} ${res.strIngredient2}</li>
                                        <li>${res.strMeasure3} ${res.strIngredient3}</li>
                                        <li>${res.strMeasure4} ${res.strIngredient4}</li>
                                        <li>${res.strMeasure5} ${res.strIngredient5}</li>
                                        <li>${res.strMeasure6} ${res.strIngredient6}</li>
                                        <li>${res.strMeasure7} ${res.strIngredient7}</li>
                                        <li>${res.strMeasure8} ${res.strIngredient8}</li>
                                        <li>${res.strMeasure9} ${res.strIngredient9}</li>
                                        <li>${res.strMeasure10} ${res.strIngredient10}</li>
                                        <li>${res.strMeasure11} ${res.strIngredient11}</li>
                                        <li>${res.strMeasure12} ${res.strIngredient12}</li>
                                        <li>${res.strMeasure13} ${res.strIngredient13}</li>
                                        <li>${res.strMeasure14} ${res.strIngredient14}</li>
                                        <li>${res.strMeasure15} ${res.strIngredient15}</li>
                                        <li>${res.strMeasure16} ${res.strIngredient16}</li>
                                        <li>${res.strMeasure17} ${res.strIngredient17}</li>
                                        <li>${res.strMeasure18} ${res.strIngredient18}</li>
                                        <li>${res.strMeasure19} ${res.strIngredient19}</li>
                                        <li>${res.strMeasure20} ${res.strIngredient20}</li>
                                    </ul>
                                </div>

                                <div class="col-lg-6 border">
                                    <h2 class="h1">${res.strMeal}</h1>
                                    <div class="">
                                        <img class="w-100" src="${res.strMealThumb}" alt="">
                                    </div>
                                    
                                </div>
                            
                                <div class="col-lg-12 border">
                                    <h2 class="h1">INSTRUKCJA</h2>
                                </div>
                                <div class="col-lg-12 border">
                                    <p>${res.strInstructions}</p>
                                </div>

                                <div class="col-lg-12 border">
                                    <h2 class="h1">Video</h2>
                                    <div class="bla">
                                        <iframe width="420" height="315"
                                        src="https://www.youtube.com/embed/${res.strYoutube.slice(-11)}"
                                        frameborder="0">
                                        </iframe>
                                    </div>
                                </div>
                            
                            </div>  
            `);
    };
    
});


   
