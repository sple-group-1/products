import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { hasValidPermission } from ".";

const MenuItem = ({ route, label, permission, subMenus, isCollapsed, checkPermission }) => {
  const isVisible = useMemo(() => {
    if (subMenus?.length > 0) {
      return subMenus.some((subMenu) => hasValidPermission(subMenu, checkPermission));
    }
    return !permission || checkPermission(permission);
  }, [subMenus, permission, checkPermission]);

  if (!isVisible) return null;

  if (subMenus?.length > 0) {
    return (
      <li>
        <details open={!isCollapsed}>
          <summary className="text-base">{label}</summary>
          <ul>
            {subMenus.map((menu) => (
              <MenuItem {...menu} key={menu.label} checkPermission={checkPermission} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <Link to={route} className="text-base">
        {label}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string.isRequired,
  permission: PropTypes.string,
  subMenus: PropTypes.arrayOf(PropTypes.shape(this)),
  isCollapsed: PropTypes.bool,
  checkPermission: PropTypes.func
};

export default React.memo(MenuItem);
