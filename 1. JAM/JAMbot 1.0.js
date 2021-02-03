/*상수 선언*/
const JAM = {};
const Feel = {happy : 70, sad : 30, angry : 10};
const Data = {};

/*JAM 객체에 포함된 함수 정의*/
JAM.Say = function (msg, replier) { //채팅 전송 관련 함수
  replier.reply(JAM.Face + "{ " +msg + " )"); //표정과 메세지를 보낸다
};
JAM.Face = function () { //표정 바꾸기
  if (Feel.now == happy){ //좋아
    JAM.Face == "(๑ᴖ◡ᴖ๑)";
  }
  if (Feel.now == sad){ //슬퍼
    JAM.Face == "(๑8^8๑)";
  }
  if (Feel.now == angry){ //화나
    JAM.Face == "(｀3´)";
  }
  };
  
  /*Data 객체에 포함된 함수 정의*/
  Data.Prechat = {}; //이전 메세지
  Data.Presender = {}; //이전 전송자
  Data.Version = "1.0"; //버전
  Data.Actived = true; //작동여부
  Data.Happy = ["사랑","감사","고맙","행복","좋아"];
  Data.Sad = ["속상","슬프","슬픔","아픔","아파"];
  Data.Angry = ["화나","화남","짜증","개같","빡치","빡침"];
                                                    
  /*Feel 객체에 포함된 함수 정의*/
  Feel.Now = Object.keys(Feel).sort((a, b)=>Feel[b]-Feel[a])[0];
  
//전역에서 실행할 것들
function response (room, msg, sender, isGroupChat, replier, ImageDB) {
  msg = msg.trim();
  room = room.trim();
  sender = sender.trim();
  Feel.Now;
  if (Data.Happy.indexOf(msg) != -1) { //행복하게 하는 말이 들어있다면
  Feel[0]+10;
  replier.reply(Object.keys(Feel)+Object.value(Feel));
  }
  if(msg=="nowfeel")
  {
    replier.reply(Feel.Now);
  }
}
