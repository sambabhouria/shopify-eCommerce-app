import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => (
  <div className="bg-blue-500 text-white p-4 text-center mt-auto">
    <div>&copy; Copyright | All Rights Reserved</div>
    <div>
      <Link
        to="https://github.com/sambabhouria"
        className="hover:underline hover:font-bold opacity-85 hover:opacity-100"
      >
        Samba DIALLO
      </Link>
    </div>
  </div>
)

export default Footer
