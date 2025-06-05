import { TbTilde } from 'react-icons/tb'
import { IoCodeSlash } from "react-icons/io5";
import { MdFolderOpen } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { RxDragHandleDots2 } from "react-icons/rx";
import "../styles/sideNav.css";
import { NavLink } from 'react-router';
import type { Dispatch, SetStateAction } from 'react';

interface SideNavProps   {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SideNav = ({isOpen, setIsOpen}: SideNavProps) => {

  const open = () => setIsOpen(!isOpen);
  return (
    <div className='sideNav'>
      <ul className={`${isOpen ? "opened" : "closed"}`}>
        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "#FFADAD" } : { color: "#8a817c" }} to={"/"}>
            <TbTilde />
          </NavLink>
        </li>

        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "#FFD6A5" } : { color: "#8a817c" }} to={`/skills`}>
            <IoCodeSlash />
          </NavLink>
        </li>

        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "#FDFFB6" } : { color: "#8a817c" }} to={`/projects`}>
            <MdFolderOpen />
          </NavLink>
        </li>

        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "#A0C4FF" } : { color: "#8a817c" }} to={`/contact`}>
            <MdOutlinePhone />
          </NavLink>
        </li>

        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "#CAFFBF" } : { color: "#8a817c" }} to={`resources`}>
            <HiOutlineAcademicCap />
          </NavLink>
        </li>

      </ul>
      <RxDragHandleDots2 className={`toggle ${isOpen ? "" : "click"}`} onClick={open} />
    </div>
  )
}

export default SideNav