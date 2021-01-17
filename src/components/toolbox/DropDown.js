import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Ne Nedir?</DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="ne-nedir/#tabs-1">
           Yönetim ve Organizasyon
        </DropdownItem>
        <DropdownItem href="ne-nedir/#tabs-2">Stratejik Yönetim</DropdownItem>
        <DropdownItem href="ne-nedir/#tabs-3">
          Kurum Kültürü ve Liderlik
        </DropdownItem>
        <DropdownItem href="ne-nedir/#tabs-4">Girişimcilik</DropdownItem>
        <DropdownItem href="ne-nedir/#tabs-5">Kobiler</DropdownItem>
        <DropdownItem href="ne-nedir/#tabs-6">Aile İşletmeleri</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Akademik Danşmanlık</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
