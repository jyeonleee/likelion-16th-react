import { useEffect, useState } from 'react'
import S from './TodoSearch.module.css'

// API 엔드포인트(Endpoint)
const { VITE_API_URL: API_URL } = import.meta.env
console.log(`${API_URL}/api/todos?userId=${1}`)

// 응답 데이터 타입 지정
interface ResponseTodosData {
  message: string
  todos: Todo[]
}

interface Todo {
  id: number
  content: string
  completed: boolean
  userId: number
}

export default function TodoSearch() {
  // 리액트로 하여금 화면을 변경
  // 선언적 API로 제어 (상태 선언)
  // - 로딩(loading) 상태
  const [loading] = useState(false);
  // - 할 일 목록(todos) 상태
  const [todos, setTodos] = useState<Todo[]>([]);
  // - 사용자 ID(userId) 상태
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // console.log(`${API_URL}/api/todos?userId=${userId}`);
    // 비동기 gkatn

    
    if (userId === '') { 
      setTodos([])
      return 
    }
    const getTodos = async () => {
      const response = await fetch(`${API_URL}/api/todos?userId=${userId}`);
      const josn = await response.json()
      console.log(josn);
      

    }
    getTodos()
  }, [userId])


  return (
    <section className={S.container}>
      <header>
        <h2>사용자 ID로 할 일 찾기</h2>
        <p className={S.info}>사용자 ID를 입력해 목록을 확인하세요.</p>
      </header>

      <div className={S.searchField}>
        <label htmlFor="user-id-input" className="sr-only">
          사용자 ID
        </label>
        <input
          id="user-id-input"
          type="number"
          min={1}
          max={20}
          placeholder="사용자 ID를 입력하세요 (예: 1 ~ 20)"
          value={userId}
          onChange={(e) => setUserId(e.target.value.trim())}
        />
      </div>

      {/* 할 일 목록 템플릿 */}
      <ul className={S.list}>
        <li className={S.item}>
          <span className={S.textContent}>아직 완료 못한 일</span>
          <span aria-label="예정" style={{ opacity: 0.3 }}>
            ❎
          </span>
        </li>
        <li className={S.item}>
          <span className={`${S.textContent} ${S.completed}`}>완료한 일</span>
          <span aria-label="완료" style={{ opacity: 1 }}>
            ✅
          </span>
        </li>
      </ul>

      {/* 상태 알림 템플릿 */}
      <div role="status" className={S.statusRegion}>
        {/* 데이로 로딩 중 표시 메시지 */}
        <p className={S.loading}>데이터를 가져오고 있습니다...</p>
        {/* 검색 결과가 없을 경우 표시 메시지 */}
        <p>검색 결과가 없습니다.</p>
      </div>
    </section>
  );
}
