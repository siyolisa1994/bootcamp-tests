function mostProfitableDepartment(department)
{
  var profit={};
  var profitable=0;
  var sale =' ';
  for(var i=0; i<department.length;i++)
  {
    var data = department[i];
    if(profit[data.department]===undefined){
      profit[data.department]=0;

    }
    profit[data.department] += data.sales
  }
  for(var lulo in profit){
    if(profit[lulo]>profitable){
      profitable=profit[lulo];

    }
  }
  return sale;
}
