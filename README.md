# 기능 정의
1. 할 일을 추가할 수 있다
2. 할 일 리스트를 볼 수 있다
3. 할 일에 대해 끝남/안끝남을 표시할 수 있다
4. 할 일을 삭제할 수 있다
---

# 사용스택 (package 포함)
백엔드  `Express` `Mongoose` `Cors` `BodyParser`

프론트엔드  `React` `Axios`

Api Test `Postman`

---

### 백엔드 준비
1. 기본 세팅 (npm, Express, Mongoose, app listener)
2. 라우터 주소 정의 
3. 데이터베이스 스키마 정의
4. 기능 정의 (CRUD)
5. 테스트 (postman)
---

### 프론트엔드 준비
1. 깃 clone
2. 기능 만들기 (CRUD)
3. 테스트


프론트엔드 레포 https://github.com/SophieMarieSo/todo-list-frontend

(forked from https://github.com/legobitna/todoapp-fe-for-student)

---

### API 정의
1. 할 일을 추가할 수 있다: /tasks -> `post`
2. 할 일 리스트를 볼 수 있다: /tasks -> `get`
3. 할 일에 대해 끝남/안끝남을 표시할 수 있다: /tasks/:id -> `put`
4. 할 일을 삭제할 수 있다: /tasks/:id -> `delete`
---

### 배포
1. DB 배포 `MongonDb Atlas`
2. 백엔드 배포 `AWS BeanStalk`
3. 프론트엔드 배포 `Netlify`
