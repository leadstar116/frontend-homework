import MenuLink from './MenuLink'
import Companies from './Companies'

const DropdownMenu = () => (
  <div className="dropdown-menu">
    <Companies />

    <div className="menu-links-wrapper">
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
      />

      <MenuLink
        text="Community"
        icon="people"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
      />
    </div>

    <div className="menu-footer">
      <MenuLink
        text="Settings"
        icon="settings"
      />

      <MenuLink
        text="Log out"
        icon="exit_to_app"
      />
    </div>
  </div>
)

export default DropdownMenu
