// replace the value below with the Telegram token you receive from @BotFather
const token = '1826365280:AAGk5ql3KikEdNZJx8YAxZGsptOQIWTCSYI';
var chat4 = "@library995" // هنا اكتب قناتك
var subpost = "https://t.me/chegg1998" // هنا اكتب بوست الاشتراك
spacialusers =['library99'] //admins
var postgroup = "@chegg35" //post group
packagename = "abd-post"


pro7 = 0 
wek = ''
lastTime = 46464
const CronJob = require('cron').CronJob;
var Storage = require('node-storage');
var store = new Storage('storage');
const gmc = require("./gmc.js")
auto = 0
postcount = store.get('postcount')
dsleep = store.get('sleep')
sleep = dsleep
const ocrSpaceApi = require('ocr-space-api');
const statics = require('./stat.js');
sptialwords =['exam','Exam','EXAM']
mainlist =   [  [{text:"Math", callback_data:"s1-Math"} ],
[{text:"Science", callback_data:"s1-Science"} ],
[{text:"Engineering", callback_data:"s1-Engineering"} ],
[{text:"Business", callback_data:"s1-Business"} ],
[{text:"Social Sciences", callback_data:"s1-Social Sciences"} ],
[{text:"الغاء", callback_data:"exit"} ]]
Mathlist=[[{text:"Prealgebra", callback_data:"s2-f1-p1-Prealgebra"} ],
[{text:"Geometry", callback_data:"s2-f1-p2-Geometry"} ],
[{text:"Algebra", callback_data:"s2-f1-p3-Algebra"} ],
[{text:"Trigonometry", callback_data:"s2-f1-p4-Trigonometry"} ],
[{text:"Precalculus", callback_data:"s2-f1-p5-Precalculus"} ],
[{text:"Calculus", callback_data:"s2-f1-p6-Calculus"} ],
[{text:"Statistics and Probability", callback_data:"s2-f1-p7-Statistics and Probability"} ],
[{text:"Advanced Math", callback_data:"s2-f1-p8-Advanced Math"} ],
[{text:"Other Math", callback_data:"s2-f1-p9-Other Math"} ],
[{text:"رجوع", callback_data:"backToMain"} ]]
Sciencelist=[[{text:"Physics", callback_data:"s2-f2-p1-Physics"} ],
[{text:"Chemistry", callback_data:"s2-f2-p2-Chemistry"} ],
[{text:"Biology", callback_data:"s2-f2-p3-Biology"} ],
[{text:"Advanced Physics", callback_data:"s2-f2-p4-Advanced Physics"} ],
[{text:"Nursing", callback_data:"s2-f2-p5-Nursing"} ],
[{text:"Anatomy and Physiology", callback_data:"s2-f2-p6-Anatomy and Physiology"} ],
[{text:"Earth Sciences", callback_data:"s2-f2-p7-Earth Sciences"} ],
[{text:"رجوع", callback_data:"backToMain"} ]]  
Engineeringlist=[[{text:"Computer Science", callback_data:"s2-f3-p1-Computer Science"} ],
[{text:"Electrical Engineering", callback_data:"s2-f3-p2-Electrical Engineering"} ],
[{text:"Mechanical Engineering", callback_data:"s2-f3-p3-Mechanical Engineering"} ],
[{text:"Civil Engineering", callback_data:"s2-f3-p4-Civil Engineering"} ],
[{text:"Chemical Engineering", callback_data:"s2-f3-p5-Chemical Engineering"} ],
[{text:"رجوع", callback_data:"backToMain"} ]]  
Businesslist=[[{text:"Finance", callback_data:"s2-f4-p1-Finance"} ],
[{text:"Economics", callback_data:"s2-f4-p2-Economics"} ],
[{text:"Accounting", callback_data:"s2-f4-p3-Accounting"} ],
[{text:"Operations Management", callback_data:"s2-f4-p4-Operations Management"} ],
[{text:"رجوع", callback_data:"backToMain"} ]]  
Sociallist=[[{text:"Psychology", callback_data:"s2-f5-p1-Psychology"} ],
[{text:"رجوع", callback_data:"backToMain"} ]]  
let suo = {
  'Math':{
      'Prealgebra':'50|67',
      'Geometry':'48|63',
      'Algebra':'7|27',
      'Trigonometry':'49|65',
      'Precalculus':'51|69',
      'Calculus':'8|29',
      'Statistics and Probability':'9|31',
      'Advanced Math':'10|33',
      'Other Math':'12|35'
  },
  'Science':{
      'Physics':'2|2',
      'Chemistry':'6|6',
      'Biology':'13|14',
      'Anatomy and Physiology':'59|207',
      'Earth Sciences':'55|203',
      'Advanced Physics':'56|204',
      'Nursing':'58|206'
  },
  'Engineering':{
      'Computer Science':'3|3',
      'Electrical Engineering':'4|4',
      'Mechanical Engineering':'5|5',
      'Civil Engineering':'14|8',
      'Chemical Engineering':'57|208'
  },
  'Business':{
      'Finance':'18|11',
      'Economics':'19|12',
      'Accounting':'20|37',
      'Operations Management':'53|202'
  },
  'Social Sciences':{
      'Psychology':'39|13'
  }
}
     const TelegramBot = require('node-telegram-bot-api');
