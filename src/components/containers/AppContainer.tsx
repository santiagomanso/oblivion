interface appContianerI {
  children?: React.ReactNode
}

const AppContainer = ({ children }: appContianerI) => {
  return (
    <main className='flex flex-col bg-gradient-to-br from-white to-white h-screen'>
      {/* navbar */}
      <div className='flex justify-center items-center flex-1'>{children}</div>
    </main>
  )
}

export default AppContainer
