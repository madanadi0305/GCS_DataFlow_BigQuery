function transform(line) {
  var values = line.split(",");
  var obj = new Object();
  
  obj["First_Name"] = values[0];
  obj["Gender"] = values[1];
  obj["Start_Date"] = values[2];
  obj["Last_Login_Time"] = values[3];
  obj["Salary_Amount"] = values[4];
  obj["Bonus_Percentage"] = values[5];
  obj["Senior_Management"] = values[6];
  obj["Team_Name"] = values[7];

  var stringifiedObj = JSON.stringify(obj);
  return obj;
}
