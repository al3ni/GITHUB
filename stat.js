var Storage = require('node-storage');

function getavglink() {
  var posttime = new Storage('searchtime')
  grades = posttime.get('searchtime')
  total =0 
  for ( var i = 0; i < grades.length; i ++){
    total =total + grades[i]
}
avg = parseInt(total/grades.length)
return avg
}


function getavg() {
  var posttime = new Storage('posttime')
  grades = posttime.get('posttime')
  total =0 
  for ( var i = 0; i < grades.length; i ++){
    total =total + grades[i]
}
avg = parseInt(total/grades.length)
return avg
}


class statics {



  constructor(){
  fss =  require("fs")

  }
 static async get() { 
  var statics
  var avgposttime =getavg()
 var totalfreeusers = 0 
 var totalVIPusers = 0
 var totallinks =0 
 var cuser
  var fss = await require("fs")
    var alluser = await fss.readdirSync('./postuser')
    for (let i = 0; i < alluser.length; i++) {
      
    cuser =  await CheckpostUser(parseInt( alluser[i].replace('.json',''),10))
    totallinks = totallinks + cuser.links.length
     if (cuser.type === 'VIP') {
       totalVIPusers++
     }
     if (cuser.type === 'N') {
      totalfreeusers++
    }
  }
   var usersdata = await fss.readFileSync('stat.json')
     statics = await JSON.parse(usersdata)
  var avgdaypost = parseInt(statics.totalpost / ((new Date().getTime() - 1599802641758 )/ 86400000) ,10) 
  let mm = "" 
  console.log(statics);
   console.log(alluser.length);
   console.log(totalfreeusers);
   console.log(totalVIPusers);
   console.log(totallinks);
   console.log(avgposttime);
   console.log(avgdaypost);
     mm = '📊الاحصائيات 💌'+ "\r\n" + '📤العدد الكلي لمحاولات النشر  : ' +statics.totalpost+"\n" + "✅تم النشر بنجاح : " + statics.successpost +"\n"+"⚠️خطأ في النشر : "+statics.failpost+"\n"+"✴️ نسبة نجاح النشر :  "+parseInt(((statics.successpost/statics.totalpost)*100),10)+' % '+"\n" + "👨‍👨‍👧‍👧عدد المستخدمين الكلي : "+alluser.length +"\n"+"🎁 free : "+totalfreeusers+"\n"+ "💵 VIP: "+totalVIPusers+"\n"+"📚عدد الروابط في قائمة الانتضار: "+totallinks + '\n' +'📝 الاسئلة المحلوله : '+statics.solvedlinks+'\n'+ '⏰متوسط وقت النشر : ' + avgposttime + ' ثانية '      + '\n' + '📮 متوسط عدد مرات النشر يوميا : '+ avgdaypost +  "\n"+"  ٠٠تاريخ الاحصائية بدأت في 11/9/2020 ٠٠"
   //   {totaluser : alluser.length , totalfreeusers: totalfreeusers, totalVIPusers:totalVIPusers ,totallinks :totallinks,totalpost:statics.totalpost,failpost:statics.failpost,successpost:statics.successpost}
     
return mm
  }
  static async getlinks() { 
    var statics
    var avgsearchtime =getavglink()
    var fss = await require("fs")
    var filelist = new Array()
    filelist = await fss.readdirSync('answers/')
      var usersdata = await fss.readFileSync('stat.json')
       statics = await JSON.parse(usersdata)
       var avglinkday = await parseInt(statics.totalsearch / ((new Date().getTime() - 1599802641758 )/ 86400000) ,10) 
       var mm=''
       mm = '📊الاحصائيات 💌'+ "\r\n" + '🔍 عدد مرات بحث الاجابة : ' +statics.totalsearch+"\n" + "✅تم الحصول على الاجابة بنجاح : " + statics.successlink +"\n"+"⚠️تعذر الحصول على الجواب : "+statics.faillink+"\n"+"✴️ نسبة نجاح عملية البحث :  "+parseInt(((statics.successlink/statics.totalsearch)*100),10)+' % '+"\n" + "🗄 الاجوبة المخزونه في قاعدة البيانات : "+filelist.length  + '\n' + '⏰متوسط وقت الجواب  :  ' + avgsearchtime + ' ثانية '  +'\n'+ '📈 متوسط عدد الروابط يوميا : ' + avglinkday  +"\n"+"  ٠٠تاريخ الاحصائية بدأت في 11/9/2020 ٠٠"   
     //   {totaluser : alluser.length , totalfreeusers: totalfreeusers, totalVIPusers:totalVIPusers ,totallinks :totallinks,totalpost:statics.totalpost,failpost:statics.failpost,successpost:statics.successpost}
     
     
     
     
     
  return mm

    }
    static async addTofaillink(){
      var statics
      var fss = await require("fs")
      var usersdata = await fss.readFileSync('stat.json')
       statics = await JSON.parse(usersdata)
       statics.faillink++
       await  fss.writeFileSync('stat.json',JSON.stringify(statics))
      }
        
  static async addTosuccesslink(){
var statics
var fss = await require("fs")
var usersdata = await fss.readFileSync('stat.json')
 statics = await JSON.parse(usersdata)
 statics.successlink++
 await  fss.writeFileSync('stat.json',JSON.stringify(statics))
}
  
    static async addTototalsearch(){
  var statics
  var fss = await require("fs")
  var usersdata = await fss.readFileSync('stat.json')
   statics = await JSON.parse(usersdata)
   statics.totalsearch++
   await  fss.writeFileSync('stat.json',JSON.stringify(statics))
}
static async addTototalpost(){
  var statics
  var fss = await require("fs")
  var usersdata = await fss.readFileSync('stat.json')
   statics = await JSON.parse(usersdata)
   statics.totalpost++
   await  fss.writeFileSync('stat.json',JSON.stringify(statics))
}

static async addTosolvedlinks(){
  var statics
  var fss = await require("fs")
  var usersdata = await fss.readFileSync('stat.json')
   statics = await JSON.parse(usersdata)
   statics.solvedlinks++
   await  fss.writeFileSync('stat.json',JSON.stringify(statics))
}
static async addTosuccesspost(){
  var statics
  var fss = require("fs")
  var usersdata = fss.readFileSync('stat.json')
   statics = await JSON.parse(usersdata)
   statics.successpost++
   fss.writeFileSync('stat.json', JSON.stringify(statics))
}
static async addTofailpost(){
  var statics
  var fss = require("fs")
  var usersdata = fss.readFileSync('stat.json')
   statics = await JSON.parse(usersdata)
   statics.failpost++
   fss.writeFileSync('stat.json', JSON.stringify(statics))
}











}




async function CheckpostUser(userid){
var fss = await require("fs")
var usersList = []
if(await fss.existsSync('postuser/'+userid+'.json')){
usersdata = await fss.readFileSync( 'postuser/'+userid+'.json')
usersList = await JSON.parse(usersdata)
if ( usersList.type==='VIP') {
mm = new Date().getTime() - usersList.date
cc = usersList.count
if (mm < 604800000 && cc > 0 ) {

return usersList


} else {
return {count:0 , date: usersList.date , type:'N' , links:usersList.links}

}
} else {
return usersList
}

}else{
return {count:postcount , type:'N' ,links:[]}
}


}




module.exports = statics