import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import './Sidebar.css'
import SidebarOption from './SidebarOption'



function Sidebar() {
  return (
		<div className="sidebar">
			<Button
				startIcon={<AddIcon fontSize="large" />}
				className="sidebar__compose"
			>
				Compose
			</Button>

			<SidebarOption
				Icon={InboxIcon}
				title="Inbox"
				number={56}
				selected={true}
			/>
			<SidebarOption Icon={StarIcon} title="Starred" number={56} />
			<SidebarOption Icon={LabelImportantIcon} title="Important" number={56} />
			<SidebarOption Icon={AccessTimeIcon} title="Snozed" number={56} />
			<SidebarOption Icon={NearMeIcon} title="Sent" number={56} />
			<SidebarOption Icon={LabelImportantIcon} title="Snozed" number={56} />
			<SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
			<SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
		</div>
	);
}

export default Sidebar