const { type } = require('os')
const { count, log } = require('console')
const { promisify } = require('util')


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/!start-auto/ ,async (msg,match)=>{
bot.sendMessage(msg.chat.id , 'تم تفعيل الاختبار التلقائي ') 
autocheckinterval =  setInterval(async () => {
 await autocheck()
}, 60000);
})


bot.onText(/!end-auto/ ,async (msg,match)=>{
  if (spacialusers.includes(msg.from.username)) {

  clearInterval(autocheckinterval)
  bot.sendMessage(msg.chat.id , 'تم الغاء تفعيل الاختبار التلقائي ') 
  } 
})
bot.onText(/!pro7/ ,async (msg,match)=>{
  if (spacialusers.includes(msg.from.username)) {
    const chatId = msg.chat.id;
    dsleep = store.get('sleep')
    currentfree = store.get('postcount')
   // bot.sendMessage(chatId, pro7 )
   // bot.sendMessage(chatId, numOfsess )
    bot.sendMessage(chatId, "minimum sleep:"+dsleep )
    bot.sendMessage(chatId, "current sleep:"+sleep )
    bot.sendMessage(chatId, "current free post : "+currentfree )
  }
})
bot.onText(/تفعيل/ ,async (msg,match)=>{
 
//  bot.sendMessage(msg.chat.id, '@stu_service' , {reply_to_message_id : msg.message_id} )
  
})
bot.onText(/\/statistics(.*)/,async (msg,match)=>{
  const userid = msg.from.id
  const chatId = msg.chat.id;
  data = await statics.get()
await bot.sendMessage(chatId,data,{reply_to_message_id:msg.message_id})
})
  bot.onText(/!add+ ([0-9]*)+ ([0-9]*)/ ,async (msg,aa)=>{
    if (spacialusers.includes(msg.from.username)) {
    const userid = msg.from.id
    const chatId = msg.chat.id;
    await addVIPpostuser(msg.reply_to_message.from.id , parseInt(aa[1]) ,parseInt( aa[2]) -1)             
         
    bot.sendMessage(chatId, ' تم اضافه  ' + parseInt(aa[1]) +' اسئلة خارجيه لمده ' +  parseInt( aa[2]) + ' اسبوع ')
    }
  })
  bot.onText(/!add+ ([0-9]*)/ ,async (msg,aa)=>{
    if (spacialusers.includes(msg.from.username)) {
    const userid = msg.from.id
    const chatId = msg.chat.id;
    await addVIPpostuser(msg.reply_to_message.from.id , parseInt(aa[1]))             
         
    bot.sendMessage(chatId, ' تم اضافه  ' + parseInt(aa[1]) +' اسئلة خارجيه لمده شهر')
    }
  })
  bot.onText(/!free+ ([0-9]*)/ ,async (msg,aa)=>{
    if (spacialusers.includes(msg.from.username)) {
    const userid = msg.from.id
    const chatId = msg.chat.id;
    await store.put("postcount",parseInt(aa[1]))
    await setfreepost(parseInt(aa[1]))         
    bot.sendMessage(chatId, ' تم اضافه  ' + parseInt(aa[1]) +' اسئلة خارجيه مجانيه لجميع الحسابات ' )

  
          }
          
   
  })

  bot.onText(/!addfree+ ([0-9]*)/ ,async (msg,aa)=>{
    if (spacialusers.includes(msg.from.username)) {
    const userid = msg.from.id
    const chatId = msg.chat.id;
    await addfreepost(parseInt(aa[1]))         
    bot.sendMessage(chatId, ' تم اضافه  ' + parseInt(aa[1]) +' اسئلة خارجيه مجانيه لجميع الحسابات ' )

  
          }
          
   
  })
  bot.onText(/!sleep+ ([0-9]*)/ ,async (msg,aa)=>{
    if (spacialusers.includes(msg.from.username)) {
    const userid = msg.from.id
    const chatId = msg.chat.id;
   dsleep =  parseInt(aa[1]) 
   sleep=dsleep   
   store.put('sleep', parseInt(aa[1]))   
    bot.sendMessage(chatId, ' تم اضافه  ' + parseInt(aa[1]) +' ثانيه بين كل عملية نشر ' )

  
          }
   
  })
  bot.onText(/!id+ ([0-9]*)/ ,async (msg,aa)=>{
    if (spacialusers.includes(msg.from.username)) {
    const userid = msg.from.id
    const chatId = msg.chat.id;
           
    bot.sendMessage(chatId, ' جاري البدا ' )
var times = 0
    do {
  await sess.genSessID(d=>{
    bot.sendMessage(chatId, d )
times++
  })
} while (times < parseInt(aa[1]));
  
          }
   
  })


