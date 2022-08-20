import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import images from "~/assets/images";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img className={cx("avatar")} src={images.noImage} alt="" />

        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>anhnt1210</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyen Tuan Anh</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
