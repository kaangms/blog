//Product service-manager

public Result UpdateCategoryId(int categoryId)
{
  var productList=GetlistByCategoryId(categoryId);  
  foreach(var product in productList){
    =>  product.categoryId=4;
      Update(product);
  }
}


public IDataResult<List<Product>> GetlistByCategoryId(int categoryId)
{
 var result=   _productDal.GetlistByCategoryId(categoryId).Tolist();
 return new SuccessDataResult<List<Product>> (result)
}

 public IResult Update(Product product)
{
    _productDal.Update(product);
  return new SuccessResult(Messages.ProductUpdated);
}
