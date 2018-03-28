function countAllPaarl(regNum)
{
  var allPaarl = regNum.split(',');
  var fromPaarl =[];
  for (var l = 0; l < allPaarl.length;l++)
  {
    console.log(allPaarl[l]);
    if(allPaarl[l].trim().startsWith('CJ'))
    {
     fromPaarl.push(allPaarl[l].trim())
    }
  }
  return fromPaarl.length
}
