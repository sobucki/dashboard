import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';
import CategoryIcon from '@material-ui/icons/Category';
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

interface ListItemLinkProps extends LinkProps {
  primary: React.ReactNode;
  icon: React.ReactNode;
}

function ListItemLink({ to, primary, icon }: ListItemLinkProps) {
  return (
    <li>
      <ListItem button component={Link} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

function Sidebar() {
  return (
    <>
      <List>
        <ListItemLink to="/category" icon={<ListIcon />} primary="Category" />
        <ListItemLink
          to="/home"
          icon={<CategoryIcon />}
          primary="Organization"
        />
        <ListItemLink to="/users" icon={<PersonAddIcon />} primary="Users" />
      </List>
      <Divider />
    </>
  );
}

export default Sidebar;
