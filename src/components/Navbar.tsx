import { navData } from "@/data/navData"

const Navbar = () => {
  return (
      <nav>
          <ul className="flex gap-10 justify-center text-lg font-bold text-white  bg-gradient-to-r from-indigo-900 to-indigo-700 py-2">
                  {navData.map((item) =>
                      <li key={item.id}>{item.text}</li>
                  )}
          </ul>
    </nav>
  )
}

export default Navbar