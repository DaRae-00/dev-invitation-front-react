import s from './Logo.module.css'

const Logo = ({ className = '', ...props }) => (
  <div className={s.root}>
    <div className="ml-4"> Invitation Card </div>
  </div>
)

export default Logo
