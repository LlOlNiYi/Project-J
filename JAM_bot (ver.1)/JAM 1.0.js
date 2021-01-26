/*상수 선언*/
const SdCard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장메모리 상위 경로 가져오기.
const AI = {}; //AI 관련 함수들이 들어갈 객체
const InoutPut = {}; //저장 및 읽기 관련 함수들이 들어갈 객체.
const PreMsg = {}; //도배 방지용 객체.
const Feel = {happy:70,sad:30,angry:10}; //감정 객체.
const Info = {}; //무언가의 정보를 설명하는 객체.
/*Feel에 포함된 함수들과 Feel의 정보 정의*/
Info.Feel = Object.keys(Feel).sort((a, b)=>Feel[b]-Feel[a]);
if (Info.Feel[0] == happy) Info.Feel = happy;
if (Info.Feel[0] == sad) Info.Feel = sad;
if (Info.Feel[0] == angry) Info.feel = angry;
/*AI에 포함된 함수들 정의*/
AI.say = function(msg, replier)
