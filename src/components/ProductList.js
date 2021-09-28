function ProductList(props) {
    return (  
        <div class="col-lg-6 mb-4">				
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">List of products: {props.productList.length}</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <ol>
                            {props.productList.map(product=><li>{product.name} // {product.stock}U // ${product.price}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>	
    );
}
  
export default ProductList;