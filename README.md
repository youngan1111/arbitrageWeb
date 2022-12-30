# Project #1 Wiki

### 1. 자신의 schema 디자인

![Untitled.png](pictures/Untitled.png)

class 테이블의 class_no는 안쓰인다. class_id는 unique하게 class를 구분하고 class_no는 아무런 의미 없다.

1. UI 디자인

저는 이번 프로젝트에서 material ui라는 react 기반 UI 라이브러리를 사용했습니다.

[MUI: The React component library you always wanted](https://mui.com/)

![스크린샷 2022-11-15 오후 9.30.37.png](pictures/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-11-15_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.30.37.png)

mui에서 제공하는 테이블을 import해 사용하면 자동으로 mui의 테이블 ui를 사용할 수 있습니다.

또한 전체적인 UI는 한양대 수강신청 사이트의 UI를 참고해서 만들었습니다.

![Untitled](pictures/Untitled%201.png)

![Untitled](pictures/Untitled%202.png)

맨 위 헤더부분에 로그인 버튼이 있고 하단에 탭바를 만들어 여러 페이지를 접속할 수 있게했습니다.

1. 본인 Schema에 맞는 Input Data Set 설명

admin, schedule, desired_schedule을 제외한 테이블은 과제와 함께 주어진 csv를 그대로 사용했습니다.

admin 테이블은 관리자 로그인을 위한 것입니다. 관리자의 id, pw ,name 3가지를 저장합니다.

schedule 테이블은 학생들의 수강신청을 저장합니다. student_id와 학생이 신청한 과목과 일치하는 course_id, class_id 등이 저장됩니다. 또한 재수강 여부를 저장하기위해 re_register attribute가 존재합니다.

학생 로그인은 기존 student 테이블을 사용합니다.

1. 구현된 코드 설명

저는 이번 프로젝트를 React를 사용하는 Next.js 프레임워크를 사용했습니다.

Next.js는 React + router + backend server 를 하나의 프로그램에서 구현할 수 있게 도와줍니다. Next.js에는 pages 폴더에 파일을 만들면 자동으로 라우팅 기능을 구현해줍니다. 그래서 pages폴더안에 hello.js 파일을 만들면 웹에서 [localhost:3000/hello](http://localhost:3000/hello) 로 접속하면 hello.js 파일을 읽을 수 있습니다.

Next.js는 또한 백엔드 서버 역할도 합니다. pages 폴더안에 api 폴더가 있는데 폴더 내부에 request handler를 만들어 둔다면 /api/test?123 와 같은 request를 바로 처리할 수 있습니다.

pages 폴더 내부 파일 설명

- index.js - [http://localhost:3000/](http://localhost:3000/) 첫 접속화면 한양대 로고가 보인다.
- addNewClass.js - [http://localhost:3000/addNewClass](http://localhost:3000/addNewClass)
  관리자 페이지로 수업을 개설할 수 있다.
- addNewCourse.js
  관리자 페이지로 과목을 개설할 수 있다.
- changeCatalog.js
  관리자가 과목 조회 하고 과목 정보를 변경 삭제할 수 있는 페이지이다.
- changeStudentInfo.js
  관리자가 학생을 조회 하고 학생 정보를 변경할 수 있는 페이지이다.
- courseCatalog.js
  수강편람 페이지이다. 로그인하지 않아도 수강편람을 확인할 수 있지만 희망,수강신청은 할 수 없다.
  학생 로그인하면 희망,수강 신청이 가능하다.
  관리자 로그인시 희망,수강 신청이 불가하다.
- desiredCourse.js
  학생 로그인시 자신이 신청한 희망강좌를 볼 수 있다. 또한 희망 취소도 가능하다.
- login.js/ relogin.js
  학생이나 관리자로 로그인할때 보여지는 페이지이다. relogin.js는 로그인 오류시에 보여지는 페이지다
- myCurrentList.js
  내 신청내역이 보여진다. 재수강 여부 확인하고 수강취소 가능하다.
- mySchedule.js
  나의 시간표를 볼 수 있다.
- stats.js
  관리자로 로그인시 볼 수 있는 통계 페이지이다. 평점평균이 가장 높은 top 10이나 가장 낮은 top 10 등을 볼 수 있다.

### 5. 빌드 과정 및 실행 과정

[Sign in](https://hconnect.hanyang.ac.kr/2022_ite2038_12838/2022_ite2038_2018009070)

- 임의의 폴더(temp)에서 아래 command 입력한다.

```bash
git clone https://hconnect.hanyang.ac.kr/2022_ite2038_12838/2022_ite2038_2018009070.git
```

- 2022_ite2038_2018009070 폴더로 이동한다.

```bash
cd 2022_ite2038_2018009070
```

- project1.zip의 압축을 푼다.
- 압축을 풀고 나서 project1 폴더로 이동하고 yarn을 입력한다. (yarn: 프로젝트 구동하는데 사용한 라이브러리 다운로드 하는 패키지 매니저)

```bash
cd project1
yarn
vi .env
```

- .env 파일에 db에 대한 정보를 저장해줘야한다. mysql의 로그인 정보를 수정한다.

```bash
NEXT_PUBLIC_DB_USER=root
NEXT_PUBLIC_DB_PASSWORD=p@ssw0rd
NEXT_PUBLIC_DB_HOST=localhost
NEXT_PUBLIC_DB_PORT= 3307
NEXT_PUBLIC_DB=DB2018009070
```

- 위 .env 수정 후 하단 코드 입력시 프로그램 실행 완료

```bash
yarn dev
```

### 6. 각 요구사항에 대한 실행 결과

지속적인 트랜잭션이 가능한 인터페이스

![Untitled](pictures/Untitled%203.png)

- 로그아웃시

![Untitled](pictures/Untitled%204.png)

- 학생 로그인시

![Untitled](pictures/Untitled%205.png)

- 관리자 로그인시

![Untitled](pictures/Untitled%206.png)

![Untitled](pictures/Untitled%207.png)

수업번호, 학수번호는 완전일치 검색

교과목명은 like 구문을 이용한 키워드 검색

![Untitled](pictures/Untitled%208.png)

- 관리자 체크하면 관리자 로그인 가능
  ![Untitled](pictures/Untitled%209.png)
- 학생 정보 조회 검색가능 & 지도교수 조회가능

![Untitled](pictures/Untitled%2010.png)

- 학생의 금학기 시간표 조회 가능

![Untitled](pictures/Untitled%2011.png)

- 학생의 성적 조회 가능

![Untitled](pictures/Untitled%2012.png)

- 학생 학적 변경 가능

![Untitled](pictures/Untitled%2013.png)

- 과목 조회 가능

![Untitled](pictures/Untitled%2014.png)

- 과목 증원

![Untitled](pictures/Untitled%2015.png)

- 과목 수강허용가능(수강신청 조건사항 여기도 똑같이 적용 ex) 동일 시간대, 최대학점 등)

![Untitled](pictures/Untitled%2016.png)

![Untitled](pictures/Untitled%2017.png)

- 과목 폐강

![Untitled](pictures/Untitled%2018.png)

![Untitled](pictures/Untitled%2019.png)

- course 개설

![Untitled](pictures/Untitled%2020.png)

- course를 배우는 class 개설 (schema: course ← class)

![Untitled](pictures/Untitled%2021.png)

- 조건1 & 조건3

![Untitled](pictures/Untitled%2022.png)

- 조건2 → 수업이 폐강되면 희망,수강신청한 곳에서 삭제

![Untitled](pictures/Untitled%2023.png)

- OLAP

![Untitled](pictures/Untitled%2024.png)

![Untitled](pictures/Untitled%2025.png)

![Untitled](pictures/Untitled%2026.png)

- 사용자 로그인 / 로그아웃(상단 오른쪽)

![Untitled](pictures/Untitled%2027.png)

![Untitled](pictures/Untitled%2028.png)

- 수강 신청

![Untitled](pictures/Untitled%2029.png)

- 재수강 여부 / 수강취소

![Untitled](pictures/Untitled%2030.png)

- 희망수업 조회 및 취소 가능

![Untitled](pictures/Untitled%2031.png)

- 내 시간표 보기

![Untitled](pictures/Untitled%2032.png)

![Untitled](pictures/Untitled%2033.png)

- 조건1 (이미 신청한지 체크 후 과거 성적 B0 확인)

![Untitled](pictures/Untitled%2034.png)

- 조건2 (정원 체크)

![Untitled](pictures/Untitled%2035.png)

- 조건3 (동일 시간대 체크)

![Untitled](pictures/Untitled%2036.png)

- 조건4 (최대학점 18점 체크)

![Untitled](pictures/Untitled%2037.png)

![Untitled](pictures/Untitled%2038.png)

- E-러닝 강의 시간표 표시 (시간표 하단에 E-러닝 강의 표시)

![Untitled](pictures/Untitled%2039.png)

- 관리자는 모든 학생들의 시간표를 확인할 수 있다.

![Untitled](pictures/Untitled%2040.png)

### 7. (구현시)요구사항 외 추가 기능 및 실행 결과

- 수강신청 버튼 눌러서 성공하면 신청인원 자동으로 1 증가한다.
- 로그아웃시 자동으로 첫 페이지로 돌아간다.
- 희망 수강신청은 이미 신청한 경우 이미 희망했다고 알려준다.
- 수강신청시 재수강인 경우 재수강이 되었다고 알려준다.
- 시간이 NO인 것은 시간미지정 강좌 시간표 하단에 표시
- 재수강 불가한 경우 성적 알려주면서 재수강 불가한 이유 알려준다.
- 내 수강신청 사이트는 시간 24시간으로 표현한다.
- 수강 허용할때도 재수강, 시간, 최대학점등 체크한다.
- class_no 그냥 안쓰고 class_id를 학수번호로 사용했다.
- e-러닝으로 분류되는 강의는 시간 저장을 NO로 했다.
