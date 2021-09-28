import Category from './Category';

function CategoriesInDataBase(props) {
    return (  
        <div class="col-lg-6 mb-4">				
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base: {props.categories.length}</h6>
                </div>
                <div class="card-body">
                    <div class="row">   
                        {props.categories.map(category => 
                            <Category category={category.name} totalProducts={category.totalProducts} />
                        )}    
                    </div>
                </div>
            </div>
        </div>	
    );
}
  
export default CategoriesInDataBase;



