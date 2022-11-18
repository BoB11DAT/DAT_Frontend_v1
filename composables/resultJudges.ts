export const getResultJudges = () => {
  return [
    {
      number: 1,
      content:
        "분석 대상 PC에서 사용자 계정이 마지막으로 삭제된 시각은? (YYYY-MM-DD hh:mm:ss)",
      category: 0,
      url: "https://doc.datg.xyz/ko/Behavior/Windows%EA%B3%84%EC%A0%95/%EC%83%9D%EC%84%B1%EB%B0%8F%EC%82%AD%EC%A0%9C",
      currect: 1,
    },
    {
      number: 2,
      content: "사용자가 마지막으로 연결한 USB의 파일 시스템은?",
      category: 0,
      url: "https://doc.datg.xyz/ko/Behavior/%EC%99%B8%EB%B6%80%EC%A0%80%EC%9E%A5%EC%9E%A5%EC%B9%98/USB/USB_connect",
      currect: 0,
    },
    {
      number: 3,
      content:
        "분석 대상 PC에서 악성 파일 다운로드 행위 관련 Powershell 이벤트 로그가 마지막으로 기록된 시각은? (YYYY-MM-DD hh:mm:ss)",
      category: 0,
      url: "https://doc.datg.xyz/ko/Artifact/Powershell/Basic",
      currect: 1,
    },
    {
      number: 4,
      content: "가장 처음 원격 데스크톱을 이용해 로그온 한 사용자의 IP는?",
      category: 0,
      url: "https://doc.datg.xyz/ko/Behavior/%EC%9B%90%EA%B2%A9%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1%EC%97%B0%EA%B2%B0/%EC%9B%90%EA%B2%A9%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1%EC%97%B0%EA%B2%B0%EA%B4%80%EB%A0%A8%ED%9D%94%EC%A0%81",
      currect: 1,
    },
    {
      number: 5,
      content:
        "Windows Defender에서 Trojan:Win32/Qakbot.GU!MTB 유형으로 탐지한 파일경로는 무엇인가?(전체경로 기재)",
      category: 0,
      url: "https://doc.datg.xyz/ko/Artifact/Evtx",
      currect: 0,
    },
    {
      number: 51,
      content:
        'Damien Kang이 "https://www.kitribob.kr" 사이트를 방문한 횟수는?(숫자만 기재)',
      category: 1,
      url: "https://doc.datg.xyz/ko/Web/Chrome",
      currect: 1,
    },
    {
      number: 52,
      content:
        'Damien Kang이 "https://e105.duckdns.org/sharing/1pgmXXjFO" 경로에서 다운받은 파일의 저장 경로는?(전체경로 기재)',
      category: 1,
      url: "https://doc.datg.xyz/ko/Web/Chrome",
      currect: 0,
    },
    {
      number: 53,
      content:
        "Chris Lee가 “레이버훗”을 처음 검색한 시각은?(YYYY-MM-DD hh:mm:ss)",
      category: 1,
      url: "https://doc.datg.xyz/ko/Web/Chrome",
      currect: 1,
    },
    {
      number: 54,
      content:
        'Damien Kang이 "https://www.reddit.com/" 사이트에서 사용한 계정의 ID는?',
      category: 1,
      url: "https://doc.datg.xyz/ko/Web/Chrome",
      currect: 0,
    },
  ];
};
