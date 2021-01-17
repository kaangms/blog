



//categoryController
[HttpPost("deletecate")]
public IActionResult Delete(Category category){

  var result=  _categoryService.DeleteCategoryControl(category);

  if(result.Success){
      return Ok(result.Message)
  }
    return BadResquest(result.Message)
}

//categoryservice-manager


public IResult Delete(Category category)
{
    _categoryDal.delete(category)
    return  new SuccessResult("Başarıyla silindi")
}

public IResult DeleteCategoryControl(Category category)
{
    var result=_productService.UpdateCategoryId(category.catId);
    if(result.Success)
    {
      var catResult=   Delete(category)

         if(catResult.Success){
             return  new SuccessResult(catResult.Messages) 
         }
    }
    
    return new SuccessResult("Hay aksi silemedik")
   
   
}
