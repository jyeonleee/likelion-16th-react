// import { createElement } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import S from './style.module.css'
import Image from '@/components/Image'

export default function App() {
  return (
    <div className={S.container}>
      <Header>
        <h1>
          <Image src="/react.svg" alt="리액트 로고" width={42} height={42} /> 내
          맘대로 헤더!
        </h1>
      </Header>

      <Header>
        <h2>내 맘대로 컴포넌트 조립하기!</h2>
        <p>컴포넌트를 조립해서 쓰니 유지보수가 편해요!</p>
      </Header>

      <div data-placeholder />
      <Footer slogan={'모든 이들에게 행복을!'} />

      {/* {createElement(
        // 컴포넌트 이름 (Component Name)
        Footer,
        // 컴포넌트 속성 (Component Props)
        { slogan: '완주 이후엔 스스로 학습 가능!' },
      )} */}
    </div>
  )
}
