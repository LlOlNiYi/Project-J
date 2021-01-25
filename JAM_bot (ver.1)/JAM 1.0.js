/*상수 선언*/
const SdCard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장메모리 상위 경로 가져오기.
const AI = {}; //AI 관련 함수들이 들어갈 객체
const InoutPut = {}; //저장 및 읽기 관련 함수들이 들어갈 객체.
const PreMsg = {}; //도배 방지용 객체
const Feel = {};
/*Feel에 포함된 함수들 정의*/
Feel.happy = 70
/*AI에 포함된 함수들 정의*/
AI.say = function(msg, replier)
