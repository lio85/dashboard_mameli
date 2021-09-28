function AmountInProducts(props) {
    return (
        // $$$ of all products in DB
        <div class="col-md-4 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Stock</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$ {props.amountInProducts}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}
  
export default AmountInProducts;