bot.onText(/!restart/ ,async (msg,match)=>{

  const chatId = msg.chat.id;
  if (spacialusers.includes(msg.from.username)) {
    pro7 =0 
          bot.sendMessage(chatId, pro7 )

        }
})
/* bot.onText(/\/show(.*)|\bC\b/,async (msg,match)=>{

   const userid = msg.from.id
   const chatId = msg.chat.id;
 
      await showLinks(msg,userid)

 }) */
bot.onText(/\/check(.*)|\bC\b/,async (msg,match)=>{

 // console.log(msg.chat.id);
  const userid = msg.from.id
  const chatId = msg.chat.id;

 //  let msf = await checkusertime(userid)
 await bot.sendMessage(chatId , 'عذرا اختبار الروابط لايعمل  ', {reply_to_message_id: msg.message_id })
///show لعرض الراوبط الخاصه بك واختبارها بنفسك
/* msf = {check:true}
 if (msf.check === true) {
    await check(msg,userid)

 } else{
   await bot.sendMessage(chatId , "'🕐 wait for "+ msf.watingtime + " min" , {reply_to_message_id: msg.message_id })
 } */
})
bot.onText(/\/delete(.*)/ ,async (msg,match)=>{
  const userid = msg.from.id
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId,'هل تريد حذف جميع الاسئلة من قائمة الانتظار' ,{reply_to_message_id: msg.message_id , reply_markup: {
    inline_keyboard: [
      [{text:"لا", callback_data:"exit"}
      ,
      {text:"نعم", callback_data:"delete"}
      ]
    ]
    }})
})
bot.onText(/\/info(.*)/ ,async (msg,match)=>{
  const userid = msg.from.id
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId,await cpostinfo(userid ,msg.from.first_name+' '+msg.from.last_name )  ,{reply_to_message_id: msg.message_id})
})
bot.onText(/\/autocheck(.*)/ ,async (msg,match)=>{
  const userid = msg.from.id
  const chatId = msg.chat.id;

  if (msg.chat.type === 'private') {
   await adduserchat(userid)

  } else {
    await bot.sendMessage(chatId,'عذرا هذا الامر يعمل في الخاص فقط', {reply_to_message_id: msg.message_id})

  }
})
bot.on("document",async(msg,data)=>{
  if ( msg.document.mime_type === 'image/jpeg'  || msg.document.mime_type === 'image/png') {
   await startpost(msg)
  }
})

