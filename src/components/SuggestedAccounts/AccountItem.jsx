import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from "./SuggestedAccounts.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem(props) {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        offset={[-20, 0]}
        render={renderPreview}
        delay={[800, 0]}
        placement="bottom"
      >
        <div className={cx("account-item")}>
          <img className={cx("avatar")} src={images.noImage} alt="" />

          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>anhntph29220</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Nguyen Tuan Anh</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
