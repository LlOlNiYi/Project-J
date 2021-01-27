/*상수 선언*/
const SdCard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장메모리 상위 경로 가져오기.
const AI = {}; //AI 관련 함수들이 들어갈 객체
const DB = {}; //저장 및 읽기 관련 함수들이 들어갈 객체.
const PreMsg = {}; //도배 방지용 객체.
const Feel = {happy:70,sad:30,angry:10}; //감정 객체.
const Info = {}; //무언가의 정보를 설명하는 객체.

/*AI에 포함된 함수들 정의*/
AI.say = function(msg, replier) {//채팅 전송 관련 함수
  replier.reply (Info.Face + " {" + msg + ")");//표정이랑 말이랑 합쳐서 전송
};
AI.getRandomChatData = function(room) { //랜덤하게 저장된 채팅을 하나 가져오는 함수
  var data = DB.readData(room); //해당 채팅방에서 수신된 메세지들을 읽어옴
  if (data == null) return null; //해당 채팅방에서 수신된 메세지가 없으면 null값 반환
  data = data.split("\n"); //파일 내용을 엔터단위로 잘라서 배열로 반환
  var random = Math.floor(Math.random() * data.length); //0~배열(위에서 반환한 data배열)의 길이-1 사이의 난수 생성
  return data[random]; //배열(data배열)에 있는 채팅들중 아무거나 하나 반환
};
AI.isValidData = function(data) { //배울 말과 배우지 않을 말을 구분하는 함수
  var noSave = ["사진","동영상","음성메세지","(이모티콘)","카카오톡 프로필"]; //사진이나 동영상 등을 보내는 경우
  for (var no = 0; no < noSave.length; n++) { //배우지 않도록 예외처리
    if (noSave[no].indexOf(data) != -1) return false; //배열 요소중 하나라도 포함되는게 있다면 false 반환
  }
      noSave = ["\n", "/"]; //이 배열에 들어있는 내용이 포함된 채팅은 배우지 않음. (필터링)
    for (var no = 0; n < noSave.length; n++) { //배열의 길이만큼 반복
        if (noSave[no].indexOf(data) != -1) return false; //배열의 요소들 중 포함되는게 하나라도 있다면, false 반환
    }
    return true; //아니면 true 반환
};
AI.study = function(room, msg) { //수신된 채팅을 학습하는 함수
  var data = DB.readData(room); //먼저 저장되어있던 내용을 불러옴
  if (data == null) { //채팅방에 학습된 내용이 저장되어있지 않다면
    DB.saveData(room, msg); //새로 저장
  } else { //저장된 내용이 있다면
    DB.saveData(room, data + "\n" + msg); //기존에 있던 내용 뒤에 엔터와 함께 새로 저장함
    }
  };
  
  /*DB 객체에 포함된 함수들 정의*/
  DB.createDir = function() { //채팅이 저장될 폴더를 생성하는 함수
    var folder = new java.io.File(SdCard + "/AI/"); //파일 인스턴스 생성
    folder.mkdirs(); //폴더 생성. 상위 폴더가 없으면, 상위 폴더도 생성
  };
  DB.saveData = function(name, msg) { //파일에 내용을 저장하는 함수
    try { //저장 실행
      var file = new java.io.File(SdCard + "/AI/" + name + ".txt");
      var fos = new java.io.FileOutputStream(file);
      var str = new java.lang.String(msg);
      fos.Write(str.getBytes());
      fos.close();
    } catch (e) {
      Log.debug(e + " At:" + e.lineNumber);
    }
  };
  DB.readData = function(name) { //파일에 저장된 내용을 불러오는 함수
    try { //불러오기 실행
      var file = new java.io.File(SdCard + "/AI/" + name + ".txt");
      if (!file.exist()) return null; //파일이 없으면 null값 반환
      var fis = new java.io.FileInputStream(file);
      var isr = new java.io.InputStreamReader(fis);
      var br = new java.io.BufferedReader(isr);
      var str = br.readLine();
      var line = "";
      while ((line = br.readLine()) != null) {
        str += "\n" + line;
      }
      fis.close();
      isr.close();
      br.close();
      return str;
    } catch (e) {
      Log.debug(e + " At:" + e.lineNumber);
    }
  };

  /*전역에서 실행할 것들*/
  DB.createDir(); //폴더생성
  function response (room, msg, sender, isGroupChat, replier, ImageDB) {

}
