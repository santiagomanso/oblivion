import { ContainerI } from '@/interfaces/containerInterface'

const Container = ({ children, flex, col, colCenter, style }: ContainerI) => {
  return (
    <section
      className={`bg-gray-50 rounded-md shadow-md w-full max-w-6xl h-3/4
              ${style ? style : ''}
                `}
    >
      {children}
    </section>
  )
}

export default Container

// ${flex ? 'flex' : ''}
// ${col ? 'flex-col' : ''}
// ${colCenter ? 'items-center' : ''}
