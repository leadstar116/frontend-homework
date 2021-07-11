import { useDispatch } from 'react-redux'
import { toggleDropdownMenuVisibility } from './actions'

type Props = {
  text: string,
  icon: string,
}

const MenuLink = ({ icon, text }: Props) => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleDropdownMenuVisibility());
  }

  return (
    <div className="menu-link-item menu-item" onClick={handleMenuClick}>
      <i className="material-icons">
        {icon}
      </i>

      {text}
    </div>
  );
};

export default MenuLink;
