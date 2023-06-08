interface layoutI {
  children?: React.ReactNode
}

const Layout = ({ children }: layoutI) => {
  return (
    <main className='flex flex-col bg-gradient-to-br from-white to-white h-screen'>
      {/* navbar */}
      <div className='flex justify-center items-center flex-1'>{children}</div>
    </main>
  )
}

export default Layout
