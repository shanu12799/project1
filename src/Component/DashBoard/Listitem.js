import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Table from './Table'
import Line from './LineChart'
import Bar from './BarChart'
import Doughnut from './DoughnutChart'
import Pie from './PieChart'
import Radar from './RadarChart'
import { useHistory } from 'react-router-dom';

export default function MainListItems(props) 
{
  const history = useHistory();
  const handleClick=(view)=>{
    props.changeView(view)
  }
  const Logout=()=>{
    history.push("/")
  }
    return(
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Line Chart" onClick={()=>handleClick(<Line/>)} />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Bar chart" onClick={()=>handleClick(<Bar/>)}/>
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Doughnut Chart" onClick={()=>handleClick(<Doughnut/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pie Chart" onClick={()=>handleClick(<Pie/>)}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Radar Chart" onClick={()=>handleClick(<Radar/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Table" onClick={()=>handleClick(<Table/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" onClick={Logout} />
    </ListItem>
  </div>)

}