bot.on("photo",async(msg)=>{
 await startpost(msg)
}) 
    
    
    
 async function startpost(msg) {
  if ( msg.chat.type=='supergroup'||msg.chat.type=='group' || spacialusers.includes(msg.from.username)) {
 
  const userid = msg.from.id;
  const chatId = msg.chat.id;

  var  mention = "<a href='tg://user?id="+msg.from.id+"'>"+msg.from.first_name+"</a>"



                              
  var cuser =await CheckpostUser(userid)
   
  if (cuser.count > 0) {
      //  isActive = true
      
await bot.sendMessage(chatId,' لديك : ' + cuser.count+ ' سؤال خارجي هل تريد نشر هذا السؤال ؟' ,{reply_to_message_id: msg.message_id , reply_markup: {
inline_keyboard: [
[{text:"لا", callback_data:"exit"}
,
{text:"نعم", callback_data:"post"}
],
/*
[

{text:"بحث السؤال في yandex", callback_data:"search"}]

 ,[{text:"بحث السؤال في chegg ✴️", callback_data:"search2"}] */
]
}})


  }else{
    await bot.sendMessage(chatId,'ليس لديك اسئلة خارجيه كافيه' ,{reply_to_message_id: msg.message_id, reply_markup: {
      inline_keyboard: [
          [{
              text: 'اشتراك',
         
              url: subpost
          }]
      ]
  }})
  }

  



  
     } else {
       bot.sendMessage(msg.chat.id ,'عذرا رفع الاسئلة يعمل في المجموعات فقط تفضل بزيارة هذه المجموعه '+postgroup+' للحصول على تجربه مجانيه لرفع الاسئلة')
     }
  

 }


          async function start(filename,chatId,msg ,userid,finalselector , msgid , qtext,department ,subject) {
            
           var cookies 
           var imgsrc
            console.log(0000000);
            await rmpostcount(msg.from.id)
            await statics.addTototalpost()
            var startdate = await new Date().getTime()
//await procres(0,chatId,msgid)
            let postus =await CheckpostUser(userid)

      try {
  
 await gmc.foo("../"+packagename+"/"+filename,qtext.length===0?"i need the answer quickly":qtext,subject ,"Question in "+department,async (d)=>{
   log(d)
   if (d.url ==="err") {
try {
 await bot.sendMessage(chatId,' @stu_service حدث خطا في النشر اعد ارسال السؤال' , {reply_to_message_id: msg.message_id})

} catch (error) {
 await bot.sendMessage(chatId,' @stu_service  حدث خطا في النشر اعد ارسال السؤال تم حذف الرسالة' )

}
await ADDpostcount(msg.from.id,1)
   


   } else {
    chegglink = d.url
    var enddate = await new Date().getTime()
    /* var posttime = new Storage('posttime')
    var posttimearray = await posttime.get('posttime')
    posttimearray.push(parseInt(((enddate-startdate)/1000),10))
    await posttime.put('posttime',posttimearray) */
    dsleep = store.get('sleep')
    if ( parseInt(((enddate-startdate)/1000),10) > dsleep) {
      sleep = parseInt(((enddate-startdate)/1000),10)
    } else{
      sleep= dsleep
    }
    await bot.editMessageText('✅ تم النشر 100% '+'\n'+getemo()+' '+ department+'\n'+ '🕐 : '+parseInt(((enddate-startdate)/1000),10)+' s' , {
      chat_id : chatId ,
      message_id : msgid ,disable_web_page_preview:true  
    })

    await bot.sendMessage(chatId,"Successfully Posted in " + department +'\n'+ "Time ⏱: "+parseInt(((enddate-startdate)/1000),10)+' s' +'\n'+"Remaining : 🔓"+ postus.count +"Post" + '🔓'+'\n'+"Link : ➡️ "+chegglink + "\n\n  ✅ JION : "+chat4,{reply_to_message_id: msg.message_id ,disable_web_page_preview:true })

   
    
   https://www.chegg.com/homework-help/questions-and-answers/need-answer-quickly-q74970780
    
    
    
   
   
   
    await statics.addTosuccesspost()
await AddLink(msg.from.id,chegglink)
   }


})
 } catch (error) {
   await statics.addTofailpost()
   console.log(error);
try {
  await bot.sendMessage(chatId,' حدث خطا في النشر اعد ارسال السؤال' , {reply_to_message_id: msg.message_id})

} catch (error) {
  await bot.sendMessage(chatId,' حدث خطا في النشر اعد ارسال السؤال تم حذف الرسالة' )

}
await ADDpostcount(msg.from.id,1)
}

     }

     async function updateLink(id , links ) {
      var fss =  require("fs")
      let ss = await CheckpostUser(id)
      ss.links = links
    await fss.writeFileSync('postuser/'+id+'.json', JSON.stringify(ss))
    
    }
    
    
     async function AddLink(id , link ) {

      var fss =  require("fs")
      let ss = await CheckpostUser(id)

ss.links.push(link)
await fss.writeFileSync('postuser/'+id+'.json', JSON.stringify(ss))
    }


    async function getAlllinks(id){
      var fss =  require("fs")
      let ss = await CheckpostUser(id)
      return ss.links

    }
    async function rmpostcount(userid) {
      var fss =  require("fs")
      let ss = await CheckpostUser(userid)
      ss.count = ss.count-1
     
     await fss.writeFileSync('postuser/'+userid+'.json', JSON.stringify(ss))
     }
     async function ADDpostcount(userid , postnum) {
      var fss =  require("fs")
      let ss = await CheckpostUser(userid)
      ss.count = ss.count+postnum
     
     await fss.writeFileSync('postuser/'+userid+'.json', JSON.stringify(ss))
     }
     async function addNpostuser (id , count){
      var fss = await require("fs") 
   
      await fss.writeFileSync('postuser/'+id+'.json', JSON.stringify({count : count , type : 'N' , links : []}))
    }
    async function addVIPpostuser (id , count , w){
      var fss = await require("fs")
      if(await fss.existsSync('postuser/'+id+'.json')){
        usersdata = await fss.readFileSync('postuser/'+id+'.json')
        usersList = await JSON.parse(usersdata)
        usersList.date =new Date().getTime() + (w?w * 604800000:2025000000)
        usersList.count =  count
        usersList.type = 'VIP'
        }else{
usersList = {count : count,type : 'VIP', date :new Date().getTime() + (w?w * 604800000:2025000000), links:[]}
        }
    
      await fss.writeFileSync('postuser/'+id+'.json', JSON.stringify(usersList))
    }
  async  function cpostinfo(id,name) {
      name = name.replace('undefined','')
    nn =await CheckpostUser(id)

    mm = new Date().getTime() - nn.date
    if (nn.type === 'VIP') {
mydate = dhm(604800000-mm )
msg = "\r\n" +' نوع الحساب : VIP '+ "\r\n" +'المتبقي من الاشتراك : '+ mydate + "\r\n" +' المتبقي من الاسئلة الخارجيه : ' + nn.count
    }else if(nn.type === 'N'){
      msg = "\r\n" +' نوع الحساب : free '+ "\r\n" +' المتبقي من الاسئلة الخارجيه : ' + nn.count
    }

    return msg
   }

 async  function setfreepost(cco) {
    var filelist = new Array()
    var fss = await require("fs")
    filelist = await fss.readdirSync('postuser/')
 //   console.log(filelist);
    for (let i = 0; i < filelist.length; i++) {
cuser= await CheckpostUser(parseInt( filelist[i],10))
console.log(cuser.type);
      if (cuser.type!='VIP' && cuser.links.length ===0) {
       fss.unlinkSync('postuser/'+filelist[i])
       console.log('delete' , filelist[i]);
 }
    }
  store.put('postcount',cco)
   }
   async  function addfreepost(postnum) {
    var filelist = new Array()
    var fss = await require("fs")
    filelist = await fss.readdirSync('postuser/')
    for (let i = 0; i < filelist.length; i++) {
      usersdata = await fss.readFileSync( 'postuser/'+parseInt( filelist[i],10)+'.json')
      usersList = await JSON.parse(usersdata)
      usersList.count = usersList.count+postnum
await fss.writeFileSync('postuser/'+parseInt( filelist[i],10)+'.json', JSON.stringify(usersList))
console.log(usersList.count);
    }

   }

   async function   CheckpostUser(userid){
    postcount = store.get('postcount') 
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
      addNpostuser(userid ,  postcount)
      return {count:postcount , type:'N' ,links:[]}
   }
  

     }
     async function showLinks(msg,userid) {
      var links = await getAlllinks(userid)
      var msgid
      if (links.length>0) {
     
  let  linksstr =''
           
        
             for (let ii = 0; ii < links.length; ii++) {
             linksstr = linksstr + links[ii] + "\r\n" + "================="+ "\r\n"
             }
             await bot.sendMessage(msg.chat.id ,' عدد الاسئلة : ' + links.length + "\r\n" + linksstr+ "\r\n"  ,{reply_to_message_id: msg.message_id ,disable_web_page_preview:true} )
           
    //await  browser2.close()
  }else{
        await bot.sendMessage( msg.chat.id, ' ليس لديك اي سؤال لاختباره' ,{reply_to_message_id: msg.message_id} )
    
      }
     }


    function adduserchat(userid ) {

      var userchat = new Storage('userchat')     
    mm = userchat.get('userchat')
    
    if (mm.includes(userid)) {
      bot.sendMessage(userid,'هذا الخيار مفعل مسبقا لحسابك')
    }else{
    
         mm.push(userid)
         userchat.put('userchat',mm)
          bot.sendMessage(userid,'تم تفعيل الاختبار التلقائي لحسابك سوف يتم ارسال رابط السؤال في حال تم  حل السؤال')
        }
    }







     bot.on("callback_query",async function nameOfTheFunction(callbackQuery) {
        console.log(callbackQuery.data);
        if (callbackQuery.message.reply_to_message.from.id === callbackQuery.from.id) {

         try {
            console.log('callbackQuery.data = ',callbackQuery.data);
            if (callbackQuery.data.startsWith('s-q')) {
              ss = callbackQuery.data.slice(1, callbackQuery.data.length)
           //  await Start2('https://www.chegg.com/homework-help/questions-and-answers/'+ ss ,  callbackQuery.message.chat.id)
            
            }
            if (callbackQuery.data === "search2") {
              
              await bot.editMessageText('جاري البحث .....' , {
                chat_id : callbackQuery.message.chat.id ,
                message_id : callbackQuery.message.message_id ,
                reply_markup : {}
              })
              var filename2
                await bot.downloadFile(callbackQuery.message.reply_to_message.document.file_id,'C:/Users/Administrator/Desktop/chegg1/tele').then(d=>{filename2 =  d})  
                        console.log(filename2);
                        var fs = await require("fs")  
                        var stats = await fs.statSync(filename2)
                   if (stats.size < 1500000) {
              var googlelink =  await startsearchOnChegg(filename2)
                                  
              await bot.editMessageText('تم البحث', {
                chat_id : callbackQuery.message.chat.id ,
                message_id : callbackQuery.message.message_id ,
                reply_markup : {inline_keyboard:[[{
                text: 'نشر السؤال في الموقع',
                callback_data: 'post'
              },{
                text: 'مشاهدة النتائج',
                url: googlelink
              }],[{text:"الغاء", callback_data:"exit"} ]
              
              ]}
              })
              
              } else {
                      await bot.editMessageText('عذرا حجم الملف اكبر من 1.5 ميكا لايمكن نشره ' , {
                        chat_id : callbackQuery.message.chat.id ,
                        message_id : callbackQuery.message.message_id ,
                        reply_markup : {}
                      })
                     }
                          }
            if (callbackQuery.data === "search") {
              
await bot.editMessageText('جاري البحث .....' , {
  chat_id : callbackQuery.message.chat.id ,
  message_id : callbackQuery.message.message_id ,
  reply_markup : {}
})
var filename2
  await bot.downloadFile(callbackQuery.message.reply_to_message.document.file_id,'C:/Users/Administrator/Desktop/chegg1/tele').then(d=>{filename2 =  d})  
          console.log(filename2);
          var fs = await require("fs")  
          var stats = await fs.statSync(filename2)
     if (stats.size < 1500000) {
var googlelink =  await startsearch(filename2)
                    
await bot.editMessageText('تم البحث', {
  chat_id : callbackQuery.message.chat.id ,
  message_id : callbackQuery.message.message_id ,
  reply_markup : {inline_keyboard:[[{
  text: 'نشر السؤال في الموقع',
  callback_data: 'post'
},{
  text: 'مشاهدة النتائج',
  url: googlelink
}],[{text:"الغاء", callback_data:"exit"} ]

]}
})

} else {
        await bot.editMessageText('عذرا حجم الملف اكبر من 1.5 ميكا لايمكن نشره ' , {
          chat_id : callbackQuery.message.chat.id ,
          message_id : callbackQuery.message.message_id ,
          reply_markup : {}
        })
       }
            }
            if (callbackQuery.data === "delete") {
              await updateLink(callbackQuery.message.reply_to_message.from.id,[])
              await bot.editMessageText('تم حذف جميع الاسئله من  قائمة الانتظار' , {
                chat_id : callbackQuery.message.chat.id ,
                message_id : callbackQuery.message.message_id , 
                 reply_markup: {
                }})
            }
   if(callbackQuery.data === "post"){
        await bot.editMessageText('اختر القسم' , {
          chat_id : callbackQuery.message.chat.id ,
          message_id : callbackQuery.message.message_id , 
           reply_markup: {
          inline_keyboard: mainlist  
        
          }})
      }else if(callbackQuery.data === "exit"){
await bot.deleteMessage(callbackQuery.message.chat.id,callbackQuery.message.message_id)
      }else if(callbackQuery.data.startsWith('s1-')){
var list3 = getChosselist(callbackQuery.data)
await bot.editMessageText('اختر القسم' , {
  chat_id : callbackQuery.message.chat.id ,
  message_id : callbackQuery.message.message_id , 
   reply_markup: {
  inline_keyboard:list3 

  }})
      }else if(callbackQuery.data.startsWith('s2-')){
        await bot.editMessageText('سيتم النشر في '+callbackQuery.data.slice(9,callbackQuery.data.length) , {
          chat_id : callbackQuery.message.chat.id ,
          message_id : callbackQuery.message.message_id , 
           reply_markup: {
          inline_keyboard:[[{text:"رجوع", callback_data:"backToMain"} ,
          {text:"تاكيد", callback_data:"submit-"+callbackQuery.data.slice(3,callbackQuery.data.length)}]]
        
          }})
              }else if(callbackQuery.data === "backToMain"){
                await bot.editMessageText('اختر القسم' , {
                  chat_id : callbackQuery.message.chat.id ,
                  message_id : callbackQuery.message.message_id , 
                   reply_markup: {
                  inline_keyboard: mainlist  
                
                  }})                      }
                  
                  else if(callbackQuery.data.startsWith('submit-')){
let mm1=suo[mainlist[callbackQuery.data.slice(8,9)-1][0].text][callbackQuery.data.slice(13,callbackQuery.data.length)]
                 
let form = callbackQuery.data.slice(8,9)
let pp = parseInt( callbackQuery.data.slice(11,13),10) + 1
 console.log(form , pp)
let finalselector = 'div.classifier-container>div>form:nth-child('+form+')>div>p:nth-child('+pp+') > a'
console.log(finalselector);
//isActive = true
console.log(mm1);


await bot.editMessageText('تم اختيار القسم انتضر لحضة' , {
  chat_id : callbackQuery.message.chat.id ,
  message_id : callbackQuery.message.message_id ,
  reply_markup : {}
})

if (!new RegExp(sptialwords.join("|")).test(callbackQuery.message.reply_to_message.caption)) {
  var filename
  await bot.downloadFile(callbackQuery.message.reply_to_message.photo?callbackQuery.message.reply_to_message.photo[1].file_id:callbackQuery.message.reply_to_message.document.file_id,'tele').then(d=>{filename =  d})  
          console.log(filename);
          var fs = await require("fs")  
          var stats = await fs.statSync(filename)
     if (stats.size < 1500000) {

        //  await start(filename,callbackQuery.message.chat.id,callbackQuery.message.reply_to_message , callbackQuery.message.reply_to_message.from.id,finalselector ,callbackQuery.message.message_id , callbackQuery.message.reply_to_message.caption?callbackQuery.message.reply_to_message.caption:'' , callbackQuery.data.slice(13,callbackQuery.data.length))

      /*
*/
///////////////////////////////////////////
      if (new Date().getTime() > lastTime) {
          await start(filename,callbackQuery.message.chat.id,callbackQuery.message.reply_to_message , callbackQuery.message.reply_to_message.from.id,finalselector ,callbackQuery.message.message_id , callbackQuery.message.reply_to_message.caption?callbackQuery.message.reply_to_message.caption:'' , callbackQuery.data.slice(13,callbackQuery.data.length),mm1)
        lastTime = new Date().getTime() + sleep*1000
      }else{
        
        await bot.editMessageText("سيتم نشر السؤال بعد  "+ (lastTime - new Date().getTime())/1000 +" ثانيه ⏰"  , {
          chat_id : callbackQuery.message.chat.id ,
  message_id : callbackQuery.message.message_id ,
  reply_markup : {}
})
        //bot.sendMessage(msg.chat.id,"سيتم النشر في "+  new Date(lastTime).toTimeString(),{reply_to_message_id: msg.message_id}) 
      d = new Date(lastTime)
      lastTime = lastTime + sleep*1000
      str = d.getSeconds()+' '+d.getMinutes()+' '+d.getHours()+' '+ d.getUTCDate()+' '+d.getMonth()
       job = new CronJob(d,async function() {
          await start(filename,callbackQuery.message.chat.id,callbackQuery.message.reply_to_message , callbackQuery.message.reply_to_message.from.id,finalselector ,callbackQuery.message.message_id , callbackQuery.message.reply_to_message.caption?callbackQuery.message.reply_to_message.caption:'' , callbackQuery.data.slice(13,callbackQuery.data.length),mm1)

      }
       ,null,true )
      }
//////////////////////////////////////////////////

       } else {
        await bot.editMessageText('عذرا حجم الملف اكبر من 1.5 ميكا لايمكن نشره ' , {
          chat_id : callbackQuery.message.chat.id ,
          message_id : callbackQuery.message.message_id ,
          reply_markup : {}
        })
       }
} else {
  await bot.editMessageText('عذرا لقد كتبت احد الكلمات الغير مقبوله في التعليق والتي قد تكون احدى هذه الكلمات  '+sptialwords.toString() , {
    chat_id : callbackQuery.message.chat.id ,
    message_id : callbackQuery.message.message_id ,
    reply_markup : {}
  })
}
    
}
             
      } catch (error) {
         pro7--
     //    await clearInterval(set)
        console.log(error);
      try {
         await browser.close()
      } catch (error) {
        
      }
    try {
            await bot.sendMessage(callbackQuery.message.chat.id,'حدث خطا في النشر اعد ارسال السؤال' , {reply_to_message_id: callbackQuery.message.message_id})

    } catch (error) {
      await bot.sendMessage(callbackQuery.message.chat.id,'حدث خطا في النشر اعد ارسال السؤال' )

    }
      await ADDpostcount(callbackQuery.message.reply_to_message.from.id,1)
      }
     
      
     }else{
   

     }
    
  
             
              })
         
