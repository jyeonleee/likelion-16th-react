import * as React from 'react'
import './App.css'

/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 */

export default function App() {
  // return null /* 아무 것도 반환하지 않음 (화면에 아무 것도 그리지 않음) */

  // 함수가 JSX(React.ReactNode 타입) 반환
  // Build Tools (Vite, Webpack, Turbopack, ....)
  // *.tsx (TypeScript + JSX) -> TSC -> *.js (React API: React.createElement(type, props, ...children))

  // JSX (JavaScript 확장 구문: 마크업 (구조 설계 in JavaScript 파일))
  // JSX는 문(statement)이다? 값(expression, value)이다?
  // return <header className="header">
  //   <h1>
  //     <dfn><abbr title="JavaScript eXtension">JSX</abbr></dfn> 기초 배우기
  //   </h1>
  // </header>

  // JSX가 아닌, React API(함수)
  return React.createElement(
    'header',
    { className: 'header' },
    React.createElement(
      'h1',
      null,
      React.createElement(
        'dfn',
        null,
        React.createElement('abbr', { title: 'JavaScript eXtension' }, 'JSX'),
      ),
      ' \uAE30\uCD08 \uBC30\uC6B0\uAE30',
    ),
  )
}
