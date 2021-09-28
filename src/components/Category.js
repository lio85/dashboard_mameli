function Category(props) {
    return (   
        <div class="col-lg-6 mb-4">
            <div class="card bg-info text-white shadow">
                <div class="card-body">{props.category} ({props.totalProducts} products) </div>
            </div>
        </div>
    );
}
  
export default Category;