function getChosselist(data) {
  var list
  switch (data) {
    case "s1-Math":list=Mathlist
      
      break;
      case "s1-Science":list=Sciencelist
      
      break;
      case "s1-Engineering":list=Engineeringlist
      
        break;
        case "s1-Business":list=Businesslist
      
          break;
          case "s1-Social Sciences":list=Sociallist
      
            break;
    default:
      break;
  }
  return list
}
  function makeid2(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result  +'@gmail.com';
    }
  
/////////////////////////////////////////////////////////////////////////////////////////////////////

  
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



//VIP-user
//N-user
//A-user
async function adduser (username , type){
  var fss = await require("fs")
  console.log(username);
var usersList = []
 usersdata = await fss.readFileSync(type +'.json')
usersList = await JSON.parse(usersdata)
ii = await usersList.findIndex(d=> {return d.id === username})
console.log(ii);
if (ii > -1) {
  usersList[ii].date =new Date().getTime()
  usersList[ii].count = 35

} else {
  usersList.push({id:username , date:new Date().getTime(), count : 35}) 
}

await fss.writeFileSync(type +'.json', JSON.stringify(usersList))

}


      function   CheckUser(userid){
      var fss =  require("fs")

      var A_usersList = []
      var N_usersList = []
      var VIP_usersList = []
       usersdata =  fss.readFileSync('A-user.json')
       A_usersList =  JSON.parse(usersdata)
       usersdata =  fss.readFileSync('N-user.json')
       N_usersList =  JSON.parse(usersdata)
       usersdata =  fss.readFileSync('VIP-user.json')
       VIP_usersList =  JSON.parse(usersdata)
        IsVIP = VIP_usersList.find(d=>{return d.id === userid.toString()})
        ISnormal = N_usersList.find(d=>{return d.id === userid})
/*   console.log(IsVIP);
console.log(ISnormal); */
      if (IsVIP) {
        mm = new Date().getTime() - IsVIP.date
        cc = IsVIP.count
        console.log(IsVIP);
        if (mm < 604800000 && cc > 0 ) {
          return {id : IsVIP.id , date : IsVIP.date , type: 'VIP' , count : IsVIP.count}
        } else {
          if (ISnormal) {
            return {id : ISnormal.id , date : ISnormal.date , type: 'N'}
          }else{
            return {id : userid , date : new Date().getTime() , type: 'New'}
          }
        }
      }else  {
        if (ISnormal) {
          return {id : ISnormal.id , date : ISnormal.date , type: 'N'}
        }else{
          console.log('new');
          return {id : userid , date : new Date().getTime() , type: 'New'}
        }
      }

     }

     
     function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }



  async function rmcount(userid) {
    var fss =  require("fs")
    var VIP_usersList = []
    usersdata = await fss.readFileSync('VIP-user.json')
    VIP_usersList = await JSON.parse(usersdata)
   ii = await VIP_usersList.findIndex(d=> {return d.id === userid.toString()})

   VIP_usersList[ii].count = VIP_usersList[ii].count-1
   
   await fss.writeFileSync('VIP-user.json', JSON.stringify(VIP_usersList))
   }


   function dhm(t){
     var cd = 24 * 60 * 60 * 1000,
         ch = 60 * 60 * 1000,
         d = Math.floor(t / cd),
         h = Math.floor( (t - d * cd) / ch),
         m = Math.round( (t - d * cd - h * ch) / 60000),
         pad = function(n){ return n < 10 ? '0' + n : n; };
   if( m === 60 ){
     h++;
     m = 0;
   }
   if( h === 24 ){
     d++;
     h = 0;
   }
   return [d + 'day', pad(h) +'h ', pad(m)+'m'].join(':');
 }
 function getemo() {
  var emo = '😁 😊 🙂 🙃 😉 😌 🤨 🤓 🧐 😋 😏 😒 🤩 😩 😫 😖 😣 ☹️ 🙁 😕 😟 😢 😠 😡 🤭 🤔 🤗 🤫 😶 😐 😑 😬 🙄 😦 😴 🤤 🤠 👻 👧 🧒 👦 👩 🧑 👨 👩‍👱‍♀ 👱 👱‍♂ 👩‍🧓 👲 👳‍♀ 👳 👳‍♂ 🧕 👮‍♀ 👮‍♀ 👮 👮‍♂ 👷‍♀ 👷 👷‍♂ 💂‍♀ 💂 💂‍♂ 🕵‍♀ 🕵 🕵‍♂ 👩‍⚕ 🧑‍⚕ 👨‍⚕ 👩‍🌾 🧑‍🌾 👨‍🌾 👩‍🍳 🧑‍🍳 👨‍🍳 👩‍🎓 🧑‍🎓 👨‍🎓 👩‍🎤 🧑‍🎤 👨‍🎤 👩‍🏫 🧑‍🏫 👨‍🏫 👩‍🏭 🏭 👨‍🏭 👩‍💻 🧑‍💻 👨‍💻 👩‍💼 🧑‍💼 👨‍💼 👩‍🔧 🧑‍🔧 👨‍🔧 👩‍🔬 🧑‍🔬 👨‍🔬 👩‍🎨 🧑‍🎨 👨‍🎨 👩‍🚒 🧑‍🚒 👨‍🚒 👩‍✈️ 🧑‍✈️ 👨‍✈️ 👩‍🚀 🧑‍🚀 👨‍🚀 👩‍⚖ 🧑‍⚖ 👨‍⚖ 🤵 ☘ 🎋 🌻 🌼 🌸 🌺 🥀 🌹 🌷 💐 🌚 🌝 🌞 🌛 🌜 🌔 🌓 🌗 🌕 🌎 🌍 🌏 🌑 🔥 💥 🌟 💫 ⭐️ ✨ ⚡️ 🌈 ☀️ 🥇 🥉 🏅 🎖 🏵 📱 💻 🖥 🎁 🎈 💌 📒 📕 📗 📘 📙 📚 📊 🗂 🗄 📋 📝 ✏️ 🖌 📐 📏 🖇 📎 🔗 📔 🗃 ❤️ 🧡 💛 💙 💜 🖤 💔 ❣ 💕 💞 💓 💗 💖 💘 💝'   
  emojis =  emo.split(' ')
return emojis[Math.floor(Math.random() * emojis.length)];
}
