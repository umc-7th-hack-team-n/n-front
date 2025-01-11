

```
💡
:깃모지: 태그:  #이슈번호 제목(내용)

ex) :art: Style: #11 홈 버튼 컴포넌트 구현

body 디테일 내용 작성 → ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ

```


```
## Git Convention

### commit message structure
제목 본문 꼬릿말로 구성

:gitmoji: <type> : <Subject>
body
footer
```

```tsx
### Type, gitmoji

깃모지, 태그: 제목의 형태
- :sparkles: feat: 새로운 기능 추가, 새로운 디자인 관련 기능 추가 등
- :bug: fix: 버그 수정, 디자인 버그 수정 등
- :memo: docs: 문서 추가, 삭제, 수정
- :white_check_mark: test: 테스트 코드 추가
- :recycle: refactor: 코드 리팩토링
- :art: style: 코드 의미에 영향을 주지 않는 변경사항(코드 포맷팅, 세미콜론 누락 등..),
                레이아우스, UI/UX 디자인 변경 코드 작업 등 포함
- :wrench: chore: 빌드 부분 혹은 패키지 매니저 수정사항
- :truck: rename: 파일, 경로, route를 옮기거나 이름 변경
- :fire: remove: 삭제(파일, 코드)

### Body
- 본문은 한 줄 당 72자 내로 작성한다.
- 본문 내용은 양에 구애받지 않고 최대한 상세히 작성한다.
- 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명한다.

### footer
  꼬리말은 optional이고 이슈 트래커 ID를 작성한다.
꼬리말은 "유형: #이슈 번호" 형식으로 사용한다.
여러 개의 이슈 번호를 적을 때는 쉼표(,)로 구분한다.
이슈 트래커 유형은 다음 중 하나를 사용한다.
- Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
- Resolves: 이슈를 해결했을 때 사용
- Ref: 참고할 이슈가 있을 때 사용
- Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)

    ex) Fixes: #45 Related to: #34, #23

### commit 예시

feat: "게시판 글쓰기 기능 구현"

사진 첨부, 글쓰기 API 개발

Resolves: #123
Ref: #456
Related to: #48, #45
```
