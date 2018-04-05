var fromWhere = function(regNum)
{
  switch(regNum)
      {
    case "CY":
      return "Bellville";
    case "CJ 436-544":
      return "Paarl";
    case "CA":
      return "Cape Town";
    default :
      return "Some other place!";
  }
}
