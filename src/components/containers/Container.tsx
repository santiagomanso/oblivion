import { ContainerI } from '@/interfaces/containerInterface'

const Container = ({ children, bgImg, col, colCenter, style }: ContainerI) => {
  return (
    <section
      className={`bg-gray-50 rounded-md shadow-md w-full max-w-6xl h-3/4 animate__animated animate__fadeIn
              ${style ? style : ''}
              ${bgImg ? 'relative' : ''}`}
    >
      {bgImg ? (
        <img
          className='absolute w-full h-full -z-10'
          src={bgImg}
          alt='background'
        />
      ) : (
        ''
      )}
      {children}
    </section>
  )
}

export default Container

// ${flex ? 'flex' : ''}
// ${col ? 'flex-col' : ''}
// ${colCenter ? 'items-center' : ''}
