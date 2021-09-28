function AmountOfProductsInDB (props){
    return (
        // <!-- Amount of Products in DB --> 
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase: {props.nameProduct}</h6>
                </div>
                <div class="card-body">
                    {/* <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="assets/images/product_dummy.svg" alt="image dummy" /> */}
                    {/* <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="{}" alt="image dummy" /> */}
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.pathImage} alt="image dummy" />
                    <p>{props.descriptionProduct}</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    );
}

export default AmountOfProductsInDB;