
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
                                                    
                                <div class="col-lg-6 border guwno">
                                    <ul>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                        <li>100g guwna</li>
                                    </ul>
                                </div>

                                <div class="col-lg-6 border guwno">
                                    <h2 class="h1">Guwno jebane</h1>
                                    <div class="fluid">
                                        <img class="fluid" src="2.PNG" alt="">
                                    </div>
                                    
                                </div>
                            
                                <div class="col-lg-12 border">
                                    <h2 class="h1">INSTRUKCJA</h2>
                                </div>
                                <div class="col-lg-12 border">
                                    <ul>
                                        <li>Nasrać kurwa</li>
                                        <li>Nasrać kurwa</li>
                                        <li>Nasrać kurwa</li>
                                        <li>Nasrać kurwa</li>
                                        <li>Nasrać kurwa</li>
                                    </ul>
                                </div>

                                <div class="col-lg-12 border">
                                    <img class="fluid" src="2.PNG" alt="">
                                </div>
                            
                            </div>  
            `);
    };
    
});


   
