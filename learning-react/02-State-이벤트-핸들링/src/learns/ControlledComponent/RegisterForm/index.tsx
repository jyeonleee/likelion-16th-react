import S from './style.module.css'

// (리액트에 의해) 제어된 컴포넌트 (Controlled Component)
// (리액트에 의해) 제어되지 않은 컴포넌트 (Uncontrolled Component)

export default function RegisterForm() {
  
  // 폼 제출 핸들러 작성
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault() // 브라우저 기본 작동 방지

    // form 요소 참조
    const formElement = e.currentTarget
    // formData 객체 생성
    const formData = new FormData(formElement)

    // formData 객체의 get() 메서드 사용해서 사용자 입력 값을 가져올 수 있음
    // const username = formData.get('username')
    // const useremail = formData.get('useremail')
    // console.log(username, useremail)
    
    // Object.fromEntries() 메서드를 사용해 폼 데이터를 일반 객체화
    const { username, useremail } = Object.fromEntries(formData)
    console.log(username, useremail)

    // 사용자 입력 값을 서버에 전송 (서버에서 응답 받아 화면에 표시)

  }

  return (
    <form className={S.form} onSubmit={handleSubmit}>
      <div className={S.field}>
        <label htmlFor="username" className={S.label}>
          이름
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className={S.input}
          placeholder="이름을 입력해주세요."
          onInput={(e) => {

            // 개발자가 타입스크립트에게 해당 타입을 
            // 확신을 가지고 단언(assertion)해야 한다.
            // 
            // 타입스크립트야. 
            // input은 EventTarget이 맞는데 
            // 더 정확히 말하면 'HTMLInputElement'란다.
            const { value } = e.target as HTMLInputElement

            console.log(value)
            
            if (value.trim().length < 2) {
              console.warn('이름 값은 2글자 이상 입력해야 해요!')
            }
          }}
        />
      </div>

      <div className={S.field}>
        <label htmlFor="useremail" className={S.label}>
          이메일
        </label>
        <input
          id="useremail"
          name="useremail"
          type="email"
          className={S.input}
          placeholder="user@company.io"
        />
      </div>

      <button type="submit" className={S.button}>
        제출
      </button>

      <p className={S.preview}>출력된 이름:</p>
    </form>
  )
}
