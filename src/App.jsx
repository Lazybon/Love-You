import { useState, useEffect } from 'react'
import Typist from 'react-typist-component'
import { useTransition, useSpringRef, animated } from 'react-spring'
import Heart from './Heart.jsx'
import './App.css'

const stylesProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const pages = [
  ({ style, ...otherProps }) => (
    <Heart {...otherProps} style={{ ...stylesProps, ...style }} />
  ),
  ({ style, ...otherProps }) => (
    <animated.div
      {...otherProps}
      style={{
        padding: 20,
        ...stylesProps,
        fontSize: 24,
        width: '100%',
        ...style,
      }}
    >
      <Typist typingDelay={70}>
        Ну приветик моя маленькая именинница! Я так рад и очень горжусь тем, что
        такой светлый, чудестный ангел разделяет со мной эту жизнь! Я очень
        люблю тебя мой цветочек! Желаю тебе всего самого лучшего, что есть в
        этом мире! Я очень люблю тебя! Иди поцелую!) P.S Как дочитаешь тыкни по
        сюда
      </Typist>
    </animated.div>
  ),
  ({ style, ...otherProps }) => (
    <animated.div style={{ ...stylesProps, ...style }} {...otherProps}>
      <img src="src/assets/img.png" alt="image" height={300} width={300} style={{ borderRadius: 20 }}/>
    </animated.div>
  ),
]

function App() {
  const [index, set] = useState(0)
  const onClick = () => set((state) => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  useEffect(() => {
    transRef.start()
  }, [index])

  return (
    <div className="app">
      {transitions((style, i) => {
        console.log(i)
        const Page = pages[i]
        return <Page key={i} style={style} onClick={onClick} />
      })}
    </div>
  )
}

export default App
