import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import { HomeIcon, UserGroupIcon, LiveIcon } from "~/components/Icons";
import config from "~/config";
import styles from "./Sidebar.module.scss";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>

      <SuggestedAccounts label={"Suggested accounts"} />
      <SuggestedAccounts label={"Following accounts"} />
    </aside>
  );
}

export default Sidebar;